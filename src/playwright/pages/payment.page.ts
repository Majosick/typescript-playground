import { Page, Locator } from '@playwright/test';

export class PaymentPage {
  transferReceiverInput: Locator;
  accountNumberInput: Locator;
  amountInput: Locator;
  executeButton: Locator;
  closeMessageButton: Locator;
  messagesText: Locator;

  constructor(private page: Page) {
    this.transferReceiverInput = this.page.getByTestId('transfer_receiver');
    this.accountNumberInput = this.page.getByTestId('form_account_to');
    this.amountInput = this.page.getByTestId('form_amount');
    this.executeButton = this.page.getByRole('button', {
      name: 'wykonaj przelew',
    });

    this.closeMessageButton = this.page.getByTestId('close-button');
    this.messagesText = this.page.locator('#show_messages');
  }

  async navigateTo(): Promise<void> {
    await this.page.getByRole('link', { name: 'płatności' }).click();
  }

  async makeTransfer(
    receiver: string,
    account: string,
    amount: string,
  ): Promise<void> {
    await this.transferReceiverInput.fill(receiver);
    await this.accountNumberInput.fill(account);
    await this.amountInput.fill(amount);
    await this.executeButton.click();
  }

  async closeMessage(): Promise<void> {
    await this.closeMessageButton.click();
  }

  async getMessageText(): Promise<string> {
    return await this.messagesText.innerText();
  }
}
