const { test, expect } = require('@playwright/test');

let page;
test.beforeEach(async ({ browser }) => {
page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('button[onclick="logIn()"]').click();

  await page.waitForTimeout(2000);

});

test.afterEach(async () => {

  await page.locator('#logout2').click();

});


test('home page test', async () => {

  const title = page.locator("//a[text()='CATEGORIES']");
  await expect(title).toHaveText('CATEGORIES');

});


test('another validation', async () => {

  const title = page.locator('//a[text()="Welcome pavanol"]');
  await expect(title).toHaveText('Welcome pavanol');

});