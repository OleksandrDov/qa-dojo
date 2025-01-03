import { Locator, Page, expect } from '@playwright/test';

export class Locators {
  LocatorsPOM: Page;

  header: Locator;
  block_slides: Locator;
  slide_any: Locator;
  btn_slidePreviously: Locator;
  btn_slideNext: Locator;

  constructor(page: Page) {
    this.LocatorsPOM = page;

    this.header = page.locator(`[class="header__logo"]`).nth(0);
    this.block_slides = page.locator(`div.categories-slider`);
    this.slide_any = page.locator(`[data-banner-name]`);
    this.btn_slidePreviously = page.locator(`[aria-label="Previous slide"]`);
    this.btn_slideNext = page.locator(`[aria-label="Next slide"]`);
  }

  async gotoHomePage() {
    await this.LocatorsPOM.goto(`https://telemart.ua/`);
    await expect(this.header).toBeVisible();
  }

  async slidersCount(expectedCount: number) {
    await expect(this.slide_any.first()).toBeVisible();
    //const slidesCount = await this.slide_any.count();// or this way
    const slides = await this.slide_any.all();
    const slidesCount = slides.length;
    if (slides.length >= expectedCount) {
      return true;
    } else {
      return false;
    }
  }

  async clickSliderBtn() {
    //for (let i = 0; i < clickNumber; i++) {
      await this.btn_slideNext.click();
      await this.LocatorsPOM.waitForTimeout(200);
    //}
  }

  async clickToPosition(x: number, y: number) {
    await this.LocatorsPOM.mouse.click(x, y);
  }

  async clickTargetSlider(textSlide: string) {
    const targetSlide = this.LocatorsPOM.locator(`a[data-banner-name*="${textSlide}"]`).nth(1);
    if (await targetSlide.isVisible()) {
      await targetSlide.click();
    } else {
      await this.clickSliderBtn();
      await this.clickTargetSlider(textSlide);
    }
  }
}