import { DEVICES } from '../appearance/devices.model';
import { SECTIONS } from '../appearance/sections.model';
import { createModel } from '../model';
import model from './rfkRequest.model';
import { BatchItem, IRfkRequest, Props } from './types/rfkRequest';

const RfkRequestModel = createModel<Props, IRfkRequest>(model);

/** OBJT RfkRequest
 * DESC Object used to make data requests for search and recommendation. 
 * Use the methods in the object to build request. 
 */
export default class RfkRequest extends RfkRequestModel {
  protected rfkId: string = '';
  /** 
   * @method getRfkId
   * @desc Get the RfkId of widget
   * @return string
   */
  getRfkId() {
    return this.rfkId;
  }
  /** 
   * @method setRfkId
   * @desc Sets the RfkId of widget
   * @return RfkRequest
   * @key rfkId
   * @type string
   * @desc Required. 
   * RfkId of widget.
   * @value
   */
  setRfkId(rfkId: string): RfkRequest {
    this.rfkId = rfkId;
    this.addBatchItem({ widget: { rfkid: rfkId } });
    return this;
  }
  /** 
   * @method getWidgetInfo
   * @desc ***MISSING***
   * @return any
   * @key widgetId
   * @type string
   * @desc Required. 
   * RfkId of widget.
   * @value
   */
  getWidgetInfo(widgetId: string): any {
    return this.getBatchItems()?.find(({ widget }: { widget: any }) => widget.rfkid && widget.rfkid === widgetId);
  }
  /** 
   * @method addWidgetBatchItem
   * @desc Adds a widget batch Item ***MISSING where do I get these values***
   * @return RfkRequest
   * @key widgetId
   * @type string
   * @desc Required. 
   * RfkId of widget.
   * @value
   * @key config
   * @type object
   * @desc An object with the properties of BatchItem except for those in widget.
   * @value
   */
  addWidgetBatchItem(widgetId: string, config?: Omit<BatchItem, 'widget'>): RfkRequest {
    this.addBatchItem({ ...config, widget: { rfkid: widgetId } });
    return this;
  }
  /** 
   * @method addAllWidgetsBatchItem
   * @desc Adds all widget batch Item ***MISSING where do I get these values***
   * @return RfkRequest
   * @key config
   * @type object
   * @desc An object with the properties of BatchItem except for those in widget.
   * @value
   */
  addAllWidgetsBatchItem(config?: Omit<BatchItem, 'widget'>): RfkRequest {
    this.addBatchItem({ ...config, widget: { all: true } });
    return this;
  }
  /** 
   * @method addAllAppearanceTemplatesDevices
   * @desc Adds all appearance templates for devices ***MISSING what is this***
   * @return RfkRequest
   */
  addAllAppearanceTemplatesDevices(): RfkRequest {
    DEVICES.forEach((device) => this.addAppearanceTemplatesDevice(device));
    return this;
  }
  /** 
   * @method addAllAppearanceTemplatesSections
   * @desc Adds all appearance templates for sections ***MISSING what is this***
   * @return RfkRequest
   */
  addAllAppearanceTemplatesSections(): RfkRequest {
    SECTIONS.forEach((section) => this.addAppearanceTemplatesSection(section));
    return this;
  }
  /** 
   * @method addAllAppearanceVariablesSections
   * @desc Adds all appearance variables for sections ***MISSING what is this***
   * @return RfkRequest
   */
  addAllAppearanceVariablesSections(): RfkRequest {
    SECTIONS.forEach((section) => this.addAppearanceVariablesSection(section));
    return this;
  }
}