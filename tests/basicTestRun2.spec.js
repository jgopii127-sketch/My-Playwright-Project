const { test, expect } = require('@playwright/test');

// import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {

    await page.goto('https://www.myntra.com/');

    const pageURL = page.url();
    console.log("Page URL is : ", pageURL);

    const pageTitle =  await page.title();
    console.log("Page Title is : ", pageTitle);
    
    await expect(page).toHaveURL('https://www.myntra.com/');

    await expect(page).toHaveTitle('Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra');

    await page.waitForTimeout(3000);

    await page.close();


});

