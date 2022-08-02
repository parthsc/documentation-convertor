/**
 * @object ContextStore
 * @desc Contains information about a store.
 */
 export interface ContextStore {
    /**
     * @key id
     * @type string
     * @desc An identifier for a store.
     * @value
     */
    id?: string;
    /**
     * @key group_id
     * @type string
     * @desc Additional identifier when the stores are organized in a hierarchy.
     * @value
     */
    group_id?: string;
  }
  /**
   * @object ContextUser
   * @desc Contains information about a user. Values for properties or keys are optional
   * unless specified.
   */
  export interface ContextUser {
    /**
     * @key groups
     * @type array of strings
     * @desc IDs of any groups to which the user belongs.
     * @value
     */
    groups?: Array<string>;
    /**
     * @key order_id
     * @type string
     * @desc ID of an order. To be included if to link user to an order.
     * @value
     */
    order_id?: Array<string>;
    /**
     * @key gender
     * @type string
     * @desc Gender of user for analytics or other purposes.
     * @value
     */
    gender?: string;
    /**
     * @key email
     * @type string
     * @desc User's email address. Use the following pattern: username@domain.com.
     * @value
     */
    email?: string;
    /**
     * @key uuid
     * @type string
     * @desc ID to uniquely identify a user. The SDK assigns a value unless overridden.
     * For analytics purposes, this value should persist beyond a session in a cookie.
     * @value
     */
    uuid?: string;
    /** @key id
     * @type string
     * @desc Any persistent ID you use to identify the user.
     * @value
     */
    id?: string;
    /**
     * @key new_user
     * @type boolean
     * @desc Flag to identify if the user is new to your website or store.
     * @value TRUE, FALSE.
     */
    new_user?: boolean;
  }
  /**
   * @object ContextPage
   * @desc Describes a page.
   */
  export interface ContextPage {
    /**
     * @key skus
     * @type array of strings
     * @desc Array of product SKUs that are on the current page or in the cart. For a product detail page (PDP page) sku is an array containing the single SKU representing that product. Note: Either uri or sku is required.
     * @value
     */
    skus?: Array<string>;
    /**
     * @key product_groups
     * @type array of strings
     * @desc List of IDs identifying product groups.
     * @value
     */
    product_groups?: Array<string>;
    /**
     * @key category_uri
     * @type string
     * @desc URL associated with a particular category.
     * @value
     */
    category_uri?: string;
    /**
     * @key uri
     * @type string
     * @desc URL of the page being displayed.
     * @value
     */
    uri?: string;
    /**
     * @key ccid
     * @type string
     * @desc ID for a category in the customer's system.
     * @value
     */
    ccid?: string;
    /**
     * @key category_id
     * @type string
     * @desc ID for a category in Discover.
     * @value .
     */
    category_id?: string;
    /**
     * @key locale_country
     * @type string
     * @desc Two character string identifying a country. For example, USA is <code>US</code> and Canada is <code>CA</code>. See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     * @value
     */
    locale_country?: string;
    /**
     * @key locale_language
     * @type string
     * @desc Two character string identifying a language.
     * For example, English is <code>en</code> and Spanish is <code>fr</code>.
     * See https://en.wikipedia.org/wiki/ISO_639-1
     * @value
     */
    locale_language?: string;
    /**
     * @key locale_currency
     * @type string
     * @desc Two character string identifying a currency. For example, US dollars is <code>USD</code> and Canadian dollars is <code>CAD</code>. See https://en.wikipedia.org/wiki/ISO_4217
     * @value
     */
    locale_currency?: string;
    /**
     * @key referrer
     * @type string
     * @desc The page referrer.
     * @value
     */
    referrer?: string;
    /**
     * @key title
     * @type string
     * @desc Title of the current page.
     * @value
     */
    title?: string;
    /**
     * @key container_id
     * @type string
     * @desc ID of the page set or a single page. We recommend you use uri instead of container_id.
     * @value
     */
    container_id?: string;
    /**
     * @key all_category_ids
     * @type array of strings
     * @desc Unique category ID that Discover assigns a given category page
     * @value
     */
    all_category_ids?: Array<string>;
  }
  /**
   * @object ContextCampaign
   * @desc Contains information about a campaign.
   */
  export interface ContextCampaign {
    /**
     * @key utm_campaign
     * @type string
     * @desc The paid campaign identifier. Provide information in the campaign context or as part of the request URL.
     * @value
     */
    utm_campaign?: string;
    /**
     * @key utm_source
     * @type string
     * @desc The paid campaign source. Provide information in the campaign context or as part of the request URL.
     * @value
     */
    utm_source?: string;
  }
  /**
   * @object ContextGeo
   * @desc Contains information about location or address.
   */
  export interface ContextGeo {
    /**
     * @key ip
     * @type string
     * @desc User's IP address sent by the browser or native application. Note: Do not pass the IP address of your server or proxy. Discover uses the X-Forwarded-For header if the user's IP address is not specified. If there is no X-Forwarded-For header, Discover uses IP address of the request.
     * @value
     */
    ip?: string;
    /**
     * @key country
     * @type string
     * @desc Two character string identifying a country. For example, USA is <code>US</code> and Canada is <code>CA</code>. See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. Computed automatically from the IP address.
     * @value
     */
    country?: string;
    /**
     * @key state
     * @type string
     * @desc State or province name (also referred to as region). This must be a full name, not a state code. For example: North Dakota and not ND. Computed automatically from the IP address.
     * @value
     */
    state?: string;
    /**
     * @key city
     * @type string
     * @desc City name. This must be a full name, not a code. Computed automatically from the IP address.
     * @value
     */
    city?: string;
    /**
     * @key zip
     * @type string
     * @desc Zip code or postal code of the location. Computed automatically from the IP address.
     * @value
     */
    zip?: string;
  }
  /**
   * @object ContextFitment
   * @desc Contains information about a fitment
   */
  export interface ContextFitment {
    /**
     * @key ids
     * @type array of strings
     * @desc An array of user fitment IDs. Usually, there is only one fitment ID because a user selects only one fitment as part of the interaction on the website. Use ids when you have a separate fitment entity in your system and an associated ID for each fitment. You must provide this fitment as part of the initial product feed to Sitecore Discover.
     * @value
     */
    ids?: Array<string>;
    /**
     * @key items
     * @type array of objects
     * @desc An array of fitment objects. Provide this attribute when a customer does not have fitment IDs associated with fitments in their system. We recommend that, if possible, you use ids and not items. Note: You can provide ids or items, but not both. If you provide both, Disocver uses ids and ignores items. Usually, there is only one fitment object because a user selects only one fitment as part of the interaction on the website. If you do not have a separate fitment entity, you must send fitment attributes as part of the context. Note: You must send all fitment attributes in the object. If you send partial information, Disover discards all of it.
     * @value
     */
    items?: Array<any>;
  }
  /** @object ContextBrowser
   * @desc Contains information about the browser used.
   */
  export interface ContextBrowser {
    /**
     * @key user_agent
     * @type string
     * @desc The browser user agent. Must follow industry convention to ensure device and app_type can be detected automatically. Important: If you do not include user_agent, you must include device and app_type.
     * @value n/a
     */
    user_agent?: string;
    /**
     * @key device
     * @type string
     * @desc Device used to access the experience. Important: Computed automatically by default if you include user_agent.
     * @value pc, tablet, mobile
     */
    device?: string;
    /** @key app_type
     * @type string
     * @desc Type of app used to access the experience. Important: Computed automatically by default if you include user_agent.
     * @value browser, webview, native
     */
    app_type?: string;
  }
  /**
   * @object ContextChannel
   * @desc Contains information about the channel.
   */
  export interface ContextChannel {
    /**
     * @key type
     * @type string
     * @desc Type of Channel
     * @value
     */
    type?: string;
  }
  /**
   * @object IContext
   * @desc Context object type
   */
  export interface IContext extends RequestData<Props> {
    /**
     * @method getBrowser
     * @group browser
     * @desc Gets the browser context object.
     * @return ContextBrowser
     */
    getBrowser(): ContextBrowser;
    /**
     * @method setBrowser
     * @group browser
     * @desc Gets the Browser context object.
     * @return ContextBrowser
     * @key value
     * @type string
     * @desc Required. This object describes page.
     * @value -
     * @key filter
     * @type function
     * @desc Accepts any function in the following format: (v: any) => boolean).
     * @value -
     */
    setBrowser(value: ContextBrowser): IContext;
    /**
     * @method resetBrowser
     * @group browser
     * @desc Resets the browser context object.
     * @return ContextBrowser
     */
    resetBrowser(): IContext;
    /**
     * @method updateBrowser
     * @group browser
     * @desc
     * @return IContext;
     * @key value
     * @type ContextBrowser
     * @desc
     * @value
     */
    updateBrowser(value: ContextBrowser): IContext;
    /**
     * @method getBrowserAppType
     * @group browser
     * @desc
     * @return string;
     */
    getBrowserAppType(): string;
    /**
     * @method setBrowserAppType
     * @group browserAppType
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setBrowserAppType(value: string): IContext;
    /**
     * @method resetBrowserAppType
     * @group browserAppType
     * @desc
     * @return IContext;
     */
    resetBrowserAppType(): IContext;
    /**
     * @method getBrowserDevice
     * @group BrowserDevice
     * @desc
     * @return string;
     */
    getBrowserDevice(): string;
    /**
     * @method setBrowserDevice
     * @group BrowserDevice
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setBrowserDevice(value: string): IContext;
    /**
     * @method resetBrowserDevice
     * @group
     * @desc
     * @return IContext;
     */
    resetBrowserDevice(): IContext;
    /**
     * @method getBrowserUserAgent
     * @group
     * @desc
     * @return string;
     */
    getBrowserUserAgent(): string;
    /**
     * @method setBrowserUserAgent
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setBrowserUserAgent(value: string): IContext;
    /**
     * @method resetBrowserUserAgent
     * @group
     * @desc
     * @return IContext;
     */
    resetBrowserUserAgent(): IContext;
    /**
     * @method getCampaign
     * @group
     * @desc
     * @return ContextCampaign;
     */
    getCampaign(): ContextCampaign;
    /**
     * @method setCampaign
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextCampaign
     * @desc
     * @value
     */
    setCampaign(value: ContextCampaign): IContext;
    /**
     * @method resetCampaign
     * @group
     * @desc
     * @return IContext;
     */
    resetCampaign(): IContext;
    /**
     * @method updateCampaign
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextCampaign
     * @desc
     * @value
     */
    updateCampaign(value: ContextCampaign): IContext;
    /**
     * @method getCampaignUtmCampaign
     * @group
     * @desc
     * @return string;
     */
    getCampaignUtmCampaign(): string;
    /**
     * @method setCampaignUtmCampaign
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setCampaignUtmCampaign(value: string): IContext;
    /**
     * @method resetCampaignUtmCampaign
     * @group
     * @desc
     * @return IContext;
     */
    resetCampaignUtmCampaign(): IContext;
    /**
     * @method getCampaignUtmSource
     * @group
     * @desc
     * @return string;
     */
    getCampaignUtmSource(): string;
    /**
     * @method setCampaignUtmSource
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setCampaignUtmSource(value: string): IContext;
    /**
     * @method resetCampaignUtmSource
     * @group
     * @desc
     * @return IContext;
     */
    resetCampaignUtmSource(): IContext;
    /**
     * @method getChannel
     * @group
     * @desc
     * @return ContextChannel;
     */
    getChannel(): ContextChannel;
    /**
     * @method setChannel
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextChannel
     * @desc
     * @value
     */
    setChannel(value: ContextChannel): IContext;
    /**
     * @method resetChannel
     * @group
     * @desc
     * @return IContext;
     */
    resetChannel(): IContext;
    /**
     * @method updateChannel
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextChannel
     * @desc
     * @value
     */
    updateChannel(value: ContextChannel): IContext;
    /**
     * @method getChannelType
     * @group
     * @desc
     * @return string;
     */
    getChannelType(): string;
    /**
     * @method setChannelType
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setChannelType(value: string): IContext;
    /**
     * @method resetChannelType
     * @group
     * @desc
     * @return IContext;
     */
    resetChannelType(): IContext;
    /**
     * @method getFitment
     * @group
     * @desc
     * @return ContextFitment;
     */
    getFitment(): ContextFitment;
    /**
     * @method setFitment
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextFitment
     * @desc
     * @value
     */
    setFitment(value: ContextFitment): IContext;
    /**
     * @method resetFitment
     * @group
     * @desc
     * @return IContext;
     */
    resetFitment(): IContext;
    /**
     * @method updateFitment
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextFitment
     * @desc
     * @value
     */
    updateFitment(value: ContextFitment): IContext;
    /**
     * @method getFitmentIds
     * @group
     * @desc
     * @return Array<string>;
     */
    getFitmentIds(): Array<string>;
    /**
     * @method setFitmentIds
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setFitmentIds(value: Array<string>): IContext;
    /**
     * @method resetFitmentIds
     * @group
     * @desc
     * @return IContext;
     */
    resetFitmentIds(): IContext;
    /**
     * @method addFitmentId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addFitmentId(value: string): IContext;
    /**
     * @method removeFitmentId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removeFitmentId(value: string, filter?: (v: any) => boolean): IContext;
    /**
     * @method getFitmentItems
     * @group
     * @desc
     * @return Array<any>;
     */
    getFitmentItems(): Array<any>;
    /**
     * @method setFitmentItems
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<any>
     * @desc
     * @value
     */
    setFitmentItems(value: Array<any>): IContext;
    /**
     * @method resetFitmentItems
     * @group
     * @desc
     * @return IContext;
     */
    resetFitmentItems(): IContext;
    /**
     * @method addFitmentItem
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type any
     * @desc
     * @value
     */
    addFitmentItem(value: any): IContext;
    /**
     * @method removeFitmentItem
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type any
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removeFitmentItem(value: any, filter?: (v: any) => boolean): IContext;
    /**
     * @method getGeo
     * @group
     * @desc
     * @return ContextGeo;
     */
    getGeo(): ContextGeo;
    /**
     * @method setGeo
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextGeo
     * @desc
     * @value
     */
    setGeo(value: ContextGeo): IContext;
    /**
     * @method resetGeo
     * @group
     * @desc
     * @return IContext;
     */
    resetGeo(): IContext;
    /**
     * @method updateGeo
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextGeo
     * @desc
     * @value
     */
    updateGeo(value: ContextGeo): IContext;
    /**
     * @method getGeoCity
     * @group
     * @desc
     * @return string;
     */
    getGeoCity(): string;
    /**
     * @method setGeoCity
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setGeoCity(value: string): IContext;
    /**
     * @method resetGeoCity
     * @group
     * @desc
     * @return IContext;
     */
    resetGeoCity(): IContext;
    /**
     * @method getGeoCountry
     * @group
     * @desc
     * @return string;
     */
    getGeoCountry(): string;
    /**
     * @method setGeoCountry
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setGeoCountry(value: string): IContext;
    /**
     * @method resetGeoCountry
     * @group
     * @desc
     * @return IContext;
     */
    resetGeoCountry(): IContext;
    /**
     * @method getGeoIp
     * @group
     * @desc
     * @return string;
     */
    getGeoIp(): string;
    /**
     * @method setGeoIp
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setGeoIp(value: string): IContext;
    /**
     * @method resetGeoIp
     * @group
     * @desc
     * @return IContext;
     */
    resetGeoIp(): IContext;
    /**
     * @method getGeoState
     * @group
     * @desc
     * @return string;
     */
    getGeoState(): string;
    /**
     * @method setGeoState
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setGeoState(value: string): IContext;
    /**
     * @method resetGeoState
     * @group
     * @desc
     * @return IContext;
     */
    resetGeoState(): IContext;
    /**
     * @method getGeoZip
     * @group
     * @desc
     * @return string;
     */
    getGeoZip(): string;
    /**
     * @method setGeoZip
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setGeoZip(value: string): IContext;
    /**
     * @method resetGeoZip
     * @group
     * @desc
     * @return IContext;
     */
    resetGeoZip(): IContext;
    /**
     * @method getPage
     * @group
     * @desc
     * @return ContextPage;
     */
    getPage(): ContextPage;
    /**
     * @method setPage
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextPage
     * @desc
     * @value
     */
    setPage(value: ContextPage): IContext;
    /**
     * @method resetPage
     * @group
     * @desc
     * @return IContext;
     */
    resetPage(): IContext;
    /**
     * @method updatePage
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextPage
     * @desc
     * @value
     */
    updatePage(value: ContextPage): IContext;
    /**
     * @method getPageAllCategoryIds
     * @group
     * @desc
     * @return Array<string>;
     */
    getPageAllCategoryIds(): Array<string>;
    /**
     * @method setPageAllCategoryIds
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setPageAllCategoryIds(value: Array<string>): IContext;
    /**
     * @method resetPageAllCategoryIds
     * @group
     * @desc
     * @return IContext;
     */
    resetPageAllCategoryIds(): IContext;
    /**
     * @method addPageAllCategoryId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addPageAllCategoryId(value: string): IContext;
    /**
     * @method removePageAllCategoryId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removePageAllCategoryId(
      value: string,
      filter?: (v: any) => boolean
    ): IContext;
    /**
     * @method getPageCategoryId
     * @group
     * @desc
     * @return string;
     */
    getPageCategoryId(): string;
    /**
     * @method setPageCategoryId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageCategoryId(value: string): IContext;
    /**
     * @method resetPageCategoryId
     * @group
     * @desc
     * @return IContext;
     */
    resetPageCategoryId(): IContext;
    /**
     * @method getPageCategoryUri
     * @group
     * @desc
     * @return string;
     */
    getPageCategoryUri(): string;
    /**
     * @method setPageCategoryUri
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageCategoryUri(value: string): IContext;
    /**
     * @method resetPageCategoryUri
     * @group
     * @desc
     * @return IContext;
     */
    resetPageCategoryUri(): IContext;
    /**
     * @method getPageCcid
     * @group
     * @desc
     * @return string;
     */
    getPageCcid(): string;
    /**
     * @method setPageCcid
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageCcid(value: string): IContext;
    /**
     * @method resetPageCcid
     * @group
     * @desc
     * @return IContext;
     */
    resetPageCcid(): IContext;
    /**
     * @method getPageContainerId
     * @group
     * @desc
     * @return string;
     */
    getPageContainerId(): string;
    /**
     * @method setPageContainerId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageContainerId(value: string): IContext;
    /**
     * @method resetPageContainerId
     * @group
     * @desc
     * @return IContext;
     */
    resetPageContainerId(): IContext;
    /**
     * @method getPageLocaleCountry
     * @group
     * @desc
     * @return string;
     */
    getPageLocaleCountry(): string;
    /**
     * @method setPageLocaleCountry
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageLocaleCountry(value: string): IContext;
    /**
     * @method resetPageLocaleCountry
     * @group
     * @desc
     * @return IContext;
     */
    resetPageLocaleCountry(): IContext;
    /**
     * @method getPageLocaleCurrency
     * @group
     * @desc
     * @return string;
     */
    getPageLocaleCurrency(): string;
    /**
     * @method setPageLocaleCurrency
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageLocaleCurrency(value: string): IContext;
    /**
     * @method resetPageLocaleCurrency
     * @group
     * @desc
     * @return IContext;
     */
    resetPageLocaleCurrency(): IContext;
    /**
     * @method getPageLocaleLanguage
     * @group
     * @desc
     * @return string;
     */
    getPageLocaleLanguage(): string;
    /**
     * @method setPageLocaleLanguage
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageLocaleLanguage(value: string): IContext;
    /**
     * @method resetPageLocaleLanguage
     * @group
     * @desc
     * @return IContext;
     */
    resetPageLocaleLanguage(): IContext;
    /**
     * @method getPageProductGroups
     * @group
     * @desc
     * @return Array<string>;
     */
    getPageProductGroups(): Array<string>;
    /**
     * @method setPageProductGroups
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setPageProductGroups(value: Array<string>): IContext;
    /**
     * @method resetPageProductGroups
     * @group
     * @desc
     * @return IContext;
     */
    resetPageProductGroups(): IContext;
    /**
     * @method addPageProductGroup
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addPageProductGroup(value: string): IContext;
    /**
     * @method getPageReferrer
     * @group
     * @desc
     * @return string;
     */
    getPageReferrer(): string;
    /**
     * @method setPageReferrer
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageReferrer(value: string): IContext;
    /**
     * @method resetPageReferrer
     * @group
     * @desc
     * @return IContext;
     */
    resetPageReferrer(): IContext;
    /**
     * @method getPageSkus
     * @group
     * @desc
     * @return Array<string>;
     */
    getPageSkus(): Array<string>;
    /**
     * @method setPageSkus
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setPageSkus(value: Array<string>): IContext;
    /**
     * @method resetPageSkus
     * @group
     * @desc
     * @return IContext;
     */
    resetPageSkus(): IContext;
    /**
     * @method addPageSku
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addPageSku(value: string): IContext;
    /**
     * @method removePageSku
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removePageSku(value: string, filter?: (v: any) => boolean): IContext;
    /**
     * @method getPageTitle
     * @group
     * @desc
     * @return string;
     */
    getPageTitle(): string;
    /**
     * @method setPageTitle
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageTitle(value: string): IContext;
    /**
     * @method resetPageTitle
     * @group
     * @desc
     * @return IContext;
     */
    resetPageTitle(): IContext;
    /**
     * @method getPageUri
     * @group
     * @desc
     * @return string;
     */
    getPageUri(): string;
    /**
     * @method setPageUri
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setPageUri(value: string): IContext;
    /**
     * @method resetPageUri
     * @group
     * @desc
     * @return IContext;
     */
    resetPageUri(): IContext;
    /**
     * @method getStore
     * @group
     * @desc
     * @return ContextStore;
     */
    getStore(): ContextStore;
    /**
     * @method setStore
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextStore
     * @desc
     * @value
     */
    setStore(value: ContextStore): IContext;
    /**
     * @method resetStore
     * @group
     * @desc
     * @return IContext;
     */
    resetStore(): IContext;
    /**
     * @method updateStore
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextStore
     * @desc
     * @value
     */
    updateStore(value: ContextStore): IContext;
    /**
     * @method getStoreGroupId
     * @group
     * @desc
     * @return string;
     */
    getStoreGroupId(): string;
    /**
     * @method setStoreGroupId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setStoreGroupId(value: string): IContext;
    /**
     * @method resetStoreGroupId
     * @group
     * @desc
     * @return IContext;
     */
    resetStoreGroupId(): IContext;
    /**
     * @method getStoreId
     * @group
     * @desc
     * @return string;
     */
    getStoreId(): string;
    /**
     * @method setStoreId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setStoreId(value: string): IContext;
    /**
     * @method resetStoreId
     * @group
     * @desc
     * @return IContext;
     */
    resetStoreId(): IContext;
    /**
     * @method getUser
     * @group
     * @desc
     * @return ContextUser;
     */
    getUser(): ContextUser;
    /**
     * @method setUser
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextUser
     * @desc
     * @value
     */
    setUser(value: ContextUser): IContext;
    /**
     * @method resetUser
     * @group
     * @desc
     * @return IContext;
     */
    resetUser(): IContext;
    /**
     * @method updateUser
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type ContextUser
     * @desc
     * @value
     */
    updateUser(value: ContextUser): IContext;
    /**
     * @method getUserEmail
     * @group
     * @desc
     * @return string;
     */
    getUserEmail(): string;
    /**
     * @method setUserEmail
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setUserEmail(value: string): IContext;
    /**
     * @method resetUserEmail
     * @group
     * @desc
     * @return IContext;
     */
    resetUserEmail(): IContext;
    /**
     * @method getUserGender
     * @group
     * @desc
     * @return string;
     */
    getUserGender(): string;
    /**
     * @method setUserGender
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setUserGender(value: string): IContext;
    /**
     * @method resetUserGender
     * @group
     * @desc
     * @return IContext;
     */
    resetUserGender(): IContext;
    /**
     * @method getUserGroups
     * @group
     * @desc
     * @return Array<string>;
     */
    getUserGroups(): Array<string>;
    /**
     * @method setUserGroups
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setUserGroups(value: Array<string>): IContext;
    /**
     * @method resetUserGroups
     * @group
     * @desc
     * @return IContext;
     */
    resetUserGroups(): IContext;
    /**
     * @method addUserGroup
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addUserGroup(value: string): IContext;
    /**
     * @method removeUserGroup
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removeUserGroup(value: string, filter?: (v: any) => boolean): IContext;
    /**
     * @method getUserId
     * @group
     * @desc
     * @return string;
     */
    getUserId(): string;
    /**
     * @method setUserId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setUserId(value: string): IContext;
    /**
     * @method resetUserId
     * @group
     * @desc
     * @return IContext;
     */
    resetUserId(): IContext;
    /**
     * @method getUserNewUser
     * @group
     * @desc
     * @return boolean;
     */
    getUserNewUser(): boolean;
    /**
     * @method setUserNewUser
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type boolean
     * @desc
     * @value
     */
    setUserNewUser(value: boolean): IContext;
    /**
     * @method resetUserNewUser
     * @group
     * @desc
     * @return IContext;
     */
    resetUserNewUser(): IContext;
    /**
     * @method getUserOrderIds
     * @group
     * @desc
     * @return Array<string>;
     */
    getUserOrderIds(): Array<string>;
    /**
     * @method setUserOrderIds
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type Array<string>
     * @desc
     * @value
     */
    setUserOrderIds(value: Array<string>): IContext;
    /**
     * @method resetUserOrderIds
     * @group
     * @desc
     * @return IContext;
     */
    resetUserOrderIds(): IContext;
    /**
     * @method addUserOrderId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    addUserOrderId(value: string): IContext;
    /**
     * @method removeUserOrderId
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     * @key filter?
     * @type
     * @desc
     * @value
     */
    removeUserOrderId(value: string, filter?: (v: any) => boolean): IContext;
    /**
     * @method getUserUuid
     * @group
     * @desc
     * @return string;
     */
    getUserUuid(): string;
    /**
     * @method setUserUuid
     * @group
     * @desc
     * @return IContext;
     * @key value
     * @type string
     * @desc
     * @value
     */
    setUserUuid(value: string): IContext;
  
    /**
     * @method resetUserUuid
     * @group
     * @desc
     * @return IContext;
     */
    resetUserUuid(): IContext;
  }
  