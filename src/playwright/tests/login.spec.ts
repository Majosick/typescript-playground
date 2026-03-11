import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import LoginPage from '../pages/login.page';
import { log } from 'node:console';

test.describe('User login to Demobank', () => {
  const shortPassword = 'haowww';
  const errorMessageID = 'identyfikator ma min. 8 znaków';
  const errorMessagePassword = 'hasło ma min. 8 znaków';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrance
    const expectedUserName = 'Jan Demobankowy';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.fillLoginInput(loginData.userID);
    await loginPage.fillPasswordInput(loginData.userPassword);
    await loginPage.clickLoginButton();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short login and password', async ({
    page,
  }) => {
    // Arrance
    const shortUserID = 'iksdee';

    // Act
    await page.getByTestId('login-input').fill(shortUserID);
    await page.getByTestId('password-input').fill(shortPassword);

    // Assert
    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-id')).toHaveText(errorMessageID);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const userID = 'iksdeaxd';

    // Act
    await page.getByTestId('login-input').fill(loginData.userID);
    await page.getByTestId('password-input').fill(shortPassword);
    await page.getByTestId('password-input').blur(); // blur removes focus from the element, which triggers validation

    // Assert
    await expect(page.getByTestId('login-button')).toBeDisabled();
    await expect(page.getByTestId('error-login-password')).toHaveText(
      errorMessagePassword,
    );
  });
});
