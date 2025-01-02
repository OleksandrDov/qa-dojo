import { Locator, Page, expect } from '@playwright/test';

export class Locators {
  LocatorsPOM: Page;

  header: Locator;
  icon_conduit: Locator;
  header_home: Locator;
  header_signIn: Locator;
  header_signUp: Locator;

  link_needAccount: Locator;
  link_haveAccount: Locator;
  field_userName: Locator;
  field_email: Locator;
  field_password: Locator;
  btn_signIn: Locator;
  btn_signUp: Locator;

  link_newArticle: Locator;
  tab_articleGeneral: Locator;
  field_articleTitle: Locator;
  field_articleDescription: Locator;
  field_articleTextarea: Locator;
  field_articleTag: Locator;
  btn_articlePublish: Locator;

  page_article: Locator;
  articleTitle: Locator;
  articleTextarea: Locator;
  
  tab_feedYour: Locator;
  tab_feedGlobal: Locator;
  section_tags: Locator;

  constructor(page: Page) {
    this.LocatorsPOM = page;

    this.header = page.locator(`[class="header__logo"]`).nth(0);
  }

  async gotoHomePage() {
    await this.LocatorsPOM.goto(`https://telemart.ua/`);
    await expect(this.header).toBeVisible();
  }

  async openNewArticlePage() {
    await this.link_newArticle.click();
    await expect(this.field_articleTitle).toBeVisible();
  }
}