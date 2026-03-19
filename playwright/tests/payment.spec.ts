import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { SideMenu } from '../components/side-menu.component';
import { PaymentPage } from '../pages/payment.page';

test.describe('Payment tests', () => {
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    const userID = loginData.userID;
    const userPassword = loginData.userPassword;

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(userID, userPassword);

    const sideMenu = new SideMenu(page);
    await sideMenu.goToPayment();

    paymentPage = new PaymentPage(page);
  });

  test('Simple payment test', async ({ page }) => {
    // Arrange
    const transferReceiver = 'Jan Kowalski';
    const accountNumber = '12 3456 7890 1234 5678 9012 345678';
    const transferAmount = '222';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla ${transferReceiver}`;

    // Act
    await paymentPage.makeTransfer(
      transferReceiver,
      accountNumber,
      transferAmount,
    );
    await paymentPage.closeMessage();

    // Assert
    await expect(paymentPage.messagesText).toHaveText(expectedMessage);
  });
});
