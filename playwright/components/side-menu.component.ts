import { Page, Locator } from '@playwright/test';

export class SideMenu {
  private paymentLink: Locator;

  constructor(private page: Page) {
    // The payment button lives in the global navigation menu
    this.paymentLink = this.page.getByRole('link', { name: 'płatności' });
  }

  async goToPayment(): Promise<void> {
    await this.paymentLink.click();
  }
}
