// const{test,expect}=require('@playwright/test'); 

// test('full Screen Shot',async({page})=>{
//     await page.goto('https://www.flipkart.com/');
//     await page.waitForTimeout(2000);
//     await page.screenshot({path:'tests/screeenshot/' + Date.now() + 'fullpage.png' , fullPage:true});
    
// });

// test.skip('visible Screen Shot',async({page})=>{
//     await page.goto('https://www.flipkart.com/');
//     await page.waitForTimeout(2000);
//     await page.screenshot({path:'tests/screeenshot/' + Date.now() + 'visible.png'});
    
// });

// const { test, expect } = require('@playwright/test');

// test.only('Flipkart Element Screenshot', async ({ page }) => {

//   await page.goto('https://www.flipkart.com/');

//   // Close login popup only if visible
//   const closeBtn = page.locator('button:has-text("✕")');

//   if (await closeBtn.isVisible()) {
//     await closeBtn.click();
//   }

//   // Locate the element
//   const element = page.locator('//div[@id="slot-list-container"]//div[text()="Induction Cooktops"]');

//   // Wait for element to appear
//   await element.waitFor();

//   // Take screenshot
//   await element.screenshot({
//     path: `tests/element-${Date.now()}.png`
//   });

// });

// -----------------------------------------------------------------------------------------------------------------------------------

// Task For Debug -------------->14/03/2026:

// const { test, expect } = require('@playwright/test');

// test('Debug Screenshot Name', async ({ page }) => {

//     // Step 1: Open website
//     await page.goto('https://www.flipkart.com/');

//     // Step 2: Generate timestamp
//     const timeStamp = Date.now();

//     // Step 3: Print timestamp in console
//     console.log("Timestamp value:", timeStamp);

//     // Step 4: Build screenshot file name
//     const fileName = 'tests/screeenshot/' + timeStamp + 'fullpage.png';

//     // Step 5: Print final path
//     console.log("Final Screenshot Path:", fileName);

//     // Step 6: Take screenshot
//     await page.screenshot({
//         path: fileName,
//         fullPage: true
//     });

// });