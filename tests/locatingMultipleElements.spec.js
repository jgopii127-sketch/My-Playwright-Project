// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   const links = await page.$$('a');

//   // for(const link of links) {

//   //   const linkText = await link.textContent();
//   //   console.log(linkText);
//   // }

//   await page.waitForSelector('//div[@id="tbodyid"]/div//h4/a');
//   const products = await page.$$('//div[@id="tbodyid"]/div//h4/a');

//   for (const product of products) {

//     const productName = await product.textContent();
//     console.log(productName);

//   }

// });

// --------------------------------------------------------------------------------------------

// Task:2

// Task is  : i need to print price and the description.in terminal. 

// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   const links = await page.$$('h5');

//   // for(const link of links) {

//   // const linkText = await link.textContent();
//     //console.log(linkText);
//   // }

//   await page.waitForSelector('//p[@class="card-text"]');
//   const product = await page.$$('//div[@id="tbodyid"]/div/div//div/h5/following::p[@id="article"]');

//   const product =await page.$$('//div[@id="tbodyid"]/div/div//div/h5');

//   for (const product of products) {

//     const productName = await product.textContent();
//     console.log(productName);

//   }

// });

// -------------------------------------------------------------------------------

// Task 1:

// const { test, expect } = require('@playwright/test');

// test('Locating Multiple Elements', async ({ page }) => {

//   await page.goto('https://www.demoblaze.com/');

//   const links = await page.$$('a');

//   // for(const link of links) {

//   //   const linkText = await link.textContent();
//   //   console.log(linkText);
//   // }

//   await page.waitForSelector('//div[@id="tbodyid"]/div//h4/a');
//   const products = await page.$$('//div[@id="tbodyid"]/div//h4/a');

//   for (const product of products) {

//     const productName = await product.textContent();
//     console.log(productName);

//   }

// });

