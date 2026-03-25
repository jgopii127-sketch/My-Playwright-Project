const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  console.log('title', await page.title());

  const radios = await page.$$eval('input[type=radio]', els =>
    els.map(el => ({ name: el.name, value: el.value, id: el.id, checked: el.checked }))
  );
  console.log('radios', radios);

  const checks = await page.$$eval('input[type=checkbox]', els =>
    els.map(el => ({ name: el.name, value: el.value, id: el.id, checked: el.checked }))
  );
  console.log('checkboxes', checks);

  const alertButton = await page.$('input[value="Alert"]');
  console.log('alert button exists', !!alertButton);

  const confirmButton = await page.$('input[value="Confirm"]');
  console.log('confirm button exists', !!confirmButton);

  const dropdownVal = await page.$eval('#dropdown-class-example', el => ({outer: el.outerHTML, value: el.value}));
  console.log('dropdown', dropdownVal);

  const auto = await page.$('#autocomplete');
  console.log('autocomplete exists', !!auto);

  const table = await page.$('.table-display');
  console.log('table exists', !!table);

  const iframe = await page.$('#courses-iframe');
  console.log('iframe exists', !!iframe);

  await browser.close();
})();
