const {test,expect} = require('@playwright/test');

test('home page test', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

// login page test
  
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('button[onclick="logIn()"]').click();

  await page.waitForTimeout(2000);

//   Home page test 

  const title = page.locator("//a[text()='CATEGORIES']");
  await expect(title).toHaveText('CATEGORIES');

// logout page test
    await page.locator('//a[@id="logout2"]').click();

});

test('another validation', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

// login page test
  
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('button[onclick="logIn()"]').click();

  await page.waitForTimeout(2000);

//   Home page test 

  const title = page.locator('//a[text()="Welcome pavanol"]');
  await expect(title).toHaveText('Welcome pavanol');

// logout page test
    await page.locator('//a[@id="logout2"]').click();

});

