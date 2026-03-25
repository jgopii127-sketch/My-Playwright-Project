const { test, expect } = require('@playwright/test');

// test.skip('Handle Web Tables', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const table = await page.locator("//table[@id='productTable']");

//     // 1) Total number of rows and columns

//     const columns = await table.locator('thead tr th');
//     console.log("Numbers of Columns :", await columns.count());
//     expect(await columns.count()).toBe(4);

//     const rows = await table.locator('tbody tr');
//     console.log("Number of Rows :", await rows.count());
//     expect(await rows.count()).toBe(5);

//     // 2) Select check box for any product

//     const matchingRows = rows.filter({
//         has: page.locator('td'),
//         hasText: 'Tablet'
//     })

//     const checkBox = matchingRows.locator('input').first();
//     await checkBox.check();

//     // 3) Select multiple Products from the table

//     await selectproduct(rows, page, 'Smartphone');
//     await selectproduct(rows, page, 'Laptop');
//     await selectproduct(rows, page, 'Smartwatch');
//     await selectproduct(rows, page, 'Wireless Earbuds');

//     // 4) Print all the product details

//     for (let i = 0; i < await rows.count(); i++) {

//         const row = rows.nth(i);
//         const tds = row.locator('td');

//         for (let j = 0; j < await tds.count() - 1; j++) {

//             console.log(await tds.nth(j).textContent());

//         }
//     }

//     // 5) Print all the data from the table

//     const pages = await page.locator("#pagination li a");
//     console.log("Number of Pages :", await pages.count());

//     for (let p = 0; p < await pages.count(); p++) {

//         if (p > 0) {

//             await pages.nth(p).click();

//         }

//         for (let i = 0; i < await rows.count(); i++) {

//             const row = rows.nth(i);
//             const tds = row.locator('td');

//             for (let j = 0; j < await tds.count() - 1; j++) {

//                 console.log(await tds.nth(j).textContent());

//             }
//         }
//     }

//     await page.waitForTimeout(2000);

// });

// async function selectproduct(rows, page, name) {

//     const matchingRows = rows.filter({
//         has: page.locator('td'),
//         hasText: name
//     })

//     await matchingRows.locator('input').check();
// }


// Task 

// const { test, expect } = require('@playwright/test');


test.only('Check 3rd page checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator("//table[@id='productTable']");
    const rows = table.locator("tbody tr");

    const pages = page.locator("//ul[@id='pagination']//li/a");

    // click page 3
    await pages.nth(2).click();

    console.log("Checking Page 3 Checkboxes");

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i);

        const checkbox = row.locator("input");

        await checkbox.check();

    }

        await page.pause();



});