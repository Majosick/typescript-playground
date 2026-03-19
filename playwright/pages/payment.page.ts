import { Page, Locator } from '@playwright/test';
import { SideMenu } from '../components/side-menu.component';

export class PaymentPage {
  transferReceiverInput: Locator;
  accountNumberInput: Locator;
  amountInput: Locator;
  executeButton: Locator;
  closeMessageButton: Locator;
  messagesText: Locator;
  sideMenu: SideMenu;

  constructor(private page: Page) {
    this.sideMenu = new SideMenu(page);

    this.transferReceiverInput = this.page.getByTestId('transfer_receiver');
    this.accountNumberInput = this.page.getByTestId('form_account_to');
    this.amountInput = this.page.getByTestId('form_amount');
    this.executeButton = this.page.getByRole('button', {
      name: 'wykonaj przelew',
    });

    this.closeMessageButton = this.page.getByTestId('close-button');
    this.messagesText = this.page.locator('#show_messages');
  }

  async makeTransfer(
    receiver: string,
    account: string,
    amount: string,
  ): Promise<void> {
    await this.transferReceiverInput.fill(receiver);
    await this.accountNumberInput.fill(account);
    await this.amountInput.fill(amount);
    await this.page.waitForTimeout(500); // 500 milliseconds = 0.5 seconds
    await this.executeButton.click();
  }

  async closeMessage(): Promise<void> {
    await this.closeMessageButton.click();
  }

  async getMessageText(): Promise<string> {
    return await this.messagesText.innerText();
  }
}
