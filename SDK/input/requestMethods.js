export interface Request {
  getRfkId(): string
  setRfkId(rfkId: string): Request
  getWidgetInfo(widgetId: string): any
  //addWidgetBatchItem(widgetId: string, config?: Omit<BatchItem, "widget">): Request
  //addAllWidgetsBatchItem(config?: Omit<BatchItem, "widget">): Request
  addAllAppearanceTemplatesDevices(): Request
  addAllAppearanceTemplatesSections(): Request
  addAllAppearanceVariablesSections(): Request
  getAppearance(): Appearance
  setAppearance(value: Appearance): IRfkRequest
  resetAppearance(): IRfkRequest
  updateAppearance(value: Appearance): IRfkRequest
  getAppearanceTemplates(): Templates
  setAppearanceTemplates(value: Templates): IRfkRequest
  resetAppearanceTemplates(): IRfkRequest
  updateAppearanceTemplates(value: Templates): IRfkRequest
  getAppearanceTemplatesDevices(): DeviceType[]
  setAppearanceTemplatesDevices(value: DeviceType[]): IRfkRequest
  resetAppearanceTemplatesDevices(): IRfkRequest
  addAppearanceTemplatesDevice(value: DeviceType): IRfkRequest
  removeAppearanceTemplatesDevice(value: DeviceType, filter?: (v: any) => boolean): IRfkRequest
  getAppearanceTemplatesKeepOriginalCss(): boolean
  setAppearanceTemplatesKeepOriginalCss(value: boolean): IRfkRequest
  getAppearanceTemplatesKeepVariables(): boolean
  setAppearanceTemplatesKeepVariables(value: boolean): IRfkRequest
  resetAppearanceTemplatesKeepVariables(): IRfkRequest
  getAppearanceTemplatesSections(): SectionType[]
  setAppearanceTemplatesSections(value: SectionType[]): IRfkRequest
  removeAppearanceTemplatesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
  getAppearanceVariables(): Variables
  setAppearanceVariables(value: Variables): IRfkRequest
  resetAppearanceVariables(): IRfkRequest
  updateAppearanceVariables(value: Variables): IRfkRequest
  getAppearanceVariablesSections(): SectionType[]
  resetAppearanceVariablesSections(): IRfkRequest
  addAppearanceVariablesSection(value: SectionType): IRfkRequest
  removeAppearanceVariablesSection(value: SectionType, filter?: (v: any) => boolean): IRfkRequest
  getBatchItems(): BatchItem[]
  setBatchItems(value: BatchItem[]): IRfkRequest
  resetBatchItems(): IRfkRequest
  addBatchItem(value: BatchItem): IRfkRequest
  removeBatchItem(value: BatchItem, filter?: (v: any) => boolean): IRfkRequest
  getContent(): Content
  setContent(value: Content): IRfkRequest
  resetContent(): IRfkRequest
  updateContent(value: Content): IRfkRequest
  getContentArticle(): any
  etContentArticle(value: any): IRfkRequest
  resetContentArticle(): IRfkRequest
  getContentProduct(): any
  setContentProduct(value: any): IRfkRequest
  resetContentProduct(): IRfkRequest
  getContentStore(): any
  setContentStore(value: any): IRfkRequest
  resetContentStore(): IRfkRequest
  getContext(): Context
  setContext(value: Context): IRfkRequest
  resetContext(): IRfkRequest
  updateContext(value: Context): IRfkRequestgetContextValues
  setContextValues(value: ContextValues): IRfkRequest
  resetContextValues(): IRfkRequest
  updateContextValues(value: ContextValues): IRfkRequest
  getContextValuesBrowser(): ContextValuesBrowser
  setContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
  resetContextValuesBrowser(): IRfkRequest
  updateContextValuesBrowser(value: ContextValuesBrowser): IRfkRequest
  getContextValuesBrowserItems(): ContextValueBrowserValue[]
  setContextValuesBrowserItems(value: ContextValueBrowserValue[]): IRfkRequest
  resetContextValuesBrowserItems(): IRfkRequest
  addContextValuesBrowserItem(value: ContextValueBrowserValue): IRfkRequest
  removeContextValuesBrowserItem(value: ContextValueBrowserValue, filter?: (v: any) => boolean): IRfkRequest
  setContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
  resetContextValuesCampaign(): IRfkRequest
  updateContextValuesCampaign(value: ContextValuesCampaign): IRfkRequest
  getContextValuesCampaignItems(): ContextValueCampaignValue[]
  setContextValuesCampaignItems(value: ContextValueCampaignValue[]): IRfkRequest
  resetContextValuesCampaignItems(): IRfkRequest
  addContextValuesCampaignItem(value: ContextValueCampaignValue): IRfkRequest
  removeContextValuesCampaignItem(value: ContextValueCampaignValue, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesCategory(): ContextValuesCategory
  setContextValuesCategory(value: ContextValuesCategory): IRfkRequest
  resetContextValuesCategory(): IRfkRequest
  updateContextValuesCategory(value: ContextValuesCategory): IRfkRequest
  getContextValuesCategoryItems(): string[]
  setContextValuesCategoryItems(value: string[]): IRfkRequest
  resetContextValuesCategoryItems(): IRfkRequest
  addContextValuesCategoryItem(value: string): IRfkRequest
  removeContextValuesCategoryItem(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesChannel(): ContextValuesChannel
  setContextValuesChannel(value: ContextValuesChannel): IRfkRequest
  resetContextValuesChannel(): IRfkRequest
  updateContextValuesChannel(value: ContextValuesChannel): IRfkRequest
  getContextValuesChannelItems(): string[]
  setContextValuesChannelItems(value: string[]): IRfkRequest
  resetContextValuesChannelItems(): IRfkRequest
  addContextValuesChannelItem(value: string): IRfkRequest
 //removeContextValuesChannelItem(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesGeo(): ContextValuesGeo
  setContextValuesGeo(value: ContextValuesGeo): IRfkRequest
  resetContextValuesGeo(): IRfkRequest
  updateContextValuesGeo(value: ContextValuesGeo): IRfkRequest
  getContextValuesGeoItems(): ContextValueGeoValue[]
  setContextValuesGeoItems(value: ContextValueGeoValue[]): IRfkRequest
  resetContextValuesGeoItems(): IRfkRequest
  addContextValuesGeoItem(value: ContextValueGeoValue): IRfkRequest
  removeContextValuesGeoItem(value: ContextValueGeoValue, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesHardFilter(): ContextValuesHardFilter
  setContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
  resetContextValuesHardFilter(): IRfkRequest
  updateContextValuesHardFilter(value: ContextValuesHardFilter): IRfkRequest
  getContextValuesHardFilterItems(): string[]
  setContextValuesHardFilterItems(value: string[]): IRfkRequest
  resetContextValuesHardFilterItems(): IRfkRequest
  addContextValuesHardFilterItem(value: string): IRfkRequest
  removeContextValuesHardFilterItem(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesPage(): ContextValuesPage
  setContextValuesPage(value: ContextValuesPage): IRfkRequest
  resetContextValuesPage(): IRfkRequest
  updateContextValuesPage(value: ContextValuesPage): IRfkRequest
  getContextValuesPageItems(): ContextValuePageValue[]
  setContextValuesPageItems(value: ContextValuePageValue[]): IRfkRequest
  resetContextValuesPageItems(): IRfkRequest
  addContextValuesPageItem(value: ContextValuePageValue): IRfkRequest
  removeContextValuesPageItem(value: ContextValuePageValue, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesProduct(): ContextValuesProduct
  setContextValuesProduct(value: ContextValuesProduct): IRfkRequest
  resetContextValuesProduct(): IRfkRequest
  updateContextValuesProduct(value: ContextValuesProduct): IRfkRequest
  getContextValuesProductItems(): string[]
  setContextValuesProductItems(value: string[]): IRfkRequest
  resetContextValuesProductItems(): IRfkRequest
  addContextValuesProductItem(value: string): IRfkRequest
  removeContextValuesProductItem(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextValuesUser(): ContextValuesUser
  setContextValuesUser(value: ContextValuesUser): IRfkRequest
  resetContextValuesUser(): IRfkRequest
  updateContextValuesUser(value: ContextValuesUser): IRfkRequest
  getContextValuesUserItems(): ContextValueUserValue[]
  setContextValuesUserItems(value: ContextValueUserValue[]): IRfkRequest
  resetContextValuesUserItems(): IRfkRequest
  addContextValuesUserItem(value: ContextValueUserValue): IRfkRequest
  removeContextValuesUserItem(value: ContextValueUserValue, filter?: (v: any) => boolean): IRfkRequest
  getContextBrowser(): ContextBrowser
  setContextBrowser(value: ContextBrowser): IRfkRequest
  resetContextBrowser(): IRfkRequest
  updateContextBrowser(value: ContextBrowser): IRfkRequest
  getContextBrowserAppType(): string
  setContextBrowserAppType(value: string): IRfkRequest
  resetContextBrowserAppType(): IRfkRequest
  getContextBrowserDevice(): string
  setContextBrowserDevice(value: string): IRfkRequest
  resetContextBrowserDevice(): IRfkRequest
  getContextBrowserUserAgent(): string
  setContextBrowserUserAgent(value: string): IRfkRequest
  resetContextBrowserUserAgent(): IRfkRequest
  getContextCampaign(): ContextCampaign
  setContextCampaign(value: ContextCampaign): IRfkRequest
  resetContextCampaign(): IRfkRequest
  updateContextCampaign(value: ContextCampaign): IRfkRequest
  getContextCampaignUtmCampaign(): string
  setContextCampaignUtmCampaign(value: string): IRfkRequest
  resetContextCampaignUtmCampaign(): IRfkRequest
  getContextCampaignUtmSource(): string
  setContextCampaignUtmSource(value: string): IRfkRequest
  resetContextCampaignUtmSource(): IRfkRequest
  getContextChannel(): ContextChannel
  setContextChannel(value: ContextChannel): IRfkRequest
  resetContextChannel(): IRfkRequest
  updateContextChannel(value: ContextChannel): IRfkRequest
  getContextChannelType(): string
  setContextChannelType(value: string): IRfkRequest
  resetContextChannelType(): IRfkRequest
  getContextFitment(): ContextFitment
  setContextFitment(value: ContextFitment): IRfkRequest
  resetContextFitment(): IRfkRequest
  updateContextFitment(value: ContextFitment): IRfkRequest
  getContextFitmentIds(): string[]
  setContextFitmentIds(value: string[]): IRfkRequest
  resetContextFitmentIds(): IRfkRequest
  addContextFitmentId(value: string): IRfkRequest
  removeContextFitmentId(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextFitmentItems(): any[]
  setContextFitmentItems(value: any[]): IRfkRequest
  resetContextFitmentItems(): IRfkRequest
  addContextFitmentItem(value: any): IRfkRequest
  removeContextFitmentItem(value: any, filter?: (v: any) => boolean): IRfkRequest
  getContextGeo(): ContextGeo
  setContextGeo(value: ContextGeo): IRfkRequest
  resetContextGeo(): IRfkRequest
  updateContextGeo(value: ContextGeo): IRfkRequest
  getContextGeoCity(): string
  setContextGeoCity(value: string): IRfkRequest
  resetContextGeoCity(): IRfkRequest
  getContextGeoCountry(): string
  setContextGeoCountry(value: string): IRfkRequest
  resetContextGeoCountry(): IRfkRequest
  getContextGeoIp(): string
  setContextGeoIp(value: string): IRfkRequest
  resetContextGeoIp(): IRfkRequest
  getContextGeoState(): string
  setContextGeoState(value: string): IRfkRequest
  resetContextGeoState(): IRfkRequest
  getContextGeoZip(): string
  setContextGeoZip(value: string): IRfkRequest
  resetContextGeoZip(): IRfkRequest
  getContextPage(): ContextPage
  setContextPage(value: ContextPage): IRfkRequest
  resetContextPage(): IRfkRequest
  updateContextPage(value: ContextPage): IRfkRequest
  getContextPageAllCategoryIds(): string[]
  setContextPageAllCategoryIds(value: string[]): IRfkRequest
  resetContextPageAllCategoryIds(): IRfkRequest
  addContextPageAllCategoryId(value: string): IRfkRequest
  removeContextPageAllCategoryId(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextPageCategoryId(): string
  setContextPageCategoryId(value: string): IRfkRequest
  resetContextPageCategoryId(): IRfkRequest
  getContextPageCategoryUri(): string
  setContextPageCategoryUri(value: string): IRfkRequest
  resetContextPageCategoryUri(): IRfkRequest
  getContextPageCcid(): string
  setContextPageCcid(value: string): IRfkRequest
  resetContextPageCcid(): IRfkRequest
  getContextPageContainerId(): string
  setContextPageContainerId(value: string): IRfkRequest
  resetContextPageContainerId(): IRfkRequest
  getContextPageLocaleCountry(): string
  setContextPageLocaleCountry(value: string): IRfkRequest
  resetContextPageLocaleCountry(): IRfkRequest
  getContextPageLocaleCurrency(): string
  setContextPageLocaleCurrency(value: string): IRfkRequest
  resetContextPageLocaleCurrency(): IRfkRequest
  getContextPageLocaleLanguage(): string
  setContextPageLocaleLanguage(value: string): IRfkRequest
  resetContextPageLocaleLanguage(): IRfkRequest
  getContextPageProductGroups(): string[]
  setContextPageProductGroups(value: string[]): IRfkRequest
  resetContextPageProductGroups(): IRfkRequest
  addContextPageProductGroup(value: string): IRfkRequest
  removeContextPageProductGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextPageReferrer(): string
  setContextPageReferrer(value: string): IRfkRequest
  resetContextPageReferrer(): IRfkRequest
  getContextPageSkus(): string[]
  setContextPageSkus(value: string[]): IRfkRequest
  resetContextPageSkus(): IRfkRequest
  addContextPageSku(value: string): IRfkRequest
  removeContextPageSku(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextPageTitle(): string
  setContextPageTitle(value: string): IRfkRequest
  resetContextPageTitle(): IRfkRequest
  getContextPageUri(): string
  setContextPageUri(value: string): IRfkRequest
  resetContextPageUri(): IRfkRequest
  getContextStore(): ContextStore
  setContextStore(value: ContextStore): IRfkRequest
  resetContextStore(): IRfkRequest
  updateContextStore(value: ContextStore): IRfkRequest
  getContextStoreGroupId(): string
  setContextStoreGroupId(value: string): IRfkRequest
  resetContextStoreGroupId(): IRfkRequest
  getContextStoreId(): string
  setContextStoreId(value: string): IRfkRequest
  resetContextStoreId(): IRfkRequest
  getContextUser(): ContextUser
  setContextUser(value: ContextUser): IRfkRequest
  resetContextUser(): IRfkRequest
  updateContextUser(value: ContextUser): IRfkRequest
  getContextUserEmail(): string
  setContextUserEmail(value: string): IRfkRequest
  resetContextUserEmail(): IRfkRequest
  getContextUserGender(): string
  setContextUserGender(value: string): IRfkRequest
  resetContextUserGender(): IRfkRequest
  getContextUserGroups(): string[]
  setContextUserGroups(value: string[]): IRfkRequest
  resetContextUserGroups(): IRfkRequest
  addContextUserGroup(value: string): IRfkRequest
  removeContextUserGroup(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextUserId(): string
  setContextUserId(value: string): IRfkRequest
  resetContextUserId(): IRfkRequest
  getContextUserNewUser(): boolean
  setContextUserNewUser(value: boolean): IRfkRequest
  resetContextUserNewUser(): IRfkRequest
  getContextUserOrderIds(): string[]
  setContextUserOrderIds(value: string[]): IRfkRequest
  resetContextUserOrderIds(): IRfkRequest
  addContextUserOrderId(value: string): IRfkRequest
  removeContextUserOrderId(value: string, filter?: (v: any) => boolean): IRfkRequest
  getContextUserUuid(): string
  setContextUserUuid(value: string): IRfkRequest
  resetContextUserUuid(): IRfkRequest
  getFacet(): MapModel<Facet>
  setFacet(value: MapModel<Facet>): IRfkRequest
  resetFacet(): IRfkRequest
  getFacetsAll(): boolean
  setFacetsAll(value: boolean): IRfkRequest
  resetFacetsAll(): IRfkRequest
  getFacetsMax(): number
  setFacetsMax(value: number): IRfkRequest
  resetFacetsMax(): IRfkRequest
  getFacetsSortCriteria(): SortItem
  setFacetsSortCriteria(value: SortItem): IRfkRequest
  resetFacetsSortCriteria(): IRfkRequest
  updateFacetsSortCriteria(value: SortItem): IRfkRequest
  getFacetsSortCriteriaOrder(): SortOrder
  setFacetsSortCriteriaOrder(value: SortOrder): IRfkRequest
  resetFacetsSortCriteriaOrder(): IRfkRequest
  getFacetsSortCriteriaType(): string
  setFacetsSortCriteriaType(value: string): IRfkRequest
  resetFacetsSortCriteriaType(): IRfkRequest
  getFacetsTotal(): number
  setFacetsTotal(value: number): IRfkRequest
  resetFacetsTotal(): IRfkRequest
  getFacetMax(key: string): number
  setFacetMax(key: string, value: number): IRfkRequest
  resetFacetMax(key: string): IRfkRequest
  getFacetMinCount(key: string): number
  setFacetMinCount(key: string, value: number): IRfkRequest
  resetFacetMinCount(key: string): IRfkRequest
  getFacetSortCriteria(key: string): SortItem
  setFacetSortCriteria(key: string, value: SortItem): IRfkRequestre
  setFacetSortCriteria(key: string): IRfkRequest
  updateFacetSortCriteria(key: string, value: SortItem): IRfkRequest
  getFacetSortCriteriaOrder(key: string): SortOrder
  setFacetSortCriteriaOrder(key: string, value: SortOrder): IRfkRequest
  resetFacetSortCriteriaOrder(key: string): IRfkRequest
  getFacetSortCriteriaType(key: string): string
  setFacetSortCriteriaType(key: string, value: string): IRfkRequestre
  setFacetSortCriteriaType(key: string): IRfkRequest
  getFacetTotal(key: string): number
  setFacetTotal(key: string, value: number): IRfkRequest
  resetFacetTotal(key: string): IRfkRequest
  getFeatures(): Features
  setFeatures(value: Features): IRfkRequest
  resetFeatures(): IRfkRequest
  updateFeatures(value: Features): IRfkRequest
  getFeaturesDiscover(): Discover
  setFeaturesDiscover(value: Discover): IRfkRequest
  resetFeaturesDiscover(): IRfkRequest
  updateFeaturesDiscover(value: Discover): IRfkRequest
  getFeaturesDiscoverChoiceId(): string
  setFeaturesDiscoverChoiceId(value: string): IRfkRequest
  resetFeaturesDiscoverChoiceId(): IRfkRequest
  getFilter(): MapModel<Filters>
  setFilter(value: MapModel<Filters>): IRfkRequest
  resetFilter(): IRfkRequest
  getFilterValues(key: string): FiltersFilter[]
  setFilterValues(key: string, value: FiltersFilter[]): IRfkRequest
  resetFilterValues(key: string): IRfkRequest
  addFilterValue(key: string, value: FiltersFilter): IRfkRequest
  removeFilterValue(key: string, value: FiltersFilter, filter?: (v: any) => boolean): IRfkRequest
  getNumberProducts(): number
  setNumberProducts(value: number): IRfkRequest
  resetNumberProducts(): IRfkRequest
  getPageNumber(): number
  setPageNumber(value: number): IRfkRequest
  resetPageNumber(): IRfkRequest
  getQuery(): Query
  setQuery(value: Query): IRfkRequest
  resetQuery(): IRfkRequest
  updateQuery(value: Query): IRfkRequest
  getQueryCategories(): string[]
  setQueryCategories(value: string[]): IRfkRequest
  resetQueryCategories(): IRfkRequest
  addQueryCategory(value: string): IRfkRequest
  removeQueryCategory(value: string, filter?: (v: any) => boolean): IRfkRequest
  getQueryKeyphrase(): string
  setQueryKeyphrase(value: string): IRfkRequest
  resetQueryKeyphrase(): IRfkRequest
  getSort(): Sort
  setSort(value: Sort): IRfkRequest
  resetSort(): IRfkRequest
  updateSort(value: Sort): IRfkRequest
  getSortChoices(): boolean
  setSortChoices(value: boolean): IRfkRequest
  resetSortChoices(): IRfkRequest
  getSortCriteria(): SortItem
  setSortCriteria(value: SortItem): IRfkRequest
  resetSortCriteria(): IRfkRequest
  updateSortCriteria(value: SortItem): IRfkRequest
  getSortCriteriaOrder(): SortOrder
  setSortCriteriaOrder(value: SortOrder): IRfkRequest
  resetSortCriteriaOrder(): IRfkRequest
  getSortCriteriaType(): string
  setSortCriteriaType(value: string): IRfkRequest
  resetSortCriteriaType(): IRfkRequest
  getSuggestion(): Suggestion
  setSuggestion(value: Suggestion): IRfkRequest
  resetSuggestion(): IRfkRequest
  updateSuggestion(value: Suggestion): IRfkRequest
  getSuggestionCategory(): number
  setSuggestionCategory(value: number): IRfkRequest
  resetSuggestionCategory(): IRfkRequest
  getSuggestionKeyphrase(): number
  setSuggestionKeyphrase(value: number): IRfkRequest
  resetSuggestionKeyphrase(): IRfkRequest
  getSuggestionRecent(): number
  setSuggestionRecent(value: number): IRfkRequest
  resetSuggestionRecent(): IRfkRequest
  getSuggestionTrendingCategory(): number
  setSuggestionTrendingCategory(value: number): IRfkRequest
  resetSuggestionTrendingCategory(): IRfkRequest
  setWidget(value: Widget): IRfkRequest
  resetWidget(): IRfkRequest
  updateWidget(value: Widget): IRfkRequest
  getWidgetAll(): boolean
  setWidgetAll(value: boolean): IRfkRequest
  resetWidgetAll(): IRfkRequest
  getWidgetRfkid(): string
  setWidgetRfkid(value: string): IRfkRequest
  resetWidgetRfkid(): IRfkRequest
  set<Prop>(prop: Prop, value: any, key?: string): default<Props>
  get<Prop>(prop: Prop, defaultValue?: any, key?: string): default<Props>
  resetValue<Prop>(prop: Prop, key?: string): default<Props>
  getValue<Prop>(prop: Prop, defaultValue?: any, key?: string): any
  setValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
  removeKey<Prop>(prop: Prop, keyToRemove: string | number): default<Props>
  updateValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
  addValue<Prop>(prop: Prop, value: any, key?: string): default<Props>
  //removeValue<Prop>(prop: Prop, value: any, filter?: (v: any, value: any) => boolean, key?: string): default<Props>
  transformJson(json: any): any
  toJson(...props: string[]): any
  onChange(prop: string, value: any): void
  addListeners(observers: Observer[]): void
  addListener(observer: Observer): void
  }
  