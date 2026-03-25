const { test, expect } = require('@playwright/test');

test('Handle Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select the option from dropdown

    // await page.locator('#country').selectOption({ label: 'Canada' }); // By label in visible text
    // await page.locator('#country').selectOption('Brazil'); // visible text
    // await page.locator('#country').selectOption({ value: 'uk' }); // by using value
    // await page.locator('#country').selectOption({ index: 9 }); // by using index
    // await page.selectOption('#country', 'China'); // by text


    // Assertions

    // 1) Check number of options from the dropdown - method 1

    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);


    // 2) Check number of options from the dropdown - method 2

    const options1 = await page.$$('#country option');
    console.log("Number of Options : ", options1.length);
    await expect(options1.length).toBe(10);


    // 3) Check the presence of options in the dropdown - method 1

    const content = await page.locator('#country').textContent();
    await expect(content.includes('Australia')).toBeTruthy();


    await page.waitForTimeout(2000);

}); 