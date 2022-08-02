from array import array

def readObject ( path ):
    with open(path) as f:
        lines = f.readlines()
    return lines

def createDocList ( codeblock ):
    i=1
    doclist=[]
    while i< len(codeblock)-1:
        docs = []
        paramPairs = []
        ##setBrowserAppType(value: string): IContext;
        line = codeblock[i].strip()
        if len(line) == 1:
            break;
        if line[0:2] == "//":
            i = i+1
            continue
            
        methodname = line.split("(")[0].strip()
        paramref = line.split("(")[1].strip()
        paramsstr = paramref.split(")")[0].strip()
        if len(paramsstr)>0:
            paramarr = paramsstr.split(",")
            j=0
            while j< len(paramarr):
                paramPairs = paramPairs + paramarr[j].split(":")
                j = j + 1
        rarr = line.rsplit(":")
        returnVal = rarr[len(rarr)-1].strip()

        docs.append ( methodname )
        docs.append ( returnVal )
        if len(paramsstr)>0:
            docs.append ( paramPairs )
        else:
            docs.append ( [] )

        doclist.append( docs )
        i = i+1
    return doclist

def getParamDocs ( pairs ):
    i=0
    docs = []
    while i< len(pairs):
        docs.append (" ".join( ["* @key",pairs[i].strip() ] ) )
        docs.append (" ".join( ["* @type",pairs[i+1].strip() ] ) )
        docs.append ("* @desc" )
        docs.append ("* @value" )
        i = i+2
    return docs

def setMethods ( codeblock, doclist ):
    i=0
    docs = []
    while i< len(doclist):
        docs = docs + ["/**"]
        docs.append ( " ".join( [ "* @method", doclist[i][0] ] ).strip() )
        docs.append ( "* @group")
        docs.append ( "* @desc")
        docs.append ( " ".join( [ "* @return", doclist[i][1] ] ).strip() )
        params = getParamDocs( doclist[i][2]  )
        if len(params)>0:
            docs = docs + params
        
        docs = docs + ["*/", codeblock[i+1].strip() ]
        i = i + 1

    print( "\n".join(docs) ) 
    return docs

codeblock = readObject('C:/Users/pup/Documents/SCPython/documentation-convertor/SDK/input/requestMethods.js')
doclist = createDocList (codeblock)    
output = setMethods( codeblock, doclist )

f = open("C:/Users/pup/Documents/SCPython/documentation-convertor/SDK/output/taggedmethods.js", "w")
f.write("\n".join( ["export interface Request {"] + output + ['}']))
f.close()