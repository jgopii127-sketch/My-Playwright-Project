const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    // 1) toHaveURL -> Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2) toHaveTitle -> Page has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3) toBeVisible -> Element is Visible or not
    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    // 4) toBeEnabled -> Element is Enabled
    const searchBox = await page.locator('//input[@id="small-searchterms"]');
    await expect(searchBox).toBeEnabled();

    // 5) toBeChecked -> Radio/CheckBox is checked
    // Radio Button
    const radioButton = await page.locator('#gender-female');
    await radioButton.click();
    await expect(radioButton).toBeChecked();

    // const { test, expect } = require('@playwright/test');

    // test('Assertions', async ({ page }) => {
  // Radio Button
//   const radioButton = await page.locator('#gender-female');
  await radioButton.check();
  await page.waitForTimeout(3000);
  await expect(radioButton).toBeChecked();

  // CheckBox
  const checkBox = await page.locator('//input[contains(@id, "_IsActive")]');
  await expect(checkBox).toBeChecked();

  // To Have Text
  const text = await page.locator('.page-title h1');
  await expect(text).toHaveText('Register'); // Full Text

  // To Contain Text
  await expect(page.locator('.page-title h1')).toContainText('Reg'); // Partial Text

  // To Have Value
  const firstName = await page.locator('//input[@id="FirstName"]');
  await firstName.fill('Riyaz Hussain');
  await page.waitForTimeout(2000);
  await expect(firstName).toHaveValue('Riyaz Hussain');

  // To Have Count
  const option = await page.locator('#customerCurrency option');
  await expect(option).toHaveCount(2);
});
