import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.climavi.eu/auth/login');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'account@climavi.eu' }).click();
  await page.getByRole('textbox', { name: 'account@climavi.eu' }).fill('razvancostache97@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('Agvolution2025');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Dry Stress' }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
  await page.getByRole('link', { name: 'Low Water' }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
  await page.getByRole('link', { name: 'All Good' }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
  await page.locator('div').filter({ hasText: /^0High Risk$/ }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
  await page.getByRole('link', { name: 'Increased Risk' }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
  await page.getByRole('link', { name: 'No Risk' }).click();
  await page.getByRole('link', { name: 'Zurück' }).click();
});