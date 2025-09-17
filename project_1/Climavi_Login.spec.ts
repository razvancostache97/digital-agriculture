import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.climavi.eu/auth/login');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'account@climavi.eu' }).click();
  await page.getByRole('textbox', { name: 'account@climavi.eu' }).fill('razvancostache97@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('Agvolution2025');
  await page.getByRole('button', { name: 'Log In' }).click();
});