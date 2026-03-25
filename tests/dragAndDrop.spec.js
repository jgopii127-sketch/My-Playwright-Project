const { test, expect } = require('@playwright/test');

test('Drag And Drop', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const drag = page.locator('#draggable');
  const drop = page.locator('#droppable');

  // Wait for elements
  await drag.waitFor({ state: 'visible' });
  await drop.waitFor({ state: 'visible' });

  // Stable approach
  await drag.hover();
  await page.mouse.down();

  await drop.hover();
  await page.mouse.up();

  await page.waitForTimeout(2000);
});

