import { test } from '@playwright/test';
import { FunctionsIf } from '../pom/if-functions';

const testTime = '12';

let FunctionsIfPOM: any;

test.beforeEach(async ({page}) => {
  FunctionsIfPOM = new FunctionsIf(page);
});

test('Use hours', async () => {
  await FunctionsIfPOM.noteForTime(testTime);
});