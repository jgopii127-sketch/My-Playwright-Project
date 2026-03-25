// const {test, expect} = require('@playwright/test');
// test('Hotel booking', async ({page}) => {

//     await page.goto('https://nichethyself.com/tourism/');

//     const page1promises = page.waitForEvent('popup');

//     await page.locator("//a[text()='Customized tours']").click();

//     const page1= await page1promises;

//     await page1.locator('#days').selectOption('Home Stay' );

//     await page1.locator('//label[text()="England"]').click();

//     await page1.screenshot({path: 'tests/screenshot/Hotel.png', fullPage:true});

//     await page.waitForTimeout(3000);


// });


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://nichethyself.com/tourism/');
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Customized tours' }).click();
//   const page1 = await page1Promise;
//   await page1.locator('#days').selectOption('Home Stay');
//   await page1.getByRole('checkbox', { name: 'England' }).check();
// });