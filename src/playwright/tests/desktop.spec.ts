import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { DesktopPage } from '../pages/desktop.page';

test.describe('Desktop tests', () => {
  test.beforeEach(async ({ page }) => {
    const userID = loginData.userID;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(loginData.userID, loginData.userPassword);
  });

  test('quick transfer with payment data', async ({ page }) => {
    // Arrange
    const receiverOption = '2';
    const transferAmount = '666';
    const transferTitle = 'pizza';
    const receiverName = 'Chuck Demobankowy';
    const expectedMessage = `Przelew wykonany! ${receiverName} - ${transferAmount},00PLN - ${transferTitle}`;

    const desktopPage = new DesktopPage(page);

    // Act
    await desktopPage.makeQuickTransfer(
      receiverOption,
      transferAmount,
      transferTitle,
    );
    await expect(page.getByText('Przelew wykonany!Odbiorca:')).toBeVisible();
    await desktopPage.closePopupMessage();

    // Assert
    await expect(desktopPage.messagesText).toHaveText(expectedMessage);
  });

  test(`successfuly mobile top-up`, async ({ page }) => {
    // Arrange
    const topUpReceiver = '500 xxx xxx';
    const topUpAmount = '1000';
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${topUpReceiver}`;

    const desktopPage = new DesktopPage(page);

    // Act
    await desktopPage.topUpMobile(topUpReceiver, topUpAmount);
    await expect(page.getByText('Doładowanie wykonane!Kwota:')).toBeVisible();
    await desktopPage.closePopupMessage();

    // Assert
    await expect(desktopPage.messagesText).toHaveText(expectedMessage);
  });

  test(`correct balance after successful mobile top-up`, async ({ page }) => {
    // Arrange
    const topUpReceiver = '500 xxx xxx';
    const topUpAmount = '100';

    const desktopPage = new DesktopPage(page);
    const balanceBeforeTopUp = await desktopPage.getBalanceValue();
    const expectedBalanceAfterTopUp = balanceBeforeTopUp - Number(topUpAmount);

    // Act
    await desktopPage.topUpMobile(topUpReceiver, topUpAmount);
    await desktopPage.closePopupMessage();

    // Assert
    await expect(desktopPage.balanceValue).toHaveText(
      `${expectedBalanceAfterTopUp}`,
    );
  });
});
