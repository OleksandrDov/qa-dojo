import { test, expect } from '@playwright/test';
import { Locators } from '../pom/hw-8-pom';

let LocatorsPOM: any;

test.beforeEach(async ({page}) => {
  LocatorsPOM = new Locators(page);
  await LocatorsPOM.gotoHomePage();
});

test('The rotator contains more than 2 elements', async () => {
  //await LocatorsPOM.
});

test('A user can open a page via the rotator', async () => {
  //await LocatorsPOM.
//  - перевірити що в каруселі знаходиться більше 2х елементів (використовуйте locator().all() і length)
//  - натиснути 2 рази на scroll каруселі 
//  - клікнути на контент каруселі 
//  - перевірити що навігація успішна  (подумайте як) 
//  - Створити PR з тестом
});