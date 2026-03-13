import { Page, Locator } from '@playwright/test';

export class LoginPage {
  loginInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  userName: Locator;
  errorLoginId: Locator;
  errorLoginPassword: Locator;

  constructor(private page: Page) {
    this.loginInput = this.page.getByTestId('login-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');
    this.userName = this.page.getByTestId('user-name');
    this.errorLoginId = this.page.getByTestId('error-login-id');
    this.errorLoginPassword = this.page.getByTestId('error-login-password');
  }

  async fillLoginInput(userID: string): Promise<void> {
    await this.loginInput.fill(userID);
  }

  async fillPasswordInput(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async blurPasswordInput(): Promise<void> {
    await this.passwordInput.blur();
  }

  async login(userID: string, password: string): Promise<void> {
    await this.fillLoginInput(userID);
    await this.fillPasswordInput(password);
    await this.clickLoginButton();
  }
}
