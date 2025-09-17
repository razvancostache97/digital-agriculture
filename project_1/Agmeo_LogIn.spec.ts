import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.agmeo.com/sign-in');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).click();
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill('razvancostache97@gmail.com');
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('textbox', { name: 'Passwort' }).click();
  await page.getByRole('textbox', { name: 'Passwort' }).fill('Agvolution2025');
  await page.getByRole('button', { name: 'Weiter' }).click();
});