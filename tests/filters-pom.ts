import { Locator, Page } from '@playwright/test';
import { BasicFunctions, selectors } from './basic-functions-ui';

export class Filters {
  FiltersPOM: Page;
  BasicFunctionsPOM: BasicFunctions;

  btn_svg: Locator;
  selector_column_based: Locator;
  selector_option: Locator;
  selector_column_additional: Locator;
  text_area: Locator;
  field_input: Locator;
  field_search: Locator;

  constructor(page: Page) {
    this.FiltersPOM = page;
    this.BasicFunctionsPOM = new BasicFunctions(page);
// Filters section
    this.btn_svg = page.locator(`svg[class='css-8mmkcg']`);
    this.selector_column_based = this.btn_svg.nth(0);// use only with line_rule_CSS
    this.selector_option = this.btn_svg.nth(1);
    this.selector_column_additional = this.btn_svg.nth(2);
    this.text_area = page.locator(selectors.textArea);
    this.field_input = page.locator(selectors.fieldInput);
    this.field_search = page.locator(`div[id="SELECTOR_MENU_ID"]`).locator(this.field_input);
  }

  async selectBaseColumn(ruleNumber: number, columnTitle: string) {
    await this.BasicFunctionsPOM.setFilterElement(ruleNumber, this.selector_column_based, this.field_search, columnTitle);
  }

  async selectOption(ruleNumber: number, optionTitle: string) {
    const atLeastOneError = await this.BasicFunctionsPOM.setFilterElement(ruleNumber, this.selector_option, this.field_search, optionTitle);
    return atLeastOneError;
  }
  
  async setNewRule(columnTitle: string, object: {
    option: string, 
    value?: string, 
    comparedColumn?: string, 
    daysValue?: string, 
    periods?: string[]
    }) {
    await this.selectBaseColumn(0, columnTitle);
    await this.selectOption(0, object.option);
    if (object.value != undefined) {
      await this.BasicFunctionsPOM.enterFilterValue(0, object.value);
    }
    if (object.comparedColumn != undefined) {
      await this.BasicFunctionsPOM.setFilterElement(0, this.selector_column_additional, this.field_search, object.comparedColumn);
    }
    if (object.daysValue != undefined) {
      await this.BasicFunctionsPOM.enterFilterValue(0, object.daysValue);
    }
  }

  async updateRule(ruleNumber: number, columnTitle: string, object: {
    option: string, 
    value?: string, 
    comparedColumn?: string, 
    daysValue?: string, 
    periodStart?: string,
    periodEnd?: string
    }) {
    await this.selectBaseColumn(ruleNumber, columnTitle);
    await this.selectOption(ruleNumber, object.option);
    if (object.value != undefined) {
      await this.BasicFunctionsPOM.enterFilterValue(ruleNumber, object.value);
    }
    if (object.comparedColumn != undefined) {
      await this.BasicFunctionsPOM.setFilterElement(ruleNumber, this.selector_column_additional, this.field_search, object.comparedColumn);
    }
    if (object.daysValue != undefined) {
      await this.BasicFunctionsPOM.enterFilterValue(ruleNumber, object.daysValue);
    }
  }

  async checkRule(ruleNumber: number, columnTitle: string, object: {
    option: string, 
    value?: string, 
    comparedColumn?: string, 
    daysValue?: string, 
    periodStart?: string,
    periodEnd?: string
    }) {
    await this.BasicFunctionsPOM.checkFilterElement(ruleNumber, columnTitle);
    await this.BasicFunctionsPOM.checkFilterElement(ruleNumber, object.option);
    if (object.value != undefined) {
      await this.BasicFunctionsPOM.checkFilterValue(ruleNumber, object.value);
    }
    if (object.comparedColumn != undefined) {
      await this.BasicFunctionsPOM.checkFilterElement(ruleNumber, object.comparedColumn);
    }
    if (object.daysValue != undefined) {
      await this.BasicFunctionsPOM.checkFilterValue(ruleNumber, object.daysValue);
    }
  }
}