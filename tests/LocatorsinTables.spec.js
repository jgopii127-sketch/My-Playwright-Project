// Task No:3

const { test, expect } = require('@playwright/test');

test('Locate Island Trading row data', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');

  const company = "Island Trading";

  // Locate the entire row using company name
  const row = page.locator(`//table[@id='customers']//td[text()='${company}']/ancestor::tr`);

  // Column indexing
  const contact = row.locator("td").nth(0);
  const country = row.locator("td").nth(1);

  console.log(await contact.textContent());
  console.log(await country.textContent());

});

