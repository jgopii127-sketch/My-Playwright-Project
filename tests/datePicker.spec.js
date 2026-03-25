const {test,expect} = require('@playwright/test');

// test('Handle Date Picker', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // 1) Select the date from date picker  
//     await page.locator('#datepicker').click();
//     await page.locator('//span[@class="ui-datepicker-year"]').textContent('2026');
//     await page.locator('//span[@class="ui-datepicker-month"]').textContent('March');
//     await page.locator('//a[text()="10"]').click();

//     await page.pause(); 

// });


// // Task : 1) Select the date from date picker using selectOption method.

// test('Date Picker', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // 1) Select the date from date picker  
//     await page.locator('//input[@id="txtDate"]').click();
//     await page.locator('//select[@class="ui-datepicker-year"]').textContent('2026');
//     await page.locator('//select[@class="ui-datepicker-month"]').textContent('Mar');
//     await page.locator('//a[text()="10"]').click();

//     await page.pause(); 
 

// });

// // Task : 2) Select the date from date picker using selectOption method.

// test('Date Picker2', async ({ page }) => {
// await page.goto('https://testautomationpractice.blogspot.com/');
// await page.getByPlaceholder('Start Date').fill('2026-04-03');
// await page.getByPlaceholder('End Date').fill('2026-03-20');


//   await page.pause();   
// });


// Task : 3) Select the date from date picker using looping method.

// test('Date Picker 2 - Dynamic', async ({ page }) => {

//   await page.goto('https://testautomationpractice.blogspot.com/');

//   const day = '15';
//   const month = 'Mar';   // visible text
//   const year = '2026';

//   await page.locator('#txtDate').click();

//   await page.locator('.ui-datepicker-month').selectOption({ label: month });
//   await page.locator('.ui-datepicker-year').selectOption(year);

//   const dates = await page.$$('.ui-state-default');

//   for (const dt of dates) {
//     if ((await dt.textContent()) === day) {
//       await dt.click();
//       break;
//     }
//   }

//   await page.pause();
// });


// Task 4) Select the date from date picker using looping method with dynamic locators.


// test('Date Picker 3 - Dynamic Locator', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');

//   const startDate = '2026-04-03';
//   const endDate = '2026-04-20';

//   const fields = [
//     { placeholder: 'Start Date', value: startDate },
//     { placeholder: 'End Date', value: endDate }
//   ];

//   for (const field of fields) {
//     await page.getByPlaceholder(field.placeholder).fill(field.value);
//   }

//   for (const field of fields) {
//     await expect(page.getByPlaceholder(field.placeholder)).toHaveValue(field.value);
//   }

//   await page.pause();
// });

