import { Page, Locator } from '@playwright/test';
import { SideMenu } from '../components/side-menu.component';

export class DesktopPage {
  transferReceiverSelect: Locator;
  transferAmountInput: Locator;
  transferTitleInput: Locator;
  transferExecuteButton: Locator;
  topUpReceiverSelect: Locator;
  topUpAmountInput: Locator;
  topUpAgreementCheckbox: Locator;
  topUpButton: Locator;
  closeMessageButton: Locator;
  messagesText: Locator;
  balanceValue: Locator;
  userName: Locator;
  sideMenu: SideMenu;

  constructor(private page: Page) {
    this.sideMenu = new SideMenu(this.page);
    this.transferReceiverSelect = this.page.locator(
      '#widget_1_transfer_receiver',
    );
    this.transferAmountInput = this.page.locator('#widget_1_transfer_amount');
    this.transferTitleInput = this.page.locator('#widget_1_transfer_title');
    this.transferExecuteButton = this.page.locator('#execute_btn');

    this.topUpReceiverSelect = this.page.locator('#widget_1_topup_receiver');
    this.topUpAmountInput = this.page.locator('#widget_1_topup_amount');
    this.topUpAgreementCheckbox = this.page.locator(
      '#uniform-widget_1_topup_agreement span',
    );
    this.topUpButton = this.page.getByRole('button', {
      name: 'doładuj telefon',
    });

    this.closeMessageButton = this.page.getByTestId('close-button');
    this.messagesText = this.page.locator('#show_messages');
    this.balanceValue = this.page.locator('#money_value');
    this.userName = this.page.getByTestId('user-name');
  }

  async makeQuickTransfer(
    receiverOption: string,
    amount: string,
    title: string,
  ): Promise<void> {
    await this.transferReceiverSelect.selectOption(receiverOption);
    await this.transferAmountInput.fill(amount);
    await this.transferTitleInput.fill(title);
    await this.transferExecuteButton.click();
  }

  async topUpMobile(receiver: string, amount: string): Promise<void> {
    await this.topUpReceiverSelect.selectOption(receiver);
    await this.topUpAmountInput.fill(amount);
    await this.topUpAgreementCheckbox.click();
    await this.topUpButton.click();
  }

  async closePopupMessage(): Promise<void> {
    await this.closeMessageButton.click();
  }

  async getMessageText(): Promise<string> {
    return await this.messagesText.innerText();
  }

  async getBalanceValue(): Promise<number> {
    const value = await this.balanceValue.innerText();
    return Number(value);
  }
}
