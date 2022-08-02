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
* @method addWidgetBatchItem
* @group Widget Batch Item
* @desc
* @return Request
* @key widgetId
* @type string
* @desc
* @value
* @key config
* @type Omit<BatchItem, "widget">
* @desc
* @value
*/
addWidgetBatchItem(widgetId: string, config?: Omit<BatchItem, "widget">): Request
/**
* @method addWidgetBatchItem
* @group Widget Batch Item
* @desc
* @return Request
* @key config
* @type Omit<BatchItem, "widget">
* @desc
* @value
*/
addAllWidgetsBatchItem(config?: Omit<BatchItem, "widget">): Request
/**
* @method addAllAppearanceTemplatesDevices
* @group
* @desc
* @return Request
*/
addAllAppearanceTemplatesDevices(): Request
/**
* @method addAllAppearanceTemplatesSections
* @group
* @desc
* @return Request
*/
addAllAppearanceTemplatesSections(): Request
/**
* @method addAllAppearanceVariablesSections
* @group
* @desc
* @return Request
*/
addAllAppearanceVariablesSections(): Request
/**
* @method getAppearance
* @group
* @desc
* @return Appearance
*/
getAppearance(): Appearance
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
setAppearance(value: Appearance): IRfkRequest
/**
* @method resetAppearance
* @group
* @desc
* @return IRfkRequest
*/
resetAppearance(): IRfkRequest
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
updateAppearance(value: Appearance): IRfkRequest
/**
* @method getAppearanceTemplates
* @group
* @desc
* @return Templates
*/
getAppearanceTemplates(): Templates
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
setAppearanceTemplates(value: Templates): IRfkRequest
/**
* @method resetAppearanceTemplates
* @group
* @desc
* @return IRfkRequest
*/
resetAppearanceTemplates(): IRfkRequest
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
updateAppearanceTemplates(value: Templates): IRfkRequest
/**
* @method getAppearanceTemplatesDevices
* @group
* @desc
* @return DeviceType[]
*/
getAppearanceTemplatesDevices(): DeviceType[]
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
setAppearanceTemplatesDevices(value: DeviceType[]): IRfkRequest
/**
* @method resetAppearanceTemplatesDevices
* @group
* @desc
* @return IRfkRequest
*/
resetAppearanceTemplatesDevices(): IRfkRequest
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
addAppearanceTemplatesDevice(value: DeviceType): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeAppearanceTemplatesDevice(value: DeviceType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getAppearanceTemplatesKeepOriginalCss
* @group
* @desc
* @return boolean
*/
getAppearanceTemplatesKeepOriginalCss(): boolean
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
setAppearanceTemplatesKeepOriginalCss(value: boolean): IRfkRequest
/**
* @method getAppearanceTemplatesKeepVariables
* @group
* @desc
* @return boolean
*/
getAppearanceTemplatesKeepVariables(): boolean
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
setAppearanceTemplatesKeepVariables(value: boolean): IRfkRequest
/**
* @method resetAppearanceTemplatesKeepVariables
* @group
* @desc
* @return IRfkRequest
*/
resetAppearanceTemplatesKeepVariables(): IRfkRequest
/**
* @method getAppearanceTemplatesSections
* @group
* @desc
* @return SectionType[]
*/
getAppearanceTemplatesSections(): SectionType[]
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
setAppearanceTemplatesSections(value: SectionType[]): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeAppearanceTemplatesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getAppearanceVariables
* @group
* @desc
* @return Variables
*/
getAppearanceVariables(): Variables
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
setAppearanceVariables(value: Variables): IRfkRequest
/**
* @method resetAppearanceVariables
* @group
* @desc
* @return IRfkRequest
*/
resetAppearanceVariables(): IRfkRequest
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
updateAppearanceVariables(value: Variables): IRfkRequest
/**
* @method getAppearanceVariablesSections
* @group
* @desc
* @return SectionType[]
*/
getAppearanceVariablesSections(): SectionType[]
/**
* @method resetAppearanceVariablesSections
* @group
* @desc
* @return IRfkRequest
*/
resetAppearanceVariablesSections(): IRfkRequest
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
addAppearanceVariablesSection(value: SectionType): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeAppearanceVariablesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getBatchItems
* @group
* @desc
* @return BatchItem[]
*/
getBatchItems(): BatchItem[]
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
setBatchItems(value: BatchItem[]): IRfkRequest
/**
* @method resetBatchItems
* @group
* @desc
* @return IRfkRequest
*/
resetBatchItems(): IRfkRequest
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
addBatchItem(value: BatchItem): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeBatchItem(value: BatchItem, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContent
* @group
* @desc
* @return Content
*/
getContent(): Content
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
setContent(value: Content): IRfkRequest
/**
* @method resetContent
* @group
* @desc
* @return IRfkRequest
*/
resetContent(): IRfkRequest
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
updateContent(value: Content): IRfkRequest
/**
* @method getContentArticle
* @group
* @desc
* @return any
*/
getContentArticle(): any
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
etContentArticle(value: any): IRfkRequest
/**
* @method resetContentArticle
* @group
* @desc
* @return IRfkRequest
*/
resetContentArticle(): IRfkRequest
/**
* @method getContentProduct
* @group
* @desc
* @return any
*/
getContentProduct(): any
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
setContentProduct(value: any): IRfkRequest
/**
* @method resetContentProduct
* @group
* @desc
* @return IRfkRequest
*/
resetContentProduct(): IRfkRequest
/**
* @method getContentStore
* @group
* @desc
* @return any
*/
getContentStore(): any
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
setContentStore(value: any): IRfkRequest
/**
* @method resetContentStore
* @group
* @desc
* @return IRfkRequest
*/
resetContentStore(): IRfkRequest
/**
* @method getContext
* @group
* @desc
* @return Context
*/
getContext(): Context
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
setContext(value: Context): IRfkRequest
/**
* @method resetContext
* @group
* @desc
* @return IRfkRequest
*/
resetContext(): IRfkRequest
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
updateContext(value: Context): IRfkRequestgetContextValues
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
setContextValues(value: ContextValues): IRfkRequest
/**
* @method resetContextValues
* @group
* @desc
* @return IRfkRequest
*/
resetContextValues(): IRfkRequest
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
updateContextValues(value: ContextValues): IRfkRequest
/**
* @method getContextValuesBrowser
* @group
* @desc
* @return ContextValuesBrowser
*/
getContextValuesBrowser(): ContextValuesBrowser
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
setContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
/**
* @method resetContextValuesBrowser
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesBrowser(): IRfkRequest
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
updateContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
/**
* @method getContextValuesBrowserItems
* @group
* @desc
* @return ContextValueBrowserValue[]
*/
getContextValuesBrowserItems(): ContextValueBrowserValue[]
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
setContextValuesBrowserItems(value: ContextValueBrowserValue[]): IRfkRequest
/**
* @method resetContextValuesBrowserItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesBrowserItems(): IRfkRequest
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
addContextValuesBrowserItem(value: ContextValueBrowserValue): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesBrowserItem(value: ContextValueBrowserValue, filter?: (v: any) => boolean): IRfkRequest
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
setContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
/**
* @method resetContextValuesCampaign
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesCampaign(): IRfkRequest
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
updateContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
/**
* @method getContextValuesCampaignItems
* @group
* @desc
* @return ContextValueCampaignValue[]
*/
getContextValuesCampaignItems(): ContextValueCampaignValue[]
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
setContextValuesCampaignItems(value: ContextValueCampaignValue[]): IRfkRequest
/**
* @method resetContextValuesCampaignItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesCampaignItems(): IRfkRequest
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
addContextValuesCampaignItem(value: ContextValueCampaignValue): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesCampaignItem(value: ContextValueCampaignValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesCategory
* @group
* @desc
* @return ContextValuesCategory
*/
getContextValuesCategory(): ContextValuesCategory
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
setContextValuesCategory(value: ContextValuesCategory): IRfkRequest
/**
* @method resetContextValuesCategory
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesCategory(): IRfkRequest
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
updateContextValuesCategory(value: ContextValuesCategory): IRfkRequest
/**
* @method getContextValuesCategoryItems
* @group
* @desc
* @return string[]
*/
getContextValuesCategoryItems(): string[]
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
setContextValuesCategoryItems(value: string[]): IRfkRequest
/**
* @method resetContextValuesCategoryItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesCategoryItems(): IRfkRequest
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
addContextValuesCategoryItem(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesCategoryItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesChannel
* @group
* @desc
* @return ContextValuesChannel
*/
getContextValuesChannel(): ContextValuesChannel
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
setContextValuesChannel(value: ContextValuesChannel): IRfkRequest
/**
* @method resetContextValuesChannel
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesChannel(): IRfkRequest
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
updateContextValuesChannel(value: ContextValuesChannel): IRfkRequest
/**
* @method getContextValuesChannelItems
* @group
* @desc
* @return string[]
*/
getContextValuesChannelItems(): string[]
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
setContextValuesChannelItems(value: string[]): IRfkRequest
/**
* @method resetContextValuesChannelItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesChannelItems(): IRfkRequest
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
addContextValuesChannelItem(value: string): IRfkRequest

/**
* @method removeContextValuesChannelItem
* @group Context Values Channel Item
* @desc
* @return IRfkRequest
* @key value
* @type string
* @desc
* @value
* @key filter
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesChannelItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesGeo
* @group
* @desc
* @return ContextValuesGeo
*/
getContextValuesGeo(): ContextValuesGeo
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
setContextValuesGeo(value: ContextValuesGeo): IRfkRequest
/**
* @method resetContextValuesGeo
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesGeo(): IRfkRequest
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
updateContextValuesGeo(value: ContextValuesGeo): IRfkRequest
/**
* @method getContextValuesGeoItems
* @group
* @desc
* @return ContextValueGeoValue[]
*/
getContextValuesGeoItems(): ContextValueGeoValue[]
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
setContextValuesGeoItems(value: ContextValueGeoValue[]): IRfkRequest
/**
* @method resetContextValuesGeoItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesGeoItems(): IRfkRequest
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
addContextValuesGeoItem(value: ContextValueGeoValue): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesGeoItem(value: ContextValueGeoValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesHardFilter
* @group
* @desc
* @return ContextValuesHardFilter
*/
getContextValuesHardFilter(): ContextValuesHardFilter
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
setContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
/**
* @method resetContextValuesHardFilter
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesHardFilter(): IRfkRequest
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
updateContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
/**
* @method getContextValuesHardFilterItems
* @group
* @desc
* @return string[]
*/
getContextValuesHardFilterItems(): string[]
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
setContextValuesHardFilterItems(value: string[]): IRfkRequest
/**
* @method resetContextValuesHardFilterItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesHardFilterItems(): IRfkRequest
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
addContextValuesHardFilterItem(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesHardFilterItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesPage
* @group
* @desc
* @return ContextValuesPage
*/
getContextValuesPage(): ContextValuesPage
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
setContextValuesPage(value: ContextValuesPage): IRfkRequest
/**
* @method resetContextValuesPage
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesPage(): IRfkRequest
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
updateContextValuesPage(value: ContextValuesPage): IRfkRequest
/**
* @method getContextValuesPageItems
* @group
* @desc
* @return ContextValuePageValue[]
*/
getContextValuesPageItems(): ContextValuePageValue[]
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
setContextValuesPageItems(value: ContextValuePageValue[]): IRfkRequest
/**
* @method resetContextValuesPageItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesPageItems(): IRfkRequest
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
addContextValuesPageItem(value: ContextValuePageValue): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesPageItem(value: ContextValuePageValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesProduct
* @group
* @desc
* @return ContextValuesProduct
*/
getContextValuesProduct(): ContextValuesProduct
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
setContextValuesProduct(value: ContextValuesProduct): IRfkRequest
/**
* @method resetContextValuesProduct
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesProduct(): IRfkRequest
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
updateContextValuesProduct(value: ContextValuesProduct): IRfkRequest
/**
* @method getContextValuesProductItems
* @group
* @desc
* @return string[]
*/
getContextValuesProductItems(): string[]
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
setContextValuesProductItems(value: string[]): IRfkRequest
/**
* @method resetContextValuesProductItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesProductItems(): IRfkRequest
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
addContextValuesProductItem(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesProductItem(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextValuesUser
* @group
* @desc
* @return ContextValuesUser
*/
getContextValuesUser(): ContextValuesUser
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
setContextValuesUser(value: ContextValuesUser): IRfkRequest
/**
* @method resetContextValuesUser
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesUser(): IRfkRequest
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
updateContextValuesUser(value: ContextValuesUser): IRfkRequest
/**
* @method getContextValuesUserItems
* @group
* @desc
* @return ContextValueUserValue[]
*/
getContextValuesUserItems(): ContextValueUserValue[]
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
setContextValuesUserItems(value: ContextValueUserValue[]): IRfkRequest
/**
* @method resetContextValuesUserItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextValuesUserItems(): IRfkRequest
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
addContextValuesUserItem(value: ContextValueUserValue): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextValuesUserItem(value: ContextValueUserValue, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextBrowser
* @group
* @desc
* @return ContextBrowser
*/
getContextBrowser(): ContextBrowser
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
setContextBrowser(value: ContextBrowser): IRfkRequest
/**
* @method resetContextBrowser
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowser(): IRfkRequest
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
updateContextBrowser(value: ContextBrowser): IRfkRequest
/**
* @method getContextBrowserAppType
* @group
* @desc
* @return string
*/
getContextBrowserAppType(): string
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
setContextBrowserAppType(value: string): IRfkRequest
/**
* @method resetContextBrowserAppType
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserAppType(): IRfkRequest
/**
* @method getContextBrowserDevice
* @group
* @desc
* @return string
*/
getContextBrowserDevice(): string
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
setContextBrowserDevice(value: string): IRfkRequest
/**
* @method resetContextBrowserDevice
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserDevice(): IRfkRequest
/**
* @method getContextBrowserUserAgent
* @group
* @desc
* @return string
*/
getContextBrowserUserAgent(): string
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
setContextBrowserUserAgent(value: string): IRfkRequest
/**
* @method resetContextBrowserUserAgent
* @group
* @desc
* @return IRfkRequest
*/
resetContextBrowserUserAgent(): IRfkRequest
/**
* @method getContextCampaign
* @group
* @desc
* @return ContextCampaign
*/
getContextCampaign(): ContextCampaign
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
setContextCampaign(value: ContextCampaign): IRfkRequest
/**
* @method resetContextCampaign
* @group
* @desc
* @return IRfkRequest
*/
resetContextCampaign(): IRfkRequest
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
updateContextCampaign(value: ContextCampaign): IRfkRequest
/**
* @method getContextCampaignUtmCampaign
* @group
* @desc
* @return string
*/
getContextCampaignUtmCampaign(): string
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
setContextCampaignUtmCampaign(value: string): IRfkRequest
/**
* @method resetContextCampaignUtmCampaign
* @group
* @desc
* @return IRfkRequest
*/
resetContextCampaignUtmCampaign(): IRfkRequest
/**
* @method getContextCampaignUtmSource
* @group
* @desc
* @return string
*/
getContextCampaignUtmSource(): string
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
setContextCampaignUtmSource(value: string): IRfkRequest
/**
* @method resetContextCampaignUtmSource
* @group
* @desc
* @return IRfkRequest
*/
resetContextCampaignUtmSource(): IRfkRequest
/**
* @method getContextChannel
* @group
* @desc
* @return ContextChannel
*/
getContextChannel(): ContextChannel
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
setContextChannel(value: ContextChannel): IRfkRequest
/**
* @method resetContextChannel
* @group
* @desc
* @return IRfkRequest
*/
resetContextChannel(): IRfkRequest
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
updateContextChannel(value: ContextChannel): IRfkRequest
/**
* @method getContextChannelType
* @group
* @desc
* @return string
*/
getContextChannelType(): string
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
setContextChannelType(value: string): IRfkRequest
/**
* @method resetContextChannelType
* @group
* @desc
* @return IRfkRequest
*/
resetContextChannelType(): IRfkRequest
/**
* @method getContextFitment
* @group
* @desc
* @return ContextFitment
*/
getContextFitment(): ContextFitment
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
setContextFitment(value: ContextFitment): IRfkRequest
/**
* @method resetContextFitment
* @group
* @desc
* @return IRfkRequest
*/
resetContextFitment(): IRfkRequest
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
updateContextFitment(value: ContextFitment): IRfkRequest
/**
* @method getContextFitmentIds
* @group
* @desc
* @return string[]
*/
getContextFitmentIds(): string[]
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
setContextFitmentIds(value: string[]): IRfkRequest
/**
* @method resetContextFitmentIds
* @group
* @desc
* @return IRfkRequest
*/
resetContextFitmentIds(): IRfkRequest
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
addContextFitmentId(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextFitmentId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextFitmentItems
* @group
* @desc
* @return any[]
*/
getContextFitmentItems(): any[]
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
setContextFitmentItems(value: any[]): IRfkRequest
/**
* @method resetContextFitmentItems
* @group
* @desc
* @return IRfkRequest
*/
resetContextFitmentItems(): IRfkRequest
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
addContextFitmentItem(value: any): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextFitmentItem(value: any, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextGeo
* @group
* @desc
* @return ContextGeo
*/
getContextGeo(): ContextGeo
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
setContextGeo(value: ContextGeo): IRfkRequest
/**
* @method resetContextGeo
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeo(): IRfkRequest
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
updateContextGeo(value: ContextGeo): IRfkRequest
/**
* @method getContextGeoCity
* @group
* @desc
* @return string
*/
getContextGeoCity(): string
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
setContextGeoCity(value: string): IRfkRequest
/**
* @method resetContextGeoCity
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoCity(): IRfkRequest
/**
* @method getContextGeoCountry
* @group
* @desc
* @return string
*/
getContextGeoCountry(): string
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
setContextGeoCountry(value: string): IRfkRequest
/**
* @method resetContextGeoCountry
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoCountry(): IRfkRequest
/**
* @method getContextGeoIp
* @group
* @desc
* @return string
*/
getContextGeoIp(): string
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
setContextGeoIp(value: string): IRfkRequest
/**
* @method resetContextGeoIp
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoIp(): IRfkRequest
/**
* @method getContextGeoState
* @group
* @desc
* @return string
*/
getContextGeoState(): string
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
setContextGeoState(value: string): IRfkRequest
/**
* @method resetContextGeoState
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoState(): IRfkRequest
/**
* @method getContextGeoZip
* @group
* @desc
* @return string
*/
getContextGeoZip(): string
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
setContextGeoZip(value: string): IRfkRequest
/**
* @method resetContextGeoZip
* @group
* @desc
* @return IRfkRequest
*/
resetContextGeoZip(): IRfkRequest
/**
* @method getContextPage
* @group
* @desc
* @return ContextPage
*/
getContextPage(): ContextPage
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
setContextPage(value: ContextPage): IRfkRequest
/**
* @method resetContextPage
* @group
* @desc
* @return IRfkRequest
*/
resetContextPage(): IRfkRequest
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
updateContextPage(value: ContextPage): IRfkRequest
/**
* @method getContextPageAllCategoryIds
* @group
* @desc
* @return string[]
*/
getContextPageAllCategoryIds(): string[]
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
setContextPageAllCategoryIds(value: string[]): IRfkRequest
/**
* @method resetContextPageAllCategoryIds
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageAllCategoryIds(): IRfkRequest
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
addContextPageAllCategoryId(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextPageAllCategoryId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageCategoryId
* @group
* @desc
* @return string
*/
getContextPageCategoryId(): string
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
setContextPageCategoryId(value: string): IRfkRequest
/**
* @method resetContextPageCategoryId
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCategoryId(): IRfkRequest
/**
* @method getContextPageCategoryUri
* @group
* @desc
* @return string
*/
getContextPageCategoryUri(): string
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
setContextPageCategoryUri(value: string): IRfkRequest
/**
* @method resetContextPageCategoryUri
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCategoryUri(): IRfkRequest
/**
* @method getContextPageCcid
* @group
* @desc
* @return string
*/
getContextPageCcid(): string
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
setContextPageCcid(value: string): IRfkRequest
/**
* @method resetContextPageCcid
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageCcid(): IRfkRequest
/**
* @method getContextPageContainerId
* @group
* @desc
* @return string
*/
getContextPageContainerId(): string
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
setContextPageContainerId(value: string): IRfkRequest
/**
* @method resetContextPageContainerId
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageContainerId(): IRfkRequest
/**
* @method getContextPageLocaleCountry
* @group
* @desc
* @return string
*/
getContextPageLocaleCountry(): string
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
setContextPageLocaleCountry(value: string): IRfkRequest
/**
* @method resetContextPageLocaleCountry
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleCountry(): IRfkRequest
/**
* @method getContextPageLocaleCurrency
* @group
* @desc
* @return string
*/
getContextPageLocaleCurrency(): string
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
setContextPageLocaleCurrency(value: string): IRfkRequest
/**
* @method resetContextPageLocaleCurrency
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleCurrency(): IRfkRequest
/**
* @method getContextPageLocaleLanguage
* @group
* @desc
* @return string
*/
getContextPageLocaleLanguage(): string
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
setContextPageLocaleLanguage(value: string): IRfkRequest
/**
* @method resetContextPageLocaleLanguage
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageLocaleLanguage(): IRfkRequest
/**
* @method getContextPageProductGroups
* @group
* @desc
* @return string[]
*/
getContextPageProductGroups(): string[]
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
setContextPageProductGroups(value: string[]): IRfkRequest
/**
* @method resetContextPageProductGroups
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageProductGroups(): IRfkRequest
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
addContextPageProductGroup(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextPageProductGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageReferrer
* @group
* @desc
* @return string
*/
getContextPageReferrer(): string
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
setContextPageReferrer(value: string): IRfkRequest
/**
* @method resetContextPageReferrer
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageReferrer(): IRfkRequest
/**
* @method getContextPageSkus
* @group
* @desc
* @return string[]
*/
getContextPageSkus(): string[]
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
setContextPageSkus(value: string[]): IRfkRequest
/**
* @method resetContextPageSkus
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageSkus(): IRfkRequest
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
addContextPageSku(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextPageSku(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextPageTitle
* @group
* @desc
* @return string
*/
getContextPageTitle(): string
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
setContextPageTitle(value: string): IRfkRequest
/**
* @method resetContextPageTitle
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageTitle(): IRfkRequest
/**
* @method getContextPageUri
* @group
* @desc
* @return string
*/
getContextPageUri(): string
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
setContextPageUri(value: string): IRfkRequest
/**
* @method resetContextPageUri
* @group
* @desc
* @return IRfkRequest
*/
resetContextPageUri(): IRfkRequest
/**
* @method getContextStore
* @group
* @desc
* @return ContextStore
*/
getContextStore(): ContextStore
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
setContextStore(value: ContextStore): IRfkRequest
/**
* @method resetContextStore
* @group
* @desc
* @return IRfkRequest
*/
resetContextStore(): IRfkRequest
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
updateContextStore(value: ContextStore): IRfkRequest
/**
* @method getContextStoreGroupId
* @group
* @desc
* @return string
*/
getContextStoreGroupId(): string
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
setContextStoreGroupId(value: string): IRfkRequest
/**
* @method resetContextStoreGroupId
* @group
* @desc
* @return IRfkRequest
*/
resetContextStoreGroupId(): IRfkRequest
/**
* @method getContextStoreId
* @group
* @desc
* @return string
*/
getContextStoreId(): string
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
setContextStoreId(value: string): IRfkRequest
/**
* @method resetContextStoreId
* @group
* @desc
* @return IRfkRequest
*/
resetContextStoreId(): IRfkRequest
/**
* @method getContextUser
* @group
* @desc
* @return ContextUser
*/
getContextUser(): ContextUser
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
setContextUser(value: ContextUser): IRfkRequest
/**
* @method resetContextUser
* @group
* @desc
* @return IRfkRequest
*/
resetContextUser(): IRfkRequest
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
updateContextUser(value: ContextUser): IRfkRequest
/**
* @method getContextUserEmail
* @group
* @desc
* @return string
*/
getContextUserEmail(): string
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
setContextUserEmail(value: string): IRfkRequest
/**
* @method resetContextUserEmail
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserEmail(): IRfkRequest
/**
* @method getContextUserGender
* @group
* @desc
* @return string
*/
getContextUserGender(): string
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
setContextUserGender(value: string): IRfkRequest
/**
* @method resetContextUserGender
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserGender(): IRfkRequest
/**
* @method getContextUserGroups
* @group
* @desc
* @return string[]
*/
getContextUserGroups(): string[]
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
setContextUserGroups(value: string[]): IRfkRequest
/**
* @method resetContextUserGroups
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserGroups(): IRfkRequest
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
addContextUserGroup(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextUserGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextUserId
* @group
* @desc
* @return string
*/
getContextUserId(): string
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
setContextUserId(value: string): IRfkRequest
/**
* @method resetContextUserId
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserId(): IRfkRequest
/**
* @method getContextUserNewUser
* @group
* @desc
* @return boolean
*/
getContextUserNewUser(): boolean
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
setContextUserNewUser(value: boolean): IRfkRequest
/**
* @method resetContextUserNewUser
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserNewUser(): IRfkRequest
/**
* @method getContextUserOrderIds
* @group
* @desc
* @return string[]
*/
getContextUserOrderIds(): string[]
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
setContextUserOrderIds(value: string[]): IRfkRequest
/**
* @method resetContextUserOrderIds
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserOrderIds(): IRfkRequest
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
addContextUserOrderId(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeContextUserOrderId(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getContextUserUuid
* @group
* @desc
* @return string
*/
getContextUserUuid(): string
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
setContextUserUuid(value: string): IRfkRequest
/**
* @method resetContextUserUuid
* @group
* @desc
* @return IRfkRequest
*/
resetContextUserUuid(): IRfkRequest
/**
* @method getFacet
* @group
* @desc
* @return MapModel<Facet>
*/
getFacet(): MapModel<Facet>
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
setFacet(value: MapModel<Facet>): IRfkRequest
/**
* @method resetFacet
* @group
* @desc
* @return IRfkRequest
*/
resetFacet(): IRfkRequest
/**
* @method getFacetsAll
* @group
* @desc
* @return boolean
*/
getFacetsAll(): boolean
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
setFacetsAll(value: boolean): IRfkRequest
/**
* @method resetFacetsAll
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsAll(): IRfkRequest
/**
* @method getFacetsMax
* @group
* @desc
* @return number
*/
getFacetsMax(): number
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
setFacetsMax(value: number): IRfkRequest
/**
* @method resetFacetsMax
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsMax(): IRfkRequest
/**
* @method getFacetsSortCriteria
* @group
* @desc
* @return SortItem
*/
getFacetsSortCriteria(): SortItem
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
setFacetsSortCriteria(value: SortItem): IRfkRequest
/**
* @method resetFacetsSortCriteria
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsSortCriteria(): IRfkRequest
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
updateFacetsSortCriteria(value: SortItem): IRfkRequest
/**
* @method getFacetsSortCriteriaOrder
* @group
* @desc
* @return SortOrder
*/
getFacetsSortCriteriaOrder(): SortOrder
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
setFacetsSortCriteriaOrder(value: SortOrder): IRfkRequest
/**
* @method resetFacetsSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsSortCriteriaOrder(): IRfkRequest
/**
* @method getFacetsSortCriteriaType
* @group
* @desc
* @return string
*/
getFacetsSortCriteriaType(): string
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
setFacetsSortCriteriaType(value: string): IRfkRequest
/**
* @method resetFacetsSortCriteriaType
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsSortCriteriaType(): IRfkRequest
/**
* @method getFacetsTotal
* @group
* @desc
* @return number
*/
getFacetsTotal(): number
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
setFacetsTotal(value: number): IRfkRequest
/**
* @method resetFacetsTotal
* @group
* @desc
* @return IRfkRequest
*/
resetFacetsTotal(): IRfkRequest
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
getFacetMax(key: string): number
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
setFacetMax(key: string, value: number): IRfkRequest
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
resetFacetMax(key: string): IRfkRequest
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
getFacetMinCount(key: string): number
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
setFacetMinCount(key: string, value: number): IRfkRequest
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
resetFacetMinCount(key: string): IRfkRequest
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
getFacetSortCriteria(key: string): SortItem
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
setFacetSortCriteria(key: string, value: SortItem): IRfkRequestre
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
setFacetSortCriteria(key: string): IRfkRequest
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
updateFacetSortCriteria(key: string, value: SortItem): IRfkRequest
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
getFacetSortCriteriaOrder(key: string): SortOrder
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
setFacetSortCriteriaOrder(key: string, value: SortOrder): IRfkRequest
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
resetFacetSortCriteriaOrder(key: string): IRfkRequest
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
getFacetSortCriteriaType(key: string): string
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
setFacetSortCriteriaType(key: string, value: string): IRfkRequestre
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
setFacetSortCriteriaType(key: string): IRfkRequest
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
getFacetTotal(key: string): number
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
setFacetTotal(key: string, value: number): IRfkRequest
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
resetFacetTotal(key: string): IRfkRequest
/**
* @method getFeatures
* @group
* @desc
* @return Features
*/
getFeatures(): Features
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
setFeatures(value: Features): IRfkRequest
/**
* @method resetFeatures
* @group
* @desc
* @return IRfkRequest
*/
resetFeatures(): IRfkRequest
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
updateFeatures(value: Features): IRfkRequest
/**
* @method getFeaturesDiscover
* @group
* @desc
* @return Discover
*/
getFeaturesDiscover(): Discover
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
setFeaturesDiscover(value: Discover): IRfkRequest
/**
* @method resetFeaturesDiscover
* @group
* @desc
* @return IRfkRequest
*/
resetFeaturesDiscover(): IRfkRequest
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
updateFeaturesDiscover(value: Discover): IRfkRequest
/**
* @method getFeaturesDiscoverChoiceId
* @group
* @desc
* @return string
*/
getFeaturesDiscoverChoiceId(): string
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
setFeaturesDiscoverChoiceId(value: string): IRfkRequest
/**
* @method resetFeaturesDiscoverChoiceId
* @group
* @desc
* @return IRfkRequest
*/
resetFeaturesDiscoverChoiceId(): IRfkRequest
/**
* @method getFilter
* @group
* @desc
* @return MapModel<Filters>
*/
getFilter(): MapModel<Filters>
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
setFilter(value: MapModel<Filters>): IRfkRequest
/**
* @method resetFilter
* @group
* @desc
* @return IRfkRequest
*/
resetFilter(): IRfkRequest
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
getFilterValues(key: string): FiltersFilter[]
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
setFilterValues(key: string, value: FiltersFilter[]): IRfkRequest
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
resetFilterValues(key: string): IRfkRequest
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
addFilterValue(key: string, value: FiltersFilter): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeFilterValue(key: string, value: FiltersFilter, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getNumberProducts
* @group
* @desc
* @return number
*/
getNumberProducts(): number
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
setNumberProducts(value: number): IRfkRequest
/**
* @method resetNumberProducts
* @group
* @desc
* @return IRfkRequest
*/
resetNumberProducts(): IRfkRequest
/**
* @method getPageNumber
* @group
* @desc
* @return number
*/
getPageNumber(): number
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
setPageNumber(value: number): IRfkRequest
/**
* @method resetPageNumber
* @group
* @desc
* @return IRfkRequest
*/
resetPageNumber(): IRfkRequest
/**
* @method getQuery
* @group
* @desc
* @return Query
*/
getQuery(): Query
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
setQuery(value: Query): IRfkRequest
/**
* @method resetQuery
* @group
* @desc
* @return IRfkRequest
*/
resetQuery(): IRfkRequest
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
updateQuery(value: Query): IRfkRequest
/**
* @method getQueryCategories
* @group
* @desc
* @return string[]
*/
getQueryCategories(): string[]
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
setQueryCategories(value: string[]): IRfkRequest
/**
* @method resetQueryCategories
* @group
* @desc
* @return IRfkRequest
*/
resetQueryCategories(): IRfkRequest
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
addQueryCategory(value: string): IRfkRequest
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
* @type (v: any) => boolean)
* @desc
* @value
*/
removeQueryCategory(value: string, filter?: (v: any) => boolean): IRfkRequest
/**
* @method getQueryKeyphrase
* @group
* @desc
* @return string
*/
getQueryKeyphrase(): string
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
setQueryKeyphrase(value: string): IRfkRequest
/**
* @method resetQueryKeyphrase
* @group
* @desc
* @return IRfkRequest
*/
resetQueryKeyphrase(): IRfkRequest
/**
* @method getSort
* @group
* @desc
* @return Sort
*/
getSort(): Sort
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
setSort(value: Sort): IRfkRequest
/**
* @method resetSort
* @group
* @desc
* @return IRfkRequest
*/
resetSort(): IRfkRequest
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
updateSort(value: Sort): IRfkRequest
/**
* @method getSortChoices
* @group
* @desc
* @return boolean
*/
getSortChoices(): boolean
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
setSortChoices(value: boolean): IRfkRequest
/**
* @method resetSortChoices
* @group
* @desc
* @return IRfkRequest
*/
resetSortChoices(): IRfkRequest
/**
* @method getSortCriteria
* @group
* @desc
* @return SortItem
*/
getSortCriteria(): SortItem
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
setSortCriteria(value: SortItem): IRfkRequest
/**
* @method resetSortCriteria
* @group
* @desc
* @return IRfkRequest
*/
resetSortCriteria(): IRfkRequest
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
updateSortCriteria(value: SortItem): IRfkRequest
/**
* @method getSortCriteriaOrder
* @group
* @desc
* @return SortOrder
*/
getSortCriteriaOrder(): SortOrder
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
setSortCriteriaOrder(value: SortOrder): IRfkRequest
/**
* @method resetSortCriteriaOrder
* @group
* @desc
* @return IRfkRequest
*/
resetSortCriteriaOrder(): IRfkRequest
/**
* @method getSortCriteriaType
* @group
* @desc
* @return string
*/
getSortCriteriaType(): string
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
setSortCriteriaType(value: string): IRfkRequest
/**
* @method resetSortCriteriaType
* @group
* @desc
* @return IRfkRequest
*/
resetSortCriteriaType(): IRfkRequest
/**
* @method getSuggestion
* @group
* @desc
* @return Suggestion
*/
getSuggestion(): Suggestion
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
setSuggestion(value: Suggestion): IRfkRequest
/**
* @method resetSuggestion
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestion(): IRfkRequest
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
updateSuggestion(value: Suggestion): IRfkRequest
/**
* @method getSuggestionCategory
* @group
* @desc
* @return number
*/
getSuggestionCategory(): number
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
setSuggestionCategory(value: number): IRfkRequest
/**
* @method resetSuggestionCategory
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionCategory(): IRfkRequest
/**
* @method getSuggestionKeyphrase
* @group
* @desc
* @return number
*/
getSuggestionKeyphrase(): number
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
setSuggestionKeyphrase(value: number): IRfkRequest
/**
* @method resetSuggestionKeyphrase
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionKeyphrase(): IRfkRequest
/**
* @method getSuggestionRecent
* @group
* @desc
* @return number
*/
getSuggestionRecent(): number
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
setSuggestionRecent(value: number): IRfkRequest
/**
* @method resetSuggestionRecent
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionRecent(): IRfkRequest
/**
* @method getSuggestionTrendingCategory
* @group
* @desc
* @return number
*/
getSuggestionTrendingCategory(): number
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
setSuggestionTrendingCategory(value: number): IRfkRequest
/**
* @method resetSuggestionTrendingCategory
* @group
* @desc
* @return IRfkRequest
*/
resetSuggestionTrendingCategory(): IRfkRequest
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
setWidget(value: Widget): IRfkRequest
/**
* @method resetWidget
* @group
* @desc
* @return IRfkRequest
*/
resetWidget(): IRfkRequest
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
updateWidget(value: Widget): IRfkRequest
/**
* @method getWidgetAll
* @group
* @desc
* @return boolean
*/
getWidgetAll(): boolean
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
setWidgetAll(value: boolean): IRfkRequest
/**
* @method resetWidgetAll
* @group
* @desc
* @return IRfkRequest
*/
resetWidgetAll(): IRfkRequest
/**
* @method getWidgetRfkid
* @group
* @desc
* @return string
*/
getWidgetRfkid(): string
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
setWidgetRfkid(value: string): IRfkRequest
/**
* @method resetWidgetRfkid
* @group
* @desc
* @return IRfkRequest
*/
resetWidgetRfkid(): IRfkRequest
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
set<Prop>(prop: Prop, value: any, key?: string): default<Props>
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
get<Prop>(prop: Prop, defaultValue?: any, key?: string): default<Props>
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
resetValue<Prop>(prop: Prop, key?: string): default<Props>
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
getValue<Prop>(prop: Prop, defaultValue?: any, key?: string): any
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
setValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
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
removeKey<Prop>(prop: Prop, keyToRemove: string | number): default<Props>
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
updateValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
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
addValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
/**
* @method removeValue<Prop>
* @group
* @desc
* @return any
* @key prop
* @type Prop
* @desc Required
* @value
* @key value
* @type any
* @desc Required
* @value
* @key filter
* @type (v: any, value: any) => boolean
* @desc
* @value
* @key key
* @type string
* @desc
* @value
*/
removeValue<Prop>(prop: Prop, value: any, filter?: (v: any, value: any) => boolean, key?: string): default<Props>
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
transformJson(json: any): any
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
toJson(...props: string[]): any
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
onChange(prop: string, value: any): void
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
addListeners(observers: Observer[]): void
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
addListener(observer: Observer): void
}