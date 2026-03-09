import { test, expect } from '@playwright/test';

test.describe('Desktop tests', () => {
  test('quick transfer with payment data', async ({ page }) => {
    // Arrange
    const url = 'https://demo-bank.vercel.app/';
    const userID = 'lalalala';
    const userPassword = 'password';
    const receiverOption = '2';
    const transferAmount = '666';
    const transferTitle = 'pizza';
    const receiverName = 'Chuck Demobankowy';
    const expectedMessage = `Przelew wykonany! ${receiverName} - ${transferAmount},00PLN - ${transferTitle}`;

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

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
    const url = 'https://demo-bank.vercel.app/';
    const userID = 'lalalala';
    const userPassword = 'lalalala';
    const topupReceiver = '500 xxx xxx';
    const topupAmount = '100';
    const expectedMessage =
      'Doładowanie wykonane! 100,00PLN na numer 500 xxx xxx';

    // Act
    await page.goto(url);
    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

    await page.locator('#widget_1_topup_receiver').selectOption(topupReceiver);
    await page.locator('#widget_1_topup_amount').fill(topupAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.waitForTimeout(500); // 0.5 second pause
    await page.getByRole('button', { name: 'doładuj telefon' }).click();

    await expect(page.getByText('Doładowanie wykonane!Kwota:')).toBeVisible();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectedMessage);
  });
});
