const { test, expect } = require('@playwright/test');

test('Handle CheckBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const checkBoxLoc = [
        "//input[@id='checkBoxOption1']",
        "//input[@id='checkBoxOption2']",
        "//input[@id='checkBoxOption3']"
    ];

    // Check all checkboxes
    for (const a of checkBoxLoc) {
        await page.locator(a).check();
    }

    await page.waitForTimeout(2000);

    console.log("Hii")

    // Uncheck only first two
    for (const b in checkBoxLoc) {

        if (b < 2) {

            if (await page.locator(checkBoxLoc[b]).isChecked()) {
                await page.locator(checkBoxLoc[b]).uncheck();
            }

        }

    }

    await page.waitForTimeout(3000);

});