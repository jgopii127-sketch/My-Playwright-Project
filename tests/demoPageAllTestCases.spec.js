 const { test, expect } = require('@playwright/test');

// //Hovwer Dropdown - Link Three
// test('Hover Dropdown - Link Three', async ({ page }) => {

//   await page.goto('https://seleniumbase.io/demo_page');

//   await page.locator('#myDropdown').hover();

//   await page.locator('#dropOption3').click();

// });

// //  beforeEach
// test.beforeEach(async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
// });


// //  1. Text Input
// test('TC01 - Text Input', async ({ page }) => {
//   await page.locator('#myTextInput').fill('Micca');
// });


// //  2. Text Area
// test('TC02 - Text Area', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('#myTextarea').fill('Playwright is awesome for web testing!');
// });


// //  3. Button Click
// test('TC03 - Button Click', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('text=Click Me').click();
// });


// //  4. Checkbox
// test('TC04 - Checkbox', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('#checkBox1').check();
// });


// //  5. Radio Button
// test('TC05 - Radio Button', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('#radioButton2').check();
// });


// //  6. Dropdown
// test('TC06 - Dropdown', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('#mySelect').selectOption('25%');
// });


// //  7. Slider
// test('TC07 - Slider', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('input[type="range"]').fill('70');
// });


// //  8. Link Click
// test('TC08 - Link Click', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.locator('text=seleniumbase.com').click();
//   await page.goBack();
// });


// //  9. Header Text
// test('TC09 - Header Text', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await expect(page.locator('h1')).toHaveText('Demo Page');
// });


// //  10. Image Check FIXED 
// test('TC10 - Image Exists', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const count = await page.locator('#logo').count();
//   expect(count).toBeGreaterThan(0);
// });


// //  11. Progress Bar
// test('TC11 - Progress Bar', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.waitForTimeout(3000);
//   await expect(page.locator('#progressBar')).toBeVisible();
// });


// //  12. Loop
// test('TC12 - Loop Inputs', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const count = await page.locator('input').count();

//   for (let i = 0; i < count; i++) {
//     console.log('Index:', i);
//   }

//   expect(count).toBeGreaterThan(0);
// });


// //  13. URL Check
// test('TC13 - URL', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await expect(page).toHaveURL(/demo_page/);
// });


// //  14. Title Check FIXED
// test('TC14 - Title', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await expect(page).toHaveTitle('Web Testing Page');
// });


// //  15. ReadOnly Field FIXED
// test('TC15 - ReadOnly Field', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const value = await page.locator('#myTextInput2').inputValue();
//   expect(value).not.toBe('JABHFBBHB');
// });


// //  16. Paragraph FIXED 
// test('TC16 - Paragraph', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await expect(page.locator('#pText')).toBeVisible();
// });

// //  17. Paragraph Text
// test('TC17 - Paragraph Text', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await expect(page.locator('#pText')).toHaveText('This Text is Green');
// });


// //  18. Input Count Validation
// test('TC18 - Input Count', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const count = await page.locator('input').count();
//   expect(count).toBeGreaterThan(5);
// });


// //  19. Disabled Field FIXED
// test('TC19 - Disabled Field', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const readOnlyField = page.locator('input[readonly]');

//   await expect(readOnlyField).toHaveAttribute('readonly', '');
// });

//  //20. SVG Click
// test('test', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.getByRole('cell', { name: 'HTML SVG with rect:' }).click();
//   await page.locator('#svgRect').click();
// });

// //21. Placeholder Text
// test('TC21 - Placeholder Text', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   const placeholder = await page.locator('//input[@id="placeholderText"]').getAttribute('placeholder');
//   expect(placeholder).toBe('Placeholder Text Field');
// });

// //22. Placeholder Text Field
// test('test', async ({ page }) => {
//   await page.goto('https://seleniumbase.io/demo_page');
//   await page.getByRole('cell', { name: 'Placeholder Text Field:' }).click();
//   await page.getByRole('textbox', { name: 'Placeholder Text Field' }).click();
//   await page.getByRole('textbox', { name: 'Placeholder Text Field' }).fill('Playwright tool is great for testing!');
// });