const { test, expect } = require('@playwright/test');

// import { test, expect } from '@playwright/test';

test('Locator', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  // Click on Login Button -> CSS
  await page.locator('#login2').click();

  // await page.click('#login2');

  // Provide Username -> CSS
  await page.waitForTimeout(2000);
  // await page.locator('[id="loginusername"]').type('pavanol');
  await page.locator('[id="loginusername"]').fill('pavanol');

  // await page.fill('[id="loginusername"]', 'pavanol');

  // Provide Password -> XPath
  // await page.locator('//input[@id="loginpassword"]').fill('test@123');

  await page.waitForTimeout(2000);
  await page.locator('[id="loginpassword"]').fill('test@123');

  // Click on Login Button -> XPath
  // await page.locator('//button[text()="Log in"]').click();

  await page.waitForTimeout(2000);
  await page.click('//button[text()="Log in"]');
    
  // Verify the Logout link presence
  await page.waitForTimeout(2000);
  const logoutLink = await page.locator('//a[contains(@id,"logout")]');

  await expect(logoutLink).toBeVisible();

  await page.close();
});

