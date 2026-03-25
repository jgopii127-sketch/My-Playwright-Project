const { test, expect } = require('@playwright/test');

test.describe('Login Functionality Tests', () => {

  const loginButton = '#login2';
  const modal = '#logInModal';
  const usernameField = '#loginusername';
  const passwordField = '#loginpassword';
  const submitLoginButton = '#logInModal button[onclick="logIn()"]';
  const closeButton = '#logInModal button[data-dismiss="modal"]';

  const validUsername = 'demoblaze';
  const validPassword = 'demoblaze';

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    const logout = page.locator('#logout2');
    if (await logout.isVisible()) {
      await logout.click();
    }

  });

  test('Valid login test', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(usernameField).fill(validUsername);
    await page.locator(passwordField).fill(validPassword);

    await page.locator(submitLoginButton).click();

    await expect(page.locator('#nameofuser')).toContainText('Welcome demoblaze');

  });

  test('Invalid login test - wrong username', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(usernameField).fill('invaliduser');
    await page.locator(passwordField).fill(validPassword);

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    expect(alert.message()).toBe('User does not exist.');
    await alert.accept();

  });

  test('Invalid login test - wrong password', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(usernameField).fill(validUsername);
    await page.locator(passwordField).fill('wrongpassword');

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    expect(alert.message()).toBe('Wrong password.');
    await alert.accept();

  });

  test('Empty username test', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(passwordField).fill(validPassword);

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    expect(alert.message()).toBe('Please fill out Username and Password.');
    await alert.accept();

  });

  test('Empty password test', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(usernameField).fill(validUsername);

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    expect(alert.message()).toBe('Please fill out Username and Password.');
    await alert.accept();

  });

  test('Both fields empty test', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    expect(alert.message()).toBe('Please fill out Username and Password.');
    await alert.accept();

  });

  test('Modal close functionality - close button', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(closeButton).click();

    await expect(page.locator(modal)).toBeHidden();

  });

  test('Modal close functionality - ESC key', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(page.locator(modal)).toBeHidden();

  });

  test('Modal close functionality - click outside modal', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.mouse.click(10, 10);

    await expect(page.locator(modal)).toBeHidden();

  });

  test('UI validation - modal elements visibility', async ({ page }) => {

    await page.locator(loginButton).click();

    const modalLocator = page.locator(modal);

    await expect(modalLocator).toBeVisible();

    await expect(page.locator(usernameField)).toBeVisible();
    await expect(page.locator(passwordField)).toBeVisible();
    await expect(page.locator(submitLoginButton)).toBeVisible();
    await expect(page.locator(closeButton)).toBeVisible();

  });

  test('Field validation - password field type', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await expect(page.locator(passwordField)).toHaveAttribute('type', 'password');

  });

  test('Security test - SQL injection attempt', async ({ page }) => {

    await page.locator(loginButton).click();
    await expect(page.locator(modal)).toBeVisible();

    await page.locator(usernameField).fill("' OR '1'='1");
    await page.locator(passwordField).fill("' OR '1'='1");

    const dialog = page.waitForEvent('dialog');

    await page.locator(submitLoginButton).click();

    const alert = await dialog;
    await alert.accept();

    await expect(page.locator('#nameofuser')).not.toBeVisible();

  });

});