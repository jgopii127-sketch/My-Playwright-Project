const { test, expect } = require('@playwright/test');

test('Hard and Soft Assertions', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Hard Assertions
//   await expect(page).toHaveURL('https://www.aazon.in/');
//   await expect(page).toHaveTitle(
//     'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More'
//   );
//   await expect(page.locator('#nav-logo-sprites')).toBeVisible();

  // Soft Assertions
  await expect.soft(page).toHaveURL('https://www.amazon.in/');
  await expect.soft(page).toHaveTitle(
    'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More'
  );
  await expect.soft(page.locator('#nav-logo-sprites')).toBeVisible();
});


