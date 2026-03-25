const {test,expect} = require('@playwright/test');

const logindata = require('../test-data/loginData.json');


for (const data of logindata) {

  test(`login test with username: ${data.username}`, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill(data.username);
    await page.locator('#loginpassword').fill(data.password);


    if (data.username === 'pavanol' && data.password === 'test@123') {

      await page.locator('button[onclick="logIn()"]').click();

      const logoutlink = page.locator("//a[text()='Log out']");
      await expect(logoutlink).toBeHidden({ timeout: 5000 });

    } else {

      page.on('dialog', async (dialog) => {
        console.log(`dialog.message : ${dialog.message()}`);
        await dialog.dismiss();
      });   

      await page.locator('button[onclick="logIn()"]').click();

    }

  });

}