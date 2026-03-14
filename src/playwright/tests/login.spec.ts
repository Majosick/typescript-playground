import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { DesktopPage } from '../pages/desktop.page';

test.describe('User login to Demobank', () => {
  const userID = loginData.userID;
  const shortPassword = 'haowww';
  const errorMessageID = 'identyfikator ma min. 8 znaków';
  const errorMessagePassword = 'hasło ma min. 8 znaków';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const expectedUserName = 'Jan Demobankowy';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.login(loginData.userID, loginData.userPassword);

    // Assert
    const desktopPage = new DesktopPage(page);
    await expect(desktopPage.userName).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short login and too short password', async ({
    page,
  }) => {
    // Arrange
    const shortUserID = 'iksdee';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.fillLoginInput(shortUserID);
    await loginPage.fillPasswordInput(shortPassword);
    // // Assert
    await expect(loginPage.loginButton).toBeDisabled();
    await expect(loginPage.errorLoginId).toHaveText(errorMessageID);
  });

  test('unsuccessful login with correct login and too short password', async ({
    page,
  }) => {
    // Act
    const loginPage = new LoginPage(page);
    await loginPage.fillLoginInput(userID);
    await loginPage.fillPasswordInput(shortPassword);
    await loginPage.blurPasswordInput(); // blur removes focus from the element, which triggers validation

    // Assert
    await expect(loginPage.loginButton).toBeDisabled();
    await expect(loginPage.errorLoginPassword).toHaveText(errorMessagePassword);
  });
});
