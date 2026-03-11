import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import LoginPage from '../pages/login.page';

test.describe('Payment tests', () => {
  test.beforeEach(async ({ page }) => {
    const userID = loginData.userID;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.fillLoginInput(userID);
    await loginPage.fillPasswordInput(userPassword);
    await loginPage.clickLoginButton();
    
    await page.getByRole('link', { name: 'płatności' }).click();
  });

  test('Simple payment test', async ({ page }) => {
    //Arrange
    const transferReceiver = 'Jan Kowalski';
    const accountNumber = '12 3456 7890 1234 5678 9012 345678';
    const transferAmount = '222';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla ${transferReceiver}`;

    //Act
    await page.getByTestId('transfer_receiver').fill(transferReceiver);
    await page.getByTestId('form_account_to').fill(accountNumber);
    await page.getByTestId('form_amount').fill(transferAmount);
    await page.getByRole('button', { name: 'wykonaj przelew' }).click();
    await page.getByTestId('close-button').click();

    //Assert
    await expect(page.locator('#show_messages')).toHaveText(expectedMessage);
  });
});
