import { test, expect } from '@playwright/test';
import { Locators } from '../pom/hw-8-pom';

let LocatorsPOM: any;

test.beforeEach(async ({page}) => {
  LocatorsPOM = new Locators(page);
  await LocatorsPOM.gotoHomePage();
});

// test('The rotator contains some amount of slides', async () => {
//   const results = await LocatorsPOM.slidersCount(2);
//   expect(results).toBe(true);
// });

test('A user can open a page via the rotator', async () => {
  await LocatorsPOM.clickTargetSlider('Corsair');// натиснути 2 рази на scroll каруселі?
// клікнути на контент каруселі 
// перевірити що навігація успішна (подумайте як) 
// Створити PR з тестом
});