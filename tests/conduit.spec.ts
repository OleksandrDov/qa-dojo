import { test, expect } from '@playwright/test';
import { Locators } from '../pom/locators-conduit-pom';

const userName = 'Alex';
const userEmail = 'alex.test.qa@gmail.com';
const userPassword = userEmail;

const articleData = {
  title: 'Some title',
  description: 'technology & innovation',
  text: `In today's world, technology & innovation are key! 🌍✨ We must adapt to changes—embracing new ideas, learning from failures, and striving for excellence. Remember: "Success is not final; failure is not fatal!" 💪🚀`,
  tag: 'AQA'
}

let LocatorsPOM: any;

test.beforeEach(async ({page}) => {
  LocatorsPOM = new Locators(page);
  await LocatorsPOM.signIn(userEmail, userPassword);
});

test('Create a new article', async () => {
  await LocatorsPOM.openNewArticlePage();
  await LocatorsPOM.createArticle(articleData.title, articleData.description, articleData.text, articleData.tag);
  await LocatorsPOM.checkArticle(articleData.title, articleData.text);
});