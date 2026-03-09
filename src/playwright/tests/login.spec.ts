import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
  test('successful login with correct credentials', async ({ page }) => {
    // Arrance
    const url = 'https://demo-bank.vercel.app/';
    const userID = 'iksdeela';
    const userPassword = 'haslowww';
    const expectedUserName = 'Jan Demobankowy';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short login and password', async ({
    page,
  }) => {
    // Arrance
    const url = 'https://demo-bank.vercel.app/';
    const shortUserID = 'iksdee';
    const shortPassword = 'haowww';
    const errorMessageID = 'identyfikator ma min. 8 znaków';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(shortUserID);
    await page.getByTestId('password-input').fill(shortPassword);

    // Assert
    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-id')).toHaveText(errorMessageID);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const url = 'https://demo-bank.vercel.app/';
    const userID = 'iksdeaxd';
    const shortPassword = 'haowww';
    const errorMessagePassword = 'hasło ma min. 8 znaków';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(shortPassword);
    await page.getByTestId('password-input').blur(); // blur removes focus from the element, which triggers validation

    // Assert
    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-password')).toHaveText(errorMessagePassword);
  });
});
