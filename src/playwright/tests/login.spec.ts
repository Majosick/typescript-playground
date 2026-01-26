import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
  test('successful login with correct credentials', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('iksdeela');
    await page.getByTestId('password-input').fill('haslowww');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
  });

  test('unsuccessful login with too short login and password', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('iksdea');
    await page.getByTestId('password-input').fill('haowww');

    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('iksdeaxd');
    await page.getByTestId('password-input').fill('haowww');
    await page.getByTestId('password-input').blur();

    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków');
  });
})