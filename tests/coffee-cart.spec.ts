import { test, expect } from '@playwright/test';
import { Locators } from '../pom/locators-coffee-pom';

const validName = 'test-1';
const validEmail = `${validName}@gmailcom`;
const inValidEmail = `${validName}gmailcom`;
const coffeeType1 = 'Espresso';
const coffeeType2 = 'Espresso Con Panna';
const coffeeType3 = 'Cappuccino';
const successText = 'Thanks for your purchase. Please check your email for payment.';

let LocatorsPOM: any;

test.beforeEach(async ({page}) => {
  LocatorsPOM = new Locators(page);
  await LocatorsPOM.openMenuPage();
});

test.describe(`Positive: Can by a coffee`, () => {
  test.beforeEach(async () => {
    await LocatorsPOM.addCoffeeToCart(coffeeType1);
    await LocatorsPOM.element_total.click();
    await expect(LocatorsPOM.field_name).toBeVisible();
    await LocatorsPOM.fillPaymentForm(validName, validEmail);
  });

  test('from the "menu" page with all data', async () => {
    await LocatorsPOM.checkbox_promotional.click();
    await LocatorsPOM.btn_submit.click();
    await expect(LocatorsPOM.alert).toContainText(successText);
  });

  test('without the "Promotion" checkbox', async () => {
    await LocatorsPOM.btn_submit.click();
    await expect(LocatorsPOM.alert).toContainText(successText);
  });

  test.skip('from the "cart" page', async () => {
    // to do
  });
});

test.describe(`Positive: Check coffee types`, () => {
  test.skip(`The "${coffeeType1}" coffee is available. Price is correct`, async () => {
    // to do
  });
});

test.describe.skip(`Positive: Manage the cart`, () => {// to do
  test('Can add coffee to the cart by clicking on a coffee card (left mouse button)', async () => {
  });

  test('Can add coffee to the cart by the dialog modal (right mouse button)', async () => {
  });

  test('Can remove coffee from the cart', async () => {
  });

  test('Can clearing the cart', async () => {
  });
});

test.describe(`Positive: Manage the price`, () => {
  test('increase amount of cup from the "menu" page', async () => {
    await LocatorsPOM.addCoffeeToCart(coffeeType2, 1);
    await LocatorsPOM.changePriceInCartPreview(LocatorsPOM.btn_addCoffee, 2, coffeeType2);
    await LocatorsPOM.checkTotalPrice('28.00');
  });

  test('decrease amount of cup from the "menu" page', async () => {
    await LocatorsPOM.addCoffeeToCart(coffeeType3, 2);
    await LocatorsPOM.changePriceInCartPreview(LocatorsPOM.btn_removeCoffee, 1, coffeeType3);
    await LocatorsPOM.checkTotalPrice('19.00');
  });

  test.skip('add extra cup from the "menu" page', async () => {// use 3 or more click to one cup
  });

  test.skip('increase amount of cup from the "cart" page', async () => {
  });

  test.skip('decrease amount of cup from the "cart" page', async () => {
  });
});

test.describe(`Positive: Manage the 'lucky cup'`, () => {
  test.skip('', async () => {
  });
});

test.describe(`Negative: Unable to by coffee:`, () => {
  test.beforeEach(async () => {
    await LocatorsPOM.addCoffeeToCart(coffeeType1);
    await LocatorsPOM.element_total.click();
    await expect(LocatorsPOM.field_name).toBeVisible();
  });

  test('without data', async () => {
    await LocatorsPOM.fillPaymentForm('', '');
    await LocatorsPOM.checkbox_promotional.click();
    await LocatorsPOM.btn_submit.click();
    //await LocatorsPOM.checkDialog('111');// incorrect
    await expect(LocatorsPOM.field_name).toBeVisible();
  });

  test('with invalid email', async () => {
    await LocatorsPOM.fillPaymentForm(validName, inValidEmail);
    await LocatorsPOM.checkbox_promotional.click();
    await LocatorsPOM.btn_submit.click();
    //await LocatorsPOM.checkDialog('111');// incorrect
    await expect(LocatorsPOM.field_name).toBeVisible();
  });

  test('with a blank cart', async () => {
    await LocatorsPOM.reloadPage();
    await LocatorsPOM.checkTotalPrice('0.00');
    await LocatorsPOM.element_total.click();
    await expect(LocatorsPOM.field_name).toBeVisible();
    await LocatorsPOM.fillPaymentForm(validName, validEmail);
    await LocatorsPOM.checkbox_promotional.click();
    await LocatorsPOM.btn_submit.click();
    await expect(LocatorsPOM.alert).not.toContainText(successText);// defect is here
  });
});
/*
[placeholder="Username"]
[placeholder="Email"]
input[type="password"]
//button[normalize-space(text())='Sign up']
*/
