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
    
    this.header = page.locator(`//nav[@data-qa-id="site-header"]`);
    this.icon_conduit = this.header.locator(`//*[normalize-space(text())='conduit']`);
    this.header_home = this.header.locator(`//*[@href="/"]`);
    this.header_signIn = this.header.locator(`//*[@href="/login"]`);
    this.header_signUp = this.header.locator(`//*[@href="/register"]`);

    this.link_needAccount = page.locator(`//*[normalize-space(text())='Need an account?']`);
    this.link_haveAccount = page.locator(`//*[normalize-space(text())='Have an account?']`);
    this.field_userName = page.locator(`//input[@placeholder="Username"]`);
    this.field_email = page.locator(`//input[@placeholder="Email"]`);
    this.field_password = page.locator(`//input[@placeholder="Password"]`);
    this.btn_signIn = page.locator(`//button[normalize-space(text())='Sign in']`);
    this.btn_signUp = page.locator(`//button[normalize-space(text())='Sign up']`);
  
    this.link_newArticle = this.header.locator(`//*[@href="/editor"]`);
    this.field_articleTitle = page.locator(`//*[@data-qa-id="editor-title"]`);
    this.field_articleDescription = page.locator(`//*[@data-qa-id="editor-description"]`);
    this.field_articleTextarea = page.locator(`//textarea[contains(@placeholder,"Write your article")]`);
    //this.field_articleTextarea = page.locator(`//textarea[@placeholder="Write your article"]`);
    this.field_articleTag = page.locator(`//*[@data-qa-id="editor-tags"]`);
    this.btn_articlePublish = page.locator(`//*[@data-qa-id="editor-publish"]`);

    this.page_article = page.locator(`//*[@data-qa-id="article-page"]`);
    this.articleTitle = page.locator(`//*[@data-qa-id="article-title"]`);
    this.articleTextarea = page.locator(`//*[@data-qa-id="article-body"]/p`);

    this.tab_articleGeneral = page.locator(`//*[@data-qa-type="feed-tab"]`);
    this.tab_feedYour = this.tab_articleGeneral.locator(`//*[normalize-space(text())='Your Feed']`);
    this.tab_feedGlobal = this.tab_articleGeneral.locator(`//*[normalize-space(text())='Global Feed']`);
    this.section_tags = page.locator(`//p[normalize-space(text())='Popular Tags']`);
    // dinamic tags: this.section_tags.locator(`/following-sibling::div//a[@href='/tag/demo']`);
  }
  
  async setPause() {
    await this.LocatorsPOM.pause();
  }

  async gotoSignInPage() {
    await this.LocatorsPOM.goto('https://demo.learnwebdriverio.com/login');
    await expect(this.field_email).toBeVisible();
  }

  async signIn(email: string, password: string) {
    await this.gotoSignInPage();
    await this.field_email.fill(email);
    await this.field_password.fill(password);
    await this.btn_signIn.click();
    await expect(this.link_newArticle).toBeVisible();
  }

  async openNewArticlePage() {
    await this.link_newArticle.click();
    await expect(this.field_articleTitle).toBeVisible();
  }

  async createArticle(title: string, description: string, text: string, tag: string) {
    await this.field_articleTitle.fill(title);
    await this.field_articleDescription.fill(description);
    await this.field_articleTextarea.fill(text);
    await this.field_articleTag.fill(tag);
    await this.btn_articlePublish.click();
    await expect(this.tab_feedYour).toBeVisible();
  }

  async checkArticle(title: string, text: string) {
    await expect(this.articleTitle).toContainText(title);
    await expect(this.articleTextarea).toContainText(text);
    const pupil = 'Anastasiya';
  console.log('${pupil} Came to school');
  }
}