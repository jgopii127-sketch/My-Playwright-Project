const { test, expect } = require('@playwright/test');

const logindata = require('../test-data/loginSauceData.json');

for (const data of logindata) {

  test(`login test with username: ${data.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);

    await page.locator('#login-button').click();

    if (data.username === 'standard_user' && data.password === 'secret_sauce') {

      // ✅ wait for success page
      await expect(page.locator('.inventory_list')).toBeVisible({ timeout: 5000 });

    } else {

      // ✅ wait for error message
      await expect(page.locator('[data-test="error"]')).toBeVisible({ timeout: 5000 });

    }

  });

}