import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';

test.describe('Desktop tests', () => {
  test.beforeEach(async ({ page }) => {
    const userID = loginData.userID;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
  });

  test('quick transfer with payment data', async ({ page }) => {
    // Arrange
    const receiverOption = '2';
    const transferAmount = '666';
    const transferTitle = 'pizza';
    const receiverName = 'Chuck Demobankowy';
    const expectedMessage = `Przelew wykonany! ${receiverName} - ${transferAmount},00PLN - ${transferTitle}`;

    // Act
    await page
      .locator('#widget_1_transfer_receiver')
      .selectOption(receiverOption);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);

    await page.locator('#execute_btn').click();
    await expect(page.getByText('Przelew wykonany!Odbiorca:')).toBeVisible();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectedMessage);
  });

  test(`successfuly mobile top-up`, async ({ page }) => {
    // Arrange
    const topUpReceiver = '500 xxx xxx';
    const topUpAmount = '100';
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${topUpReceiver}`;

    // Act
    await page.locator('#widget_1_topup_receiver').selectOption(topUpReceiver);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();

    await expect(page.getByText('Doładowanie wykonane!Kwota:')).toBeVisible();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectedMessage);
  });

  test(`correct balance after successful mobile top-up`, async ({ page }) => {
    // Arrange
    const topUpReceiver = '500 xxx xxx';
    const topUpAmount = '100';
    const balanceBeforeTopUp = await page.locator('#money_value').innerText();
    const expectedBalanceAfterTopUp =
      Number(balanceBeforeTopUp) - Number(topUpAmount);

    // Act
    await page.locator('#widget_1_topup_receiver').selectOption(topUpReceiver);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#money_value')).toHaveText(
      `${expectedBalanceAfterTopUp}`,
    );
  });
});
