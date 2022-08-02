export interface Request {
/**
* @method getRfkId
* @group
* @desc
* @return string
*/
getRfkId(): string
/**
* @method setRfkId
* @group
* @desc
* @return Request
* @key rfkId
* @type string
* @desc
* @value
*/
setRfkId(rfkId: string): Request
/**
* @method getWidgetInfo
* @group
* @desc
* @return any
* @key widgetId
* @type string
* @desc
* @value
*/
getWidgetInfo(widgetId: string): any
/**
* @method addAllAppearanceTemplatesDevices
* @group
* @desc
* @return Request
*/
//addWidgetBatchItem(widgetId: string, config?: Omit<BatchItem, "widget">): Request
/**
* @method addAllAppearanceTemplatesSections
* @group
* @desc
* @return Request
*/
//addAllWidgetsBatchItem(config?: Omit<BatchItem, "widget">): Request
/**
* @method addAllAppearanceVariablesSections
* @group
* @desc
* @return Request
*/
addAllAppearanceTemplatesDevices(): Request
/**
* @method getAppearance
* @group
* @desc
* @return Appearance
*/
addAllAppearanceTemplatesSections(): Request
/**
* @method setAppearance
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Appearance
* @desc
* @value
*/
addAllAppearanceVariablesSections(): Request
/**
* @method resetAppearance
* @group
* @desc
* @return IRfkRequest
*/
getAppearance(): Appearance
/**
* @method updateAppearance
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Appearance
* @desc
* @value
*/
setAppearance(value: Appearance): IRfkRequest
/**
* @method getAppearanceTemplates
* @group
* @desc
* @return Templates
*/
resetAppearance(): IRfkRequest
/**
* @method setAppearanceTemplates
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Templates
* @desc
* @value
*/
updateAppearance(value: Appearance): IRfkRequest
/**
* @method resetAppearanceTemplates
* @group
* @desc
* @return IRfkRequest
*/
getAppearanceTemplates(): Templates
/**
* @method updateAppearanceTemplates
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Templates
* @desc
* @value
*/
setAppearanceTemplates(value: Templates): IRfkRequest
/**
* @method getAppearanceTemplatesDevices
* @group
* @desc
* @return DeviceType[]
*/
resetAppearanceTemplates(): IRfkRequest
/**
* @method setAppearanceTemplatesDevices
* @group
* @desc
* @return IRfkRequest
* @key value
* @type DeviceType[]
* @desc
* @value
*/
updateAppearanceTemplates(value: Templates): IRfkRequest
/**
* @method resetAppearanceTemplatesDevices
* @group
* @desc
* @return IRfkRequest
*/
getAppearanceTemplatesDevices(): DeviceType[]
/**
* @method addAppearanceTemplatesDevice
* @group
* @desc
* @return IRfkRequest
* @key value
* @type DeviceType
* @desc
* @value
*/
setAppearanceTemplatesDevices(value: DeviceType[]): IRfkRequest
/**
* @method removeAppearanceTemplatesDevice
* @group
* @desc
* @return IRfkRequest
* @key value
* @type DeviceType
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetAppearanceTemplatesDevices(): IRfkRequest
/**
* @method getAppearanceTemplatesKeepOriginalCss
* @group
* @desc
* @return boolean
*/
addAppearanceTemplatesDevice(value: DeviceType): IRfkRequest
/**
* @method setAppearanceTemplatesKeepOriginalCss
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
removeAppearanceTemplatesDevice(value: DeviceType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getAppearanceTemplatesKeepVariables
* @group
* @desc
* @return boolean
*/
getAppearanceTemplatesKeepOriginalCss(): boolean
/**
* @method setAppearanceTemplatesKeepVariables
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
setAppearanceTemplatesKeepOriginalCss(value: boolean): IRfkRequest
/**
* @method resetAppearanceTemplatesKeepVariables
* @group
* @desc
* @return IRfkRequest
*/
getAppearanceTemplatesKeepVariables(): boolean
/**
* @method getAppearanceTemplatesSections
* @group
* @desc
* @return SectionType[]
*/
setAppearanceTemplatesKeepVariables(value: boolean): IRfkRequest
/**
* @method setAppearanceTemplatesSections
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SectionType[]
* @desc
* @value
*/
resetAppearanceTemplatesKeepVariables(): IRfkRequest
/**
* @method removeAppearanceTemplatesSection
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SectionType
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
getAppearanceTemplatesSections(): SectionType[]
/**
* @method getAppearanceVariables
* @group
* @desc
* @return Variables
*/
setAppearanceTemplatesSections(value: SectionType[]): IRfkRequest
/**
* @method setAppearanceVariables
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Variables
* @desc
* @value
*/
removeAppearanceTemplatesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method resetAppearanceVariables
* @group
* @desc
* @return IRfkRequest
*/
getAppearanceVariables(): Variables
/**
* @method updateAppearanceVariables
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Variables
* @desc
* @value
*/
setAppearanceVariables(value: Variables): IRfkRequest
/**
* @method getAppearanceVariablesSections
* @group
* @desc
* @return SectionType[]
*/
resetAppearanceVariables(): IRfkRequest
/**
* @method resetAppearanceVariablesSections
* @group
* @desc
* @return IRfkRequest
*/
updateAppearanceVariables(value: Variables): IRfkRequest
/**
* @method addAppearanceVariablesSection
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SectionType
* @desc
* @value
*/
getAppearanceVariablesSections(): SectionType[]
/**
* @method removeAppearanceVariablesSection
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SectionType
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetAppearanceVariablesSections(): IRfkRequest
/**
* @method getBatchItems
* @group
* @desc
* @return BatchItem[]
*/
addAppearanceVariablesSection(value: SectionType): IRfkRequest
/**
* @method setBatchItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type BatchItem[]
* @desc
* @value
*/
removeAppearanceVariablesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method resetBatchItems
* @group
* @desc
* @return IRfkRequest
*/
getBatchItems(): BatchItem[]
/**
* @method addBatchItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type BatchItem
* @desc
* @value
*/
setBatchItems(value: BatchItem[]): IRfkRequest
/**
* @method removeBatchItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type BatchItem
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetBatchItems(): IRfkRequest
/**
* @method getContent
* @group
* @desc
* @return Content
*/
addBatchItem(value: BatchItem): IRfkRequest
/**
* @method setContent
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Content
* @desc
* @value
*/
removeBatchItem(value: BatchItem, filter?: (v: any) => boolean): IRfkRequest
/**
* @method resetContent
* @group
* @desc
* @return IRfkRequest
*/
getContent(): Content
/**
* @method updateContent
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Content
* @desc
* @value
*/
setContent(value: Content): IRfkRequest
/**
* @method getContentArticle
* @group
* @desc
* @return any
*/
resetContent(): IRfkRequest
/**
* @method etContentArticle
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any
* @desc
* @value
*/
updateContent(value: Content): IRfkRequest
/**
* @method resetContentArticle
* @group
* @desc
* @return IRfkRequest
*/
getContentArticle(): any
/**
* @method getContentProduct
* @group
* @desc
* @return any
*/
etContentArticle(value: any): IRfkRequest
/**
* @method setContentProduct
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any
* @desc
* @value
*/
resetContentArticle(): IRfkRequest
/**
* @method resetContentProduct
* @group
* @desc
* @return IRfkRequest
*/
getContentProduct(): any
/**
* @method getContentStore
* @group
* @desc
* @return any
*/
setContentProduct(value: any): IRfkRequest
/**
* @method setContentStore
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any
* @desc
* @value
*/
resetContentProduct(): IRfkRequest
/**
* @method resetContentStore
* @group
* @desc
* @return IRfkRequest
*/
getContentStore(): any
/**
* @method getContext
* @group
* @desc
* @return Context
*/
setContentStore(value: any): IRfkRequest
/**
* @method setContext
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Context
* @desc
* @value
*/
resetContentStore(): IRfkRequest
/**
* @method resetContext
* @group
* @desc
* @return IRfkRequest
*/
getContext(): Context
/**
* @method updateContext
* @group
* @desc
* @return IRfkRequestgetContextValues
* @key value
* @type Context
* @desc
* @value
*/
setContext(value: Context): IRfkRequest
/**
* @method setContextValues
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValues
* @desc
* @value
*/
resetContext(): IRfkRequest
/**
* @method resetContextValues
* @group
* @desc
* @return IRfkRequest
*/
updateContext(value: Context): IRfkRequestgetContextValues
/**
* @method updateContextValues
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValues
* @desc
* @value
*/
setContextValues(value: ContextValues): IRfkRequest
/**
* @method getContextValuesBrowser
* @group
* @desc
* @return ContextValuesBrowser
*/
resetContextValues(): IRfkRequest
/**
* @method setContextValuesBrowser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesBrowser
* @desc
* @value
*/
updateContextValues(value: ContextValues): IRfkRequest
/**
* @method resetContextValuesBrowser
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesBrowser(): ContextValuesBrowser
/**
* @method updateContextValuesBrowser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesBrowser
* @desc
* @value
*/
setContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
/**
* @method getContextValuesBrowserItems
* @group
* @desc
* @return ContextValueBrowserValue[]
*/
resetContextValuesBrowser(): IRfkRequest
/**
* @method setContextValuesBrowserItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueBrowserValue[]
* @desc
* @value
*/
updateContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
/**
* @method resetContextValuesBrowserItems
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesBrowserItems(): ContextValueBrowserValue[]
/**
* @method addContextValuesBrowserItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueBrowserValue
* @desc
* @value
*/
setContextValuesBrowserItems(value: ContextValueBrowserValue[]): IRfkRequest
/**
* @method removeContextValuesBrowserItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueBrowserValue
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetContextValuesBrowserItems(): IRfkRequest
/**
* @method setContextValuesCampaign
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesCampaign
* @desc
* @value
*/
addContextValuesBrowserItem(value: ContextValueBrowserValue): IRfkRequest
/**
* @method resetContextValuesCampaign
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesBrowserItem(value: ContextValueBrowserValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesCampaign
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesCampaign
* @desc
* @value
*/
setContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
/**
* @method getContextValuesCampaignItems
* @group
* @desc
* @return ContextValueCampaignValue[]
*/
resetContextValuesCampaign(): IRfkRequest
/**
* @method setContextValuesCampaignItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueCampaignValue[]
* @desc
* @value
*/
updateContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
/**
* @method resetContextValuesCampaignItems
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesCampaignItems(): ContextValueCampaignValue[]
/**
* @method addContextValuesCampaignItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueCampaignValue
* @desc
* @value
*/
setContextValuesCampaignItems(value: ContextValueCampaignValue[]): IRfkRequest
/**
* @method removeContextValuesCampaignItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueCampaignValue
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetContextValuesCampaignItems(): IRfkRequest
/**
* @method getContextValuesCategory
* @group
* @desc
* @return ContextValuesCategory
*/
addContextValuesCampaignItem(value: ContextValueCampaignValue): IRfkRequest
/**
* @method setContextValuesCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesCategory
* @desc
* @value
*/
removeContextValuesCampaignItem(value: ContextValueCampaignValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method resetContextValuesCategory
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesCategory(): ContextValuesCategory
/**
* @method updateContextValuesCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesCategory
* @desc
* @value
*/
setContextValuesCategory(value: ContextValuesCategory): IRfkRequest
/**
* @method getContextValuesCategoryItems
* @group
* @desc
* @return string[]
*/
resetContextValuesCategory(): IRfkRequest
/**
* @method setContextValuesCategoryItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
updateContextValuesCategory(value: ContextValuesCategory): IRfkRequest
/**
* @method resetContextValuesCategoryItems
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesCategoryItems(): string[]
/**
* @method addContextValuesCategoryItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextValuesCategoryItems(value: string[]): IRfkRequest
/**
* @method removeContextValuesCategoryItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
resetContextValuesCategoryItems(): IRfkRequest
/**
* @method getContextValuesChannel
* @group
* @desc
* @return ContextValuesChannel
*/
addContextValuesCategoryItem(value: string): IRfkRequest
/**
* @method setContextValuesChannel
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesChannel
* @desc
* @value
*/
removeContextValuesCategoryItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method resetContextValuesChannel
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesChannel(): ContextValuesChannel
/**
* @method updateContextValuesChannel
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesChannel
* @desc
* @value
*/
setContextValuesChannel(value: ContextValuesChannel): IRfkRequest
/**
* @method getContextValuesChannelItems
* @group
* @desc
* @return string[]
*/
resetContextValuesChannel(): IRfkRequest
/**
* @method setContextValuesChannelItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
updateContextValuesChannel(value: ContextValuesChannel): IRfkRequest
/**
* @method resetContextValuesChannelItems
* @group
* @desc
* @return IRfkRequest
*/
getContextValuesChannelItems(): string[]
/**
* @method addContextValuesChannelItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextValuesChannelItems(value: string[]): IRfkRequest
/**
* @method getContextValuesGeo
* @group
* @desc
* @return ContextValuesGeo
*/
resetContextValuesChannelItems(): IRfkRequest
/**
* @method setContextValuesGeo
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesGeo
* @desc
* @value
*/
addContextValuesChannelItem(value: string): IRfkRequest
/**
* @method resetContextValuesGeo
* @group
* @desc
* @return IRfkRequest
*/
//removeContextValuesChannelItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesGeo
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesGeo
* @desc
* @value
*/
getContextValuesGeo(): ContextValuesGeo
/**
* @method getContextValuesGeoItems
* @group
* @desc
* @return ContextValueGeoValue[]
*/
setContextValuesGeo(value: ContextValuesGeo): IRfkRequest
/**
* @method setContextValuesGeoItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueGeoValue[]
* @desc
* @value
*/
resetContextValuesGeo(): IRfkRequest
/**
* @method resetContextValuesGeoItems
* @group
* @desc
* @return IRfkRequest
*/
updateContextValuesGeo(value: ContextValuesGeo): IRfkRequest
/**
* @method addContextValuesGeoItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueGeoValue
* @desc
* @value
*/
getContextValuesGeoItems(): ContextValueGeoValue[]
/**
* @method removeContextValuesGeoItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueGeoValue
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextValuesGeoItems(value: ContextValueGeoValue[]): IRfkRequest
/**
* @method getContextValuesHardFilter
* @group
* @desc
* @return ContextValuesHardFilter
*/
resetContextValuesGeoItems(): IRfkRequest
/**
* @method setContextValuesHardFilter
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesHardFilter
* @desc
* @value
*/
addContextValuesGeoItem(value: ContextValueGeoValue): IRfkRequest
/**
* @method resetContextValuesHardFilter
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesGeoItem(value: ContextValueGeoValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesHardFilter
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesHardFilter
* @desc
* @value
*/
getContextValuesHardFilter(): ContextValuesHardFilter
/**
* @method getContextValuesHardFilterItems
* @group
* @desc
* @return string[]
*/
setContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
/**
* @method setContextValuesHardFilterItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
resetContextValuesHardFilter(): IRfkRequest
/**
* @method resetContextValuesHardFilterItems
* @group
* @desc
* @return IRfkRequest
*/
updateContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
/**
* @method addContextValuesHardFilterItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextValuesHardFilterItems(): string[]
/**
* @method removeContextValuesHardFilterItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextValuesHardFilterItems(value: string[]): IRfkRequest
/**
* @method getContextValuesPage
* @group
* @desc
* @return ContextValuesPage
*/
resetContextValuesHardFilterItems(): IRfkRequest
/**
* @method setContextValuesPage
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesPage
* @desc
* @value
*/
addContextValuesHardFilterItem(value: string): IRfkRequest
/**
* @method resetContextValuesPage
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesHardFilterItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesPage
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesPage
* @desc
* @value
*/
getContextValuesPage(): ContextValuesPage
/**
* @method getContextValuesPageItems
* @group
* @desc
* @return ContextValuePageValue[]
*/
setContextValuesPage(value: ContextValuesPage): IRfkRequest
/**
* @method setContextValuesPageItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuePageValue[]
* @desc
* @value
*/
resetContextValuesPage(): IRfkRequest
/**
* @method resetContextValuesPageItems
* @group
* @desc
* @return IRfkRequest
*/
updateContextValuesPage(value: ContextValuesPage): IRfkRequest
/**
* @method addContextValuesPageItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuePageValue
* @desc
* @value
*/
getContextValuesPageItems(): ContextValuePageValue[]
/**
* @method removeContextValuesPageItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuePageValue
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextValuesPageItems(value: ContextValuePageValue[]): IRfkRequest
/**
* @method getContextValuesProduct
* @group
* @desc
* @return ContextValuesProduct
*/
resetContextValuesPageItems(): IRfkRequest
/**
* @method setContextValuesProduct
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesProduct
* @desc
* @value
*/
addContextValuesPageItem(value: ContextValuePageValue): IRfkRequest
/**
* @method resetContextValuesProduct
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesPageItem(value: ContextValuePageValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesProduct
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesProduct
* @desc
* @value
*/
getContextValuesProduct(): ContextValuesProduct
/**
* @method getContextValuesProductItems
* @group
* @desc
* @return string[]
*/
setContextValuesProduct(value: ContextValuesProduct): IRfkRequest
/**
* @method setContextValuesProductItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
resetContextValuesProduct(): IRfkRequest
/**
* @method resetContextValuesProductItems
* @group
* @desc
* @return IRfkRequest
*/
updateContextValuesProduct(value: ContextValuesProduct): IRfkRequest
/**
* @method addContextValuesProductItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextValuesProductItems(): string[]
/**
* @method removeContextValuesProductItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextValuesProductItems(value: string[]): IRfkRequest
/**
* @method getContextValuesUser
* @group
* @desc
* @return ContextValuesUser
*/
resetContextValuesProductItems(): IRfkRequest
/**
* @method setContextValuesUser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesUser
* @desc
* @value
*/
addContextValuesProductItem(value: string): IRfkRequest
/**
* @method resetContextValuesUser
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesProductItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextValuesUser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValuesUser
* @desc
* @value
*/
getContextValuesUser(): ContextValuesUser
/**
* @method getContextValuesUserItems
* @group
* @desc
* @return ContextValueUserValue[]
*/
setContextValuesUser(value: ContextValuesUser): IRfkRequest
/**
* @method setContextValuesUserItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueUserValue[]
* @desc
* @value
*/
resetContextValuesUser(): IRfkRequest
/**
* @method resetContextValuesUserItems
* @group
* @desc
* @return IRfkRequest
*/
updateContextValuesUser(value: ContextValuesUser): IRfkRequest
/**
* @method addContextValuesUserItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueUserValue
* @desc
* @value
*/
getContextValuesUserItems(): ContextValueUserValue[]
/**
* @method removeContextValuesUserItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextValueUserValue
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextValuesUserItems(value: ContextValueUserValue[]): IRfkRequest
/**
* @method getContextBrowser
* @group
* @desc
* @return ContextBrowser
*/
resetContextValuesUserItems(): IRfkRequest
/**
* @method setContextBrowser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextBrowser
* @desc
* @value
*/
addContextValuesUserItem(value: ContextValueUserValue): IRfkRequest
/**
* @method resetContextBrowser
* @group
* @desc
* @return IRfkRequest
*/
removeContextValuesUserItem(value: ContextValueUserValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextBrowser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextBrowser
* @desc
* @value
*/
getContextBrowser(): ContextBrowser
/**
* @method getContextBrowserAppType
* @group
* @desc
* @return string
*/
setContextBrowser(value: ContextBrowser): IRfkRequest
/**
* @method setContextBrowserAppType
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextBrowser(): IRfkRequest
/**
* @method resetContextBrowserAppType
* @group
* @desc
* @return IRfkRequest
*/
updateContextBrowser(value: ContextBrowser): IRfkRequest
/**
* @method getContextBrowserDevice
* @group
* @desc
* @return string
*/
getContextBrowserAppType(): string
/**
* @method setContextBrowserDevice
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextBrowserAppType(value: string): IRfkRequest
/**
* @method resetContextBrowserDevice
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserAppType(): IRfkRequest
/**
* @method getContextBrowserUserAgent
* @group
* @desc
* @return string
*/
getContextBrowserDevice(): string
/**
* @method setContextBrowserUserAgent
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextBrowserDevice(value: string): IRfkRequest
/**
* @method resetContextBrowserUserAgent
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserDevice(): IRfkRequest
/**
* @method getContextCampaign
* @group
* @desc
* @return ContextCampaign
*/
getContextBrowserUserAgent(): string
/**
* @method setContextCampaign
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextCampaign
* @desc
* @value
*/
setContextBrowserUserAgent(value: string): IRfkRequest
/**
* @method resetContextCampaign
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserUserAgent(): IRfkRequest
/**
* @method updateContextCampaign
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextCampaign
* @desc
* @value
*/
getContextCampaign(): ContextCampaign
/**
* @method getContextCampaignUtmCampaign
* @group
* @desc
* @return string
*/
setContextCampaign(value: ContextCampaign): IRfkRequest
/**
* @method setContextCampaignUtmCampaign
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextCampaign(): IRfkRequest
/**
* @method resetContextCampaignUtmCampaign
* @group
* @desc
* @return IRfkRequest
*/
updateContextCampaign(value: ContextCampaign): IRfkRequest
/**
* @method getContextCampaignUtmSource
* @group
* @desc
* @return string
*/
getContextCampaignUtmCampaign(): string
/**
* @method setContextCampaignUtmSource
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextCampaignUtmCampaign(value: string): IRfkRequest
/**
* @method resetContextCampaignUtmSource
* @group
* @desc
* @return IRfkRequest
*/
resetContextCampaignUtmCampaign(): IRfkRequest
/**
* @method getContextChannel
* @group
* @desc
* @return ContextChannel
*/
getContextCampaignUtmSource(): string
/**
* @method setContextChannel
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextChannel
* @desc
* @value
*/
setContextCampaignUtmSource(value: string): IRfkRequest
/**
* @method resetContextChannel
* @group
* @desc
* @return IRfkRequest
*/
resetContextCampaignUtmSource(): IRfkRequest
/**
* @method updateContextChannel
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextChannel
* @desc
* @value
*/
getContextChannel(): ContextChannel
/**
* @method getContextChannelType
* @group
* @desc
* @return string
*/
setContextChannel(value: ContextChannel): IRfkRequest
/**
* @method setContextChannelType
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextChannel(): IRfkRequest
/**
* @method resetContextChannelType
* @group
* @desc
* @return IRfkRequest
*/
updateContextChannel(value: ContextChannel): IRfkRequest
/**
* @method getContextFitment
* @group
* @desc
* @return ContextFitment
*/
getContextChannelType(): string
/**
* @method setContextFitment
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextFitment
* @desc
* @value
*/
setContextChannelType(value: string): IRfkRequest
/**
* @method resetContextFitment
* @group
* @desc
* @return IRfkRequest
*/
resetContextChannelType(): IRfkRequest
/**
* @method updateContextFitment
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextFitment
* @desc
* @value
*/
getContextFitment(): ContextFitment
/**
* @method getContextFitmentIds
* @group
* @desc
* @return string[]
*/
setContextFitment(value: ContextFitment): IRfkRequest
/**
* @method setContextFitmentIds
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
resetContextFitment(): IRfkRequest
/**
* @method resetContextFitmentIds
* @group
* @desc
* @return IRfkRequest
*/
updateContextFitment(value: ContextFitment): IRfkRequest
/**
* @method addContextFitmentId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextFitmentIds(): string[]
/**
* @method removeContextFitmentId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextFitmentIds(value: string[]): IRfkRequest
/**
* @method getContextFitmentItems
* @group
* @desc
* @return any[]
*/
resetContextFitmentIds(): IRfkRequest
/**
* @method setContextFitmentItems
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any[]
* @desc
* @value
*/
addContextFitmentId(value: string): IRfkRequest
/**
* @method resetContextFitmentItems
* @group
* @desc
* @return IRfkRequest
*/
removeContextFitmentId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method addContextFitmentItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any
* @desc
* @value
*/
getContextFitmentItems(): any[]
/**
* @method removeContextFitmentItem
* @group
* @desc
* @return IRfkRequest
* @key value
* @type any
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextFitmentItems(value: any[]): IRfkRequest
/**
* @method getContextGeo
* @group
* @desc
* @return ContextGeo
*/
resetContextFitmentItems(): IRfkRequest
/**
* @method setContextGeo
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextGeo
* @desc
* @value
*/
addContextFitmentItem(value: any): IRfkRequest
/**
* @method resetContextGeo
* @group
* @desc
* @return IRfkRequest
*/
removeContextFitmentItem(value: any, filter?: (v: any) => boolean): IRfkRequest
/**
* @method updateContextGeo
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextGeo
* @desc
* @value
*/
getContextGeo(): ContextGeo
/**
* @method getContextGeoCity
* @group
* @desc
* @return string
*/
setContextGeo(value: ContextGeo): IRfkRequest
/**
* @method setContextGeoCity
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextGeo(): IRfkRequest
/**
* @method resetContextGeoCity
* @group
* @desc
* @return IRfkRequest
*/
updateContextGeo(value: ContextGeo): IRfkRequest
/**
* @method getContextGeoCountry
* @group
* @desc
* @return string
*/
getContextGeoCity(): string
/**
* @method setContextGeoCountry
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextGeoCity(value: string): IRfkRequest
/**
* @method resetContextGeoCountry
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoCity(): IRfkRequest
/**
* @method getContextGeoIp
* @group
* @desc
* @return string
*/
getContextGeoCountry(): string
/**
* @method setContextGeoIp
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextGeoCountry(value: string): IRfkRequest
/**
* @method resetContextGeoIp
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoCountry(): IRfkRequest
/**
* @method getContextGeoState
* @group
* @desc
* @return string
*/
getContextGeoIp(): string
/**
* @method setContextGeoState
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextGeoIp(value: string): IRfkRequest
/**
* @method resetContextGeoState
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoIp(): IRfkRequest
/**
* @method getContextGeoZip
* @group
* @desc
* @return string
*/
getContextGeoState(): string
/**
* @method setContextGeoZip
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextGeoState(value: string): IRfkRequest
/**
* @method resetContextGeoZip
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoState(): IRfkRequest
/**
* @method getContextPage
* @group
* @desc
* @return ContextPage
*/
getContextGeoZip(): string
/**
* @method setContextPage
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextPage
* @desc
* @value
*/
setContextGeoZip(value: string): IRfkRequest
/**
* @method resetContextPage
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoZip(): IRfkRequest
/**
* @method updateContextPage
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextPage
* @desc
* @value
*/
getContextPage(): ContextPage
/**
* @method getContextPageAllCategoryIds
* @group
* @desc
* @return string[]
*/
setContextPage(value: ContextPage): IRfkRequest
/**
* @method setContextPageAllCategoryIds
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
resetContextPage(): IRfkRequest
/**
* @method resetContextPageAllCategoryIds
* @group
* @desc
* @return IRfkRequest
*/
updateContextPage(value: ContextPage): IRfkRequest
/**
* @method addContextPageAllCategoryId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextPageAllCategoryIds(): string[]
/**
* @method removeContextPageAllCategoryId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextPageAllCategoryIds(value: string[]): IRfkRequest
/**
* @method getContextPageCategoryId
* @group
* @desc
* @return string
*/
resetContextPageAllCategoryIds(): IRfkRequest
/**
* @method setContextPageCategoryId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addContextPageAllCategoryId(value: string): IRfkRequest
/**
* @method resetContextPageCategoryId
* @group
* @desc
* @return IRfkRequest
*/
removeContextPageAllCategoryId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageCategoryUri
* @group
* @desc
* @return string
*/
getContextPageCategoryId(): string
/**
* @method setContextPageCategoryUri
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageCategoryId(value: string): IRfkRequest
/**
* @method resetContextPageCategoryUri
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCategoryId(): IRfkRequest
/**
* @method getContextPageCcid
* @group
* @desc
* @return string
*/
getContextPageCategoryUri(): string
/**
* @method setContextPageCcid
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageCategoryUri(value: string): IRfkRequest
/**
* @method resetContextPageCcid
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCategoryUri(): IRfkRequest
/**
* @method getContextPageContainerId
* @group
* @desc
* @return string
*/
getContextPageCcid(): string
/**
* @method setContextPageContainerId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageCcid(value: string): IRfkRequest
/**
* @method resetContextPageContainerId
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCcid(): IRfkRequest
/**
* @method getContextPageLocaleCountry
* @group
* @desc
* @return string
*/
getContextPageContainerId(): string
/**
* @method setContextPageLocaleCountry
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageContainerId(value: string): IRfkRequest
/**
* @method resetContextPageLocaleCountry
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageContainerId(): IRfkRequest
/**
* @method getContextPageLocaleCurrency
* @group
* @desc
* @return string
*/
getContextPageLocaleCountry(): string
/**
* @method setContextPageLocaleCurrency
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageLocaleCountry(value: string): IRfkRequest
/**
* @method resetContextPageLocaleCurrency
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleCountry(): IRfkRequest
/**
* @method getContextPageLocaleLanguage
* @group
* @desc
* @return string
*/
getContextPageLocaleCurrency(): string
/**
* @method setContextPageLocaleLanguage
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageLocaleCurrency(value: string): IRfkRequest
/**
* @method resetContextPageLocaleLanguage
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleCurrency(): IRfkRequest
/**
* @method getContextPageProductGroups
* @group
* @desc
* @return string[]
*/
getContextPageLocaleLanguage(): string
/**
* @method setContextPageProductGroups
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
setContextPageLocaleLanguage(value: string): IRfkRequest
/**
* @method resetContextPageProductGroups
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleLanguage(): IRfkRequest
/**
* @method addContextPageProductGroup
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextPageProductGroups(): string[]
/**
* @method removeContextPageProductGroup
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextPageProductGroups(value: string[]): IRfkRequest
/**
* @method getContextPageReferrer
* @group
* @desc
* @return string
*/
resetContextPageProductGroups(): IRfkRequest
/**
* @method setContextPageReferrer
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addContextPageProductGroup(value: string): IRfkRequest
/**
* @method resetContextPageReferrer
* @group
* @desc
* @return IRfkRequest
*/
removeContextPageProductGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageSkus
* @group
* @desc
* @return string[]
*/
getContextPageReferrer(): string
/**
* @method setContextPageSkus
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
setContextPageReferrer(value: string): IRfkRequest
/**
* @method resetContextPageSkus
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageReferrer(): IRfkRequest
/**
* @method addContextPageSku
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextPageSkus(): string[]
/**
* @method removeContextPageSku
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextPageSkus(value: string[]): IRfkRequest
/**
* @method getContextPageTitle
* @group
* @desc
* @return string
*/
resetContextPageSkus(): IRfkRequest
/**
* @method setContextPageTitle
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addContextPageSku(value: string): IRfkRequest
/**
* @method resetContextPageTitle
* @group
* @desc
* @return IRfkRequest
*/
removeContextPageSku(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageUri
* @group
* @desc
* @return string
*/
getContextPageTitle(): string
/**
* @method setContextPageUri
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextPageTitle(value: string): IRfkRequest
/**
* @method resetContextPageUri
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageTitle(): IRfkRequest
/**
* @method getContextStore
* @group
* @desc
* @return ContextStore
*/
getContextPageUri(): string
/**
* @method setContextStore
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextStore
* @desc
* @value
*/
setContextPageUri(value: string): IRfkRequest
/**
* @method resetContextStore
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageUri(): IRfkRequest
/**
* @method updateContextStore
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextStore
* @desc
* @value
*/
getContextStore(): ContextStore
/**
* @method getContextStoreGroupId
* @group
* @desc
* @return string
*/
setContextStore(value: ContextStore): IRfkRequest
/**
* @method setContextStoreGroupId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextStore(): IRfkRequest
/**
* @method resetContextStoreGroupId
* @group
* @desc
* @return IRfkRequest
*/
updateContextStore(value: ContextStore): IRfkRequest
/**
* @method getContextStoreId
* @group
* @desc
* @return string
*/
getContextStoreGroupId(): string
/**
* @method setContextStoreId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextStoreGroupId(value: string): IRfkRequest
/**
* @method resetContextStoreId
* @group
* @desc
* @return IRfkRequest
*/
resetContextStoreGroupId(): IRfkRequest
/**
* @method getContextUser
* @group
* @desc
* @return ContextUser
*/
getContextStoreId(): string
/**
* @method setContextUser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextUser
* @desc
* @value
*/
setContextStoreId(value: string): IRfkRequest
/**
* @method resetContextUser
* @group
* @desc
* @return IRfkRequest
*/
resetContextStoreId(): IRfkRequest
/**
* @method updateContextUser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type ContextUser
* @desc
* @value
*/
getContextUser(): ContextUser
/**
* @method getContextUserEmail
* @group
* @desc
* @return string
*/
setContextUser(value: ContextUser): IRfkRequest
/**
* @method setContextUserEmail
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetContextUser(): IRfkRequest
/**
* @method resetContextUserEmail
* @group
* @desc
* @return IRfkRequest
*/
updateContextUser(value: ContextUser): IRfkRequest
/**
* @method getContextUserGender
* @group
* @desc
* @return string
*/
getContextUserEmail(): string
/**
* @method setContextUserGender
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setContextUserEmail(value: string): IRfkRequest
/**
* @method resetContextUserGender
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserEmail(): IRfkRequest
/**
* @method getContextUserGroups
* @group
* @desc
* @return string[]
*/
getContextUserGender(): string
/**
* @method setContextUserGroups
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
setContextUserGender(value: string): IRfkRequest
/**
* @method resetContextUserGroups
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserGender(): IRfkRequest
/**
* @method addContextUserGroup
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextUserGroups(): string[]
/**
* @method removeContextUserGroup
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextUserGroups(value: string[]): IRfkRequest
/**
* @method getContextUserId
* @group
* @desc
* @return string
*/
resetContextUserGroups(): IRfkRequest
/**
* @method setContextUserId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addContextUserGroup(value: string): IRfkRequest
/**
* @method resetContextUserId
* @group
* @desc
* @return IRfkRequest
*/
removeContextUserGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextUserNewUser
* @group
* @desc
* @return boolean
*/
getContextUserId(): string
/**
* @method setContextUserNewUser
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
setContextUserId(value: string): IRfkRequest
/**
* @method resetContextUserNewUser
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserId(): IRfkRequest
/**
* @method getContextUserOrderIds
* @group
* @desc
* @return string[]
*/
getContextUserNewUser(): boolean
/**
* @method setContextUserOrderIds
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
setContextUserNewUser(value: boolean): IRfkRequest
/**
* @method resetContextUserOrderIds
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserNewUser(): IRfkRequest
/**
* @method addContextUserOrderId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getContextUserOrderIds(): string[]
/**
* @method removeContextUserOrderId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setContextUserOrderIds(value: string[]): IRfkRequest
/**
* @method getContextUserUuid
* @group
* @desc
* @return string
*/
resetContextUserOrderIds(): IRfkRequest
/**
* @method setContextUserUuid
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addContextUserOrderId(value: string): IRfkRequest
/**
* @method resetContextUserUuid
* @group
* @desc
* @return IRfkRequest
*/
removeContextUserOrderId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getFacet
* @group
* @desc
* @return MapModel<Facet>
*/
getContextUserUuid(): string
/**
* @method setFacet
* @group
* @desc
* @return IRfkRequest
* @key value
* @type MapModel<Facet>
* @desc
* @value
*/
setContextUserUuid(value: string): IRfkRequest
/**
* @method resetFacet
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserUuid(): IRfkRequest
/**
* @method getFacetsAll
* @group
* @desc
* @return boolean
*/
getFacet(): MapModel<Facet>
/**
* @method setFacetsAll
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
setFacet(value: MapModel<Facet>): IRfkRequest
/**
* @method resetFacetsAll
* @group
* @desc
* @return IRfkRequest
*/
resetFacet(): IRfkRequest
/**
* @method getFacetsMax
* @group
* @desc
* @return number
*/
getFacetsAll(): boolean
/**
* @method setFacetsMax
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setFacetsAll(value: boolean): IRfkRequest
/**
* @method resetFacetsMax
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsAll(): IRfkRequest
/**
* @method getFacetsSortCriteria
* @group
* @desc
* @return SortItem
*/
getFacetsMax(): number
/**
* @method setFacetsSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortItem
* @desc
* @value
*/
setFacetsMax(value: number): IRfkRequest
/**
* @method resetFacetsSortCriteria
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsMax(): IRfkRequest
/**
* @method updateFacetsSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortItem
* @desc
* @value
*/
getFacetsSortCriteria(): SortItem
/**
* @method getFacetsSortCriteriaOrder
* @group
* @desc
* @return SortOrder
*/
setFacetsSortCriteria(value: SortItem): IRfkRequest
/**
* @method setFacetsSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortOrder
* @desc
* @value
*/
resetFacetsSortCriteria(): IRfkRequest
/**
* @method resetFacetsSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
*/
updateFacetsSortCriteria(value: SortItem): IRfkRequest
/**
* @method getFacetsSortCriteriaType
* @group
* @desc
* @return string
*/
getFacetsSortCriteriaOrder(): SortOrder
/**
* @method setFacetsSortCriteriaType
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setFacetsSortCriteriaOrder(value: SortOrder): IRfkRequest
/**
* @method resetFacetsSortCriteriaType
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsSortCriteriaOrder(): IRfkRequest
/**
* @method getFacetsTotal
* @group
* @desc
* @return number
*/
getFacetsSortCriteriaType(): string
/**
* @method setFacetsTotal
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setFacetsSortCriteriaType(value: string): IRfkRequest
/**
* @method resetFacetsTotal
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsSortCriteriaType(): IRfkRequest
/**
* @method getFacetMax
* @group
* @desc
* @return number
* @key key
* @type string
* @desc
* @value
*/
getFacetsTotal(): number
/**
* @method setFacetMax
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type number
* @desc
* @value
*/
setFacetsTotal(value: number): IRfkRequest
/**
* @method resetFacetMax
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
resetFacetsTotal(): IRfkRequest
/**
* @method getFacetMinCount
* @group
* @desc
* @return number
* @key key
* @type string
* @desc
* @value
*/
getFacetMax(key: string): number
/**
* @method setFacetMinCount
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type number
* @desc
* @value
*/
setFacetMax(key: string, value: number): IRfkRequest
/**
* @method resetFacetMinCount
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
resetFacetMax(key: string): IRfkRequest
/**
* @method getFacetSortCriteria
* @group
* @desc
* @return SortItem
* @key key
* @type string
* @desc
* @value
*/
getFacetMinCount(key: string): number
/**
* @method setFacetSortCriteria
* @group
* @desc
* @return IRfkRequestre
* @key key
* @type string
* @desc
* @value
* @key value
* @type SortItem
* @desc
* @value
*/
setFacetMinCount(key: string, value: number): IRfkRequest
/**
* @method setFacetSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
resetFacetMinCount(key: string): IRfkRequest
/**
* @method updateFacetSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type SortItem
* @desc
* @value
*/
getFacetSortCriteria(key: string): SortItem
/**
* @method getFacetSortCriteriaOrder
* @group
* @desc
* @return SortOrder
* @key key
* @type string
* @desc
* @value
*/
setFacetSortCriteria(key: string, value: SortItem): IRfkRequestre
/**
* @method setFacetSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type SortOrder
* @desc
* @value
*/
setFacetSortCriteria(key: string): IRfkRequest
/**
* @method resetFacetSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
updateFacetSortCriteria(key: string, value: SortItem): IRfkRequest
/**
* @method getFacetSortCriteriaType
* @group
* @desc
* @return string
* @key key
* @type string
* @desc
* @value
*/
getFacetSortCriteriaOrder(key: string): SortOrder
/**
* @method setFacetSortCriteriaType
* @group
* @desc
* @return IRfkRequestre
* @key key
* @type string
* @desc
* @value
* @key value
* @type string
* @desc
* @value
*/
setFacetSortCriteriaOrder(key: string, value: SortOrder): IRfkRequest
/**
* @method setFacetSortCriteriaType
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
resetFacetSortCriteriaOrder(key: string): IRfkRequest
/**
* @method getFacetTotal
* @group
* @desc
* @return number
* @key key
* @type string
* @desc
* @value
*/
getFacetSortCriteriaType(key: string): string
/**
* @method setFacetTotal
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type number
* @desc
* @value
*/
setFacetSortCriteriaType(key: string, value: string): IRfkRequestre
/**
* @method resetFacetTotal
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
setFacetSortCriteriaType(key: string): IRfkRequest
/**
* @method getFeatures
* @group
* @desc
* @return Features
*/
getFacetTotal(key: string): number
/**
* @method setFeatures
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Features
* @desc
* @value
*/
setFacetTotal(key: string, value: number): IRfkRequest
/**
* @method resetFeatures
* @group
* @desc
* @return IRfkRequest
*/
resetFacetTotal(key: string): IRfkRequest
/**
* @method updateFeatures
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Features
* @desc
* @value
*/
getFeatures(): Features
/**
* @method getFeaturesDiscover
* @group
* @desc
* @return Discover
*/
setFeatures(value: Features): IRfkRequest
/**
* @method setFeaturesDiscover
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Discover
* @desc
* @value
*/
resetFeatures(): IRfkRequest
/**
* @method resetFeaturesDiscover
* @group
* @desc
* @return IRfkRequest
*/
updateFeatures(value: Features): IRfkRequest
/**
* @method updateFeaturesDiscover
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Discover
* @desc
* @value
*/
getFeaturesDiscover(): Discover
/**
* @method getFeaturesDiscoverChoiceId
* @group
* @desc
* @return string
*/
setFeaturesDiscover(value: Discover): IRfkRequest
/**
* @method setFeaturesDiscoverChoiceId
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
resetFeaturesDiscover(): IRfkRequest
/**
* @method resetFeaturesDiscoverChoiceId
* @group
* @desc
* @return IRfkRequest
*/
updateFeaturesDiscover(value: Discover): IRfkRequest
/**
* @method getFilter
* @group
* @desc
* @return MapModel<Filters>
*/
getFeaturesDiscoverChoiceId(): string
/**
* @method setFilter
* @group
* @desc
* @return IRfkRequest
* @key value
* @type MapModel<Filters>
* @desc
* @value
*/
setFeaturesDiscoverChoiceId(value: string): IRfkRequest
/**
* @method resetFilter
* @group
* @desc
* @return IRfkRequest
*/
resetFeaturesDiscoverChoiceId(): IRfkRequest
/**
* @method getFilterValues
* @group
* @desc
* @return FiltersFilter[]
* @key key
* @type string
* @desc
* @value
*/
getFilter(): MapModel<Filters>
/**
* @method setFilterValues
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type FiltersFilter[]
* @desc
* @value
*/
setFilter(value: MapModel<Filters>): IRfkRequest
/**
* @method resetFilterValues
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
*/
resetFilter(): IRfkRequest
/**
* @method addFilterValue
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type FiltersFilter
* @desc
* @value
*/
getFilterValues(key: string): FiltersFilter[]
/**
* @method removeFilterValue
* @group
* @desc
* @return IRfkRequest
* @key key
* @type string
* @desc
* @value
* @key value
* @type FiltersFilter
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setFilterValues(key: string, value: FiltersFilter[]): IRfkRequest
/**
* @method getNumberProducts
* @group
* @desc
* @return number
*/
resetFilterValues(key: string): IRfkRequest
/**
* @method setNumberProducts
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
addFilterValue(key: string, value: FiltersFilter): IRfkRequest
/**
* @method resetNumberProducts
* @group
* @desc
* @return IRfkRequest
*/
removeFilterValue(key: string, value: FiltersFilter, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getPageNumber
* @group
* @desc
* @return number
*/
getNumberProducts(): number
/**
* @method setPageNumber
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setNumberProducts(value: number): IRfkRequest
/**
* @method resetPageNumber
* @group
* @desc
* @return IRfkRequest
*/
resetNumberProducts(): IRfkRequest
/**
* @method getQuery
* @group
* @desc
* @return Query
*/
getPageNumber(): number
/**
* @method setQuery
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Query
* @desc
* @value
*/
setPageNumber(value: number): IRfkRequest
/**
* @method resetQuery
* @group
* @desc
* @return IRfkRequest
*/
resetPageNumber(): IRfkRequest
/**
* @method updateQuery
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Query
* @desc
* @value
*/
getQuery(): Query
/**
* @method getQueryCategories
* @group
* @desc
* @return string[]
*/
setQuery(value: Query): IRfkRequest
/**
* @method setQueryCategories
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string[]
* @desc
* @value
*/
resetQuery(): IRfkRequest
/**
* @method resetQueryCategories
* @group
* @desc
* @return IRfkRequest
*/
updateQuery(value: Query): IRfkRequest
/**
* @method addQueryCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
getQueryCategories(): string[]
/**
* @method removeQueryCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter?
* @type 
* @desc
* @value
*/
setQueryCategories(value: string[]): IRfkRequest
/**
* @method getQueryKeyphrase
* @group
* @desc
* @return string
*/
resetQueryCategories(): IRfkRequest
/**
* @method setQueryKeyphrase
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
addQueryCategory(value: string): IRfkRequest
/**
* @method resetQueryKeyphrase
* @group
* @desc
* @return IRfkRequest
*/
removeQueryCategory(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getSort
* @group
* @desc
* @return Sort
*/
getQueryKeyphrase(): string
/**
* @method setSort
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Sort
* @desc
* @value
*/
setQueryKeyphrase(value: string): IRfkRequest
/**
* @method resetSort
* @group
* @desc
* @return IRfkRequest
*/
resetQueryKeyphrase(): IRfkRequest
/**
* @method updateSort
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Sort
* @desc
* @value
*/
getSort(): Sort
/**
* @method getSortChoices
* @group
* @desc
* @return boolean
*/
setSort(value: Sort): IRfkRequest
/**
* @method setSortChoices
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
resetSort(): IRfkRequest
/**
* @method resetSortChoices
* @group
* @desc
* @return IRfkRequest
*/
updateSort(value: Sort): IRfkRequest
/**
* @method getSortCriteria
* @group
* @desc
* @return SortItem
*/
getSortChoices(): boolean
/**
* @method setSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortItem
* @desc
* @value
*/
setSortChoices(value: boolean): IRfkRequest
/**
* @method resetSortCriteria
* @group
* @desc
* @return IRfkRequest
*/
resetSortChoices(): IRfkRequest
/**
* @method updateSortCriteria
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortItem
* @desc
* @value
*/
getSortCriteria(): SortItem
/**
* @method getSortCriteriaOrder
* @group
* @desc
* @return SortOrder
*/
setSortCriteria(value: SortItem): IRfkRequest
/**
* @method setSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
* @key value
* @type SortOrder
* @desc
* @value
*/
resetSortCriteria(): IRfkRequest
/**
* @method resetSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
*/
updateSortCriteria(value: SortItem): IRfkRequest
/**
* @method getSortCriteriaType
* @group
* @desc
* @return string
*/
getSortCriteriaOrder(): SortOrder
/**
* @method setSortCriteriaType
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setSortCriteriaOrder(value: SortOrder): IRfkRequest
/**
* @method resetSortCriteriaType
* @group
* @desc
* @return IRfkRequest
*/
resetSortCriteriaOrder(): IRfkRequest
/**
* @method getSuggestion
* @group
* @desc
* @return Suggestion
*/
getSortCriteriaType(): string
/**
* @method setSuggestion
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Suggestion
* @desc
* @value
*/
setSortCriteriaType(value: string): IRfkRequest
/**
* @method resetSuggestion
* @group
* @desc
* @return IRfkRequest
*/
resetSortCriteriaType(): IRfkRequest
/**
* @method updateSuggestion
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Suggestion
* @desc
* @value
*/
getSuggestion(): Suggestion
/**
* @method getSuggestionCategory
* @group
* @desc
* @return number
*/
setSuggestion(value: Suggestion): IRfkRequest
/**
* @method setSuggestionCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
resetSuggestion(): IRfkRequest
/**
* @method resetSuggestionCategory
* @group
* @desc
* @return IRfkRequest
*/
updateSuggestion(value: Suggestion): IRfkRequest
/**
* @method getSuggestionKeyphrase
* @group
* @desc
* @return number
*/
getSuggestionCategory(): number
/**
* @method setSuggestionKeyphrase
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setSuggestionCategory(value: number): IRfkRequest
/**
* @method resetSuggestionKeyphrase
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionCategory(): IRfkRequest
/**
* @method getSuggestionRecent
* @group
* @desc
* @return number
*/
getSuggestionKeyphrase(): number
/**
* @method setSuggestionRecent
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setSuggestionKeyphrase(value: number): IRfkRequest
/**
* @method resetSuggestionRecent
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionKeyphrase(): IRfkRequest
/**
* @method getSuggestionTrendingCategory
* @group
* @desc
* @return number
*/
getSuggestionRecent(): number
/**
* @method setSuggestionTrendingCategory
* @group
* @desc
* @return IRfkRequest
* @key value
* @type number
* @desc
* @value
*/
setSuggestionRecent(value: number): IRfkRequest
/**
* @method resetSuggestionTrendingCategory
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionRecent(): IRfkRequest
/**
* @method setWidget
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Widget
* @desc
* @value
*/
getSuggestionTrendingCategory(): number
/**
* @method resetWidget
* @group
* @desc
* @return IRfkRequest
*/
setSuggestionTrendingCategory(value: number): IRfkRequest
/**
* @method updateWidget
* @group
* @desc
* @return IRfkRequest
* @key value
* @type Widget
* @desc
* @value
*/
resetSuggestionTrendingCategory(): IRfkRequest
/**
* @method getWidgetAll
* @group
* @desc
* @return boolean
*/
setWidget(value: Widget): IRfkRequest
/**
* @method setWidgetAll
* @group
* @desc
* @return IRfkRequest
* @key value
* @type boolean
* @desc
* @value
*/
resetWidget(): IRfkRequest
/**
* @method resetWidgetAll
* @group
* @desc
* @return IRfkRequest
*/
updateWidget(value: Widget): IRfkRequest
/**
* @method getWidgetRfkid
* @group
* @desc
* @return string
*/
getWidgetAll(): boolean
/**
* @method setWidgetRfkid
* @group
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
*/
setWidgetAll(value: boolean): IRfkRequest
/**
* @method resetWidgetRfkid
* @group
* @desc
* @return IRfkRequest
*/
resetWidgetAll(): IRfkRequest
/**
* @method set<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key value
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
getWidgetRfkid(): string
/**
* @method get<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key defaultValue?
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
setWidgetRfkid(value: string): IRfkRequest
/**
* @method resetValue<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
resetWidgetRfkid(): IRfkRequest
/**
* @method getValue<Prop>
* @group
* @desc
* @return any
* @key prop
* @type Prop
* @desc
* @value
* @key defaultValue?
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
set<Prop>(prop: Prop, value: any, key?: string): default<Props>
/**
* @method setValue<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key value
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
get<Prop>(prop: Prop, defaultValue?: any, key?: string): default<Props>
/**
* @method removeKey<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key keyToRemove
* @type string | number
* @desc
* @value
*/
resetValue<Prop>(prop: Prop, key?: string): default<Props>
/**
* @method updateValue<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key value
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
getValue<Prop>(prop: Prop, defaultValue?: any, key?: string): any
/**
* @method addValue<Prop>
* @group
* @desc
* @return default<Props>
* @key prop
* @type Prop
* @desc
* @value
* @key value
* @type any
* @desc
* @value
* @key key?
* @type string
* @desc
* @value
*/
setValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
/**
* @method transformJson
* @group
* @desc
* @return any
* @key json
* @type any
* @desc
* @value
*/
removeKey<Prop>(prop: Prop, keyToRemove: string | number): default<Props>
/**
* @method toJson
* @group
* @desc
* @return any
* @key ...props
* @type string[]
* @desc
* @value
*/
updateValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
/**
* @method onChange
* @group
* @desc
* @return void
* @key prop
* @type string
* @desc
* @value
* @key value
* @type any
* @desc
* @value
*/
addValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
/**
* @method addListeners
* @group
* @desc
* @return void
* @key observers
* @type Observer[]
* @desc
* @value
*/
//removeValue<Prop>(prop: Prop, value: any, filter?: (v: any, value: any) => boolean, key?: string): default<Props>
/**
* @method addListener
* @group
* @desc
* @return void
* @key observer
* @type Observer
* @desc
* @value
*/
transformJson(json: any): any
}