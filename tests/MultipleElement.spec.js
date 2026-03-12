// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   await page.waitForSelector('//p[@class="card-text"]');

//   const descriptions = await page.$$('p.card-text');
//   const prices = await page.$$('#tbodyid h5');

//   for (let i = 0; i < descriptions.length; i++) {

//     const descriptionText = await descriptions[i].textContent();
//     const priceText = await prices[i].textContent();

//     console.log(descriptionText);
//     console.log(priceText);

//   }

// });

// ---------------------------------------------------------------------------------

// Task:2

// Task is  : i need to print price in terminal. 

// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   const links = await page.$$('h5');

//   // for(const link of links) {

//   //   const linkText = await link.textContent();
//   //   console.log(linkText);
//   // }

//   await page.waitForSelector('//div[@id="tbodyid"]/div//h5');
//   const products = await page.$$('//div[@id="tbodyid"]/div//h5');

//   for (const product of products) {

//     const productName = await product.textContent();
//     console.log(productName);

//   }

// });

// ------------------------------------------------------------------------------------------

// ii.i need to print the description in terminal.

// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   const links = await page.$$('p');

//   // for(const link of links) {

//   //   const linkText = await link.textContent();
//   //   console.log(linkText);
//   // }

//   await page.waitForSelector('//div[@id="tbodyid"]/div//p');
//   const products = await page.$$('//div[@id="tbodyid"]/div//p');

//   for (const product of products) {

//     const productName = await product.textContent();
//     console.log(productName);

//   }

// });

// ----------------------------------------------------------------------------------------

