import { Locator, Page, expect } from '@playwright/test';

export class Locators {
  LocatorsPOM: Page;

  btn_menu: Locator;
  header_anyCoffee: Locator;
  element_details: Locator;
  form_dialog: Locator;
  btn_yes: Locator;
  btn_no: Locator;
  element_total: Locator;

  btn_cart: Locator;
  cart_preview: Locator;
  list_Item: Locator;
  column_unit: Locator;
  unitController: Locator;
  btn_addCoffee: Locator;
  btn_removeCoffee: Locator;
  current_Number: Locator;
  btn_gitHub: Locator;
  
  modal_payment: Locator;
  modal_title: Locator;
  field_name: Locator;
  field_email: Locator;
  checkbox_promotional: Locator;
  btn_submit: Locator;
  btn_close: Locator;
  alert: Locator;

  constructor(page: Page) {
    this.LocatorsPOM = page;
    
    this.btn_menu = page.locator(`[aria-label="Menu page"]`);
    this.header_anyCoffee = page.locator(`li h4`);
    this.element_details = page.locator(``);
    this.form_dialog = page.locator(`form[method="dialog"]`);
    this.btn_yes = this.form_dialog.locator('button').nth(0);
    this.btn_no = this.form_dialog.locator('button').nth(1);
    this.element_total = page.locator(`[data-test="checkout"]`);

    this.btn_cart = page.locator(`[aria-label="Cart page"]`);
    this.cart_preview  = page.locator(`.cart-preview`);
    this.list_Item = page.locator(`.list-item`);
    this.column_unit = this.cart_preview.locator(`.unit-desc`);
    this.unitController = page.locator(`.unit-controller`);
    this.btn_addCoffee = this.unitController.locator(`[type="button"]`).nth(0);
    this.btn_removeCoffee = this.unitController.locator(`[type="button"]`).nth(1);
    this.current_Number = page.locator(`span.unit-desc`);
    this.btn_gitHub = page.locator(`[aria-label="GitHub page"]`);

    this.modal_payment = page.locator(`.modal`);
    this.modal_title = this.modal_payment.locator(`h1`);
    this.field_name = this.modal_payment.locator(`input[name="name"]`);
    this.field_email = this.modal_payment.locator(`input[name="email"]`);
    this.checkbox_promotional = this.modal_payment.locator(`[aria-label="Promotion agreement"]`);
    this.btn_submit = this.modal_payment.locator(`button[type="submit"]`);
    this.btn_close = this.modal_payment.locator(`.close`);
    this.alert = page.locator('.success');
  }

  async checkDialog(message: string) {
    this.LocatorsPOM.on('dialog', async (dialog) => {
      expect(dialog.message()).toEqual(message);
      await dialog.accept();
    });
  }

  async reloadPage() {
    await this.LocatorsPOM.reload();
  }

  async openMenuPage() {
    await this.LocatorsPOM.goto('https://coffee-cart.app/');
    await expect(this.element_total).toBeVisible();
  }

  async fillPaymentForm(name: string, email: string) {
    await this.field_name.fill(name);
    await this.field_email.fill(email);
  }

  async addCoffeeToCart(titleCoffee: string, numberOfClicks: number) {
    const coffeeCard = this.LocatorsPOM.locator(`[aria-label="${titleCoffee}"]`);
    for (let i = 0; i < numberOfClicks; i++) {
      await coffeeCard.click();
    }
  }

  async checkTotalPrice(price: string) {
    const currentPrice = `Total: $${price}`;
    await expect(this.element_total).toContainText(currentPrice);
  }

  async changePriceInCartPreview(locatorBtn: Locator, number: number, titleCoffee: string) {
    const coffee_InCartPreview = this.list_Item.locator(`//span[text()="${titleCoffee}"]`);
    const text = ` x ${number}`;
    await this.element_total.hover();
    await locatorBtn.click();
    await expect(this.current_Number).toHaveText(text);
    await expect(coffee_InCartPreview).toBeVisible();
  }

  async noteForTime(currTime: string) {
    //const currHour = currTime.split(':')[0]; // parse 'currTime' if need
    const hour = Number(currTime);
    const messageMorning = 'Доброго ранку!';
    const messageDay = 'Доброго дня!';
    const messageEvening = 'Доброго вечора!';
    if (hour < 12) {
      console.log(messageMorning);
    }
    if (hour >= 12 && hour <= 18) {
      console.log(messageDay);
    }
    if (hour > 18) {
      console.log(messageEvening);
    }
  }
}