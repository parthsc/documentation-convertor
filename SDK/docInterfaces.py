from array import array

def readObject ( path ):
    with open(path) as f:
        lines = f.readlines()
    return lines

## Process
# extract documentation blocks as lines in blocks
# blocks start with "/**" and end with "*/""

def createDocList ( code ):
    i=0
    docList = []
    docListItem = []
    docListItemOpened = False

    while i < len(code):
        line = code[i].strip()
        if line[0:3] == "/**":
            docListItem = []
            docListItemOpened = True
        if line[0:3] == "*/":
            docList.append( docListItem )
            docListItemOpened = False
        if line[0:2] == "* " and docListItemOpened :
            docListItem.append ( line[2:] )
        i = i+1
    
    #print( docList )
    return docList



def getDocKey( line ):
    if type(line)==list:
       return ""
    
    keys = ["@object", "@method", "@desc", "@return", "@key", "@type", "@value", "@group"]
    split = line.split(" ")
    if len(split) > 1:
        if split[0] in keys:
            return split[0]
    return ""

def extractBlocksFromDocList( doclist ):
    i=0
    dlist = []
    docs=[]
    doclistItem =[]
    methodFlag = False
    methodDoc = []
    while i<len(doclist):
        if i == len(doclist):
            if methodFlag:
                doclistItem.append(methodDoc)
                docs.append(doclistItem)
            break

        dlist = doclist[i]
        line = dlist[0].strip()
        key = getDocKey(line)
        if key == "@object":
            if len(doclistItem) > 0:
                docs.append(doclistItem)
                doclistItem = []
            doclistItem = dlist
        else:
            if key == "@method":
                if methodFlag == False:
                    if len(doclistItem) > 0:
                        docs.append(doclistItem)
                    methodDoc = [dlist]
                    methodFlag = True
                else:
                    docs.append ( methodDoc )
            if methodFlag:
                methodDoc.append(dlist)
            else:
                doclistItem.append(dlist)     
        i = i +1

    #print ( docs )
    return docs

def extractContent (line):
    if type(line)==list and "@method" in line[0]:
        return extractMethodContent (line)

    key = getDocKey(line)
    if len(key):
        dstring = line.split(key)
        if len(dstring) > 1:
            return dstring[1]
        else:
            return ""
    
    return line

def extractMethodContent ( block ):
    itemArr = []
    itemArr = itemArr + getKeyTableEnd()

    docstrings = ["<section><title>"]
    docstrings.append ( extractContent( block[0] ).strip() )
    docstrings.append ( "</title>")
    docstrings.append ( "<para>")
    docstrings.append( extractContent( block[1] ).strip() )
    docstrings.append ( "</para>")
    docstrings.append ( "<para>")
    docstrings.append( extractContent( block[2] ).strip() )
    docstrings.append ( "</para>")

    docstrings = docstrings + getKeyTableIntro()

    i=3
    while i< len(block):
        row = formatTableRow(block[i])
        docstrings = docstrings + row
        i= i +1

    docstrings = docstrings + getKeyTableEnd()

    docstrings.append ( "</section>" )
    docstrings = itemArr + docstrings;
    return "".join(docstrings)

    str = ""
    return ""

def getKeyTableEnd():
    itemArr = []
    itemArr.append("</tbody>")
    itemArr.append("</informaltable>")
    return itemArr

def getArgumentTableIntro(cols):
    itemArr = [ "<informaltable>" ]
    itemArr.append("<thead><tr>")
    itemArr.append("<th><para>Argument</para></th>")
    itemArr.append("<th><para>Type</para></th>")
    itemArr.append("<th><para>Description</para></th>")
    if cols > 3 :
        itemArr.append("<th><para>Value</para></th>")
    itemArr.append("</tr></thead>")
    itemArr.append("<tbody>")
    return "\n".join( itemArr)

def getKeyTableIntro(cols=4):
    itemArr = [ "<informaltable>" ]
    itemArr.append("<thead><tr>")
    itemArr.append("<th><para>Property</para></th>")
    itemArr.append("<th><para>Type</para></th>")
    itemArr.append("<th><para>Description</para></th>")
    if cols > 3 :
        itemArr.append("<th><para>Value</para></th>")
    itemArr.append("</tr></thead>")
    itemArr.append("<tbody>")
    return itemArr

def formatTableRow ( block ):
    row = [ "<tr>"]
    i=0
    while i< len(block):
        key = getDocKey( block[i] )
        if key == "@method":
            content = extractMethodContent (block[i])
        else:
            content = extractContent (block[i])
            isNote = False
            if "Note:" == content[0:5]:
                isNote = True
            if key == "":
                if isNote:
                    row = row + [ "<note><para>", content[5:],"</para></note>" ] 
                else:
                    row = row + [ "<para>", content,"</para>" ]
            else:
                if ( row[len(row)-1] ) != "<tr>":
                    row.append ("</td>")
                if isNote:
                    row = row + [ "<td><note><para>", content[5:],"</para></note>" ] 
                else:
                    row = row + [ "<td><para>",content,"</para>" ]
        i = i+1
    
    row.append ("</td>")
    row.append ("</tr>")
    return row

def formatBlock( block, format="paligo" ):
    docstrings = ["<section><title>"]
    docstrings.append ( extractContent( block[0]))
    docstrings.append ( "</title>")
    docstrings.append ( "<para>")
    docstrings.append( extractContent( block[1]) )
    docstrings.append ( "</para>")

    docstrings = docstrings + getKeyTableIntro()

    i=2
    while i< len(block):
        row = formatTableRow(block[i])
        docstrings = docstrings + row
        i= i +1

    docstrings = docstrings + getKeyTableEnd()

    docstrings.append ( "</section>" )
    return "".join(docstrings)

def formatBlocks( blocks, format="paligo" ):
    i=0
    docs=[]
    docItem =[]
    while i<len(blocks):
        docs.append ( formatBlock( blocks[i], format) )
        i = i+1
    return docs

    
codeblock = readObject('C:/Users/pup/Documents/SCPython/documentation-convertor/SDK/input/interfaces_batch.js')
doclist = createDocList (codeblock)       
blocks = extractBlocksFromDocList ( doclist ) 
docs = formatBlocks( blocks )
print( docs )

f = open("C:/Users/pup/Documents/SCPython/documentation-convertor/SDK/output/taggedInterfaces.js", "w")
f.write("\n".join( docs) )
f.close()