import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private loginInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private userName: Locator;
  private errorLoginId: Locator;
  private errorLoginPassword: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.loginInput = page.getByTestId('login-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByTestId('login-button');
    this.userName = page.getByTestId('user-name');
    this.errorLoginId = page.getByTestId('error-login-id');
    this.errorLoginPassword = page.getByTestId('error-login-password');
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

  async getUserNameText(): Promise<string> {
    return (await this.userName.textContent()) || '';
  }

  async isLoginButtonDisabled(): Promise<boolean> {
    return await this.loginButton.isDisabled();
  }

  async getErrorLoginIdText(): Promise<string> {
    return (await this.errorLoginId.textContent()) || '';
  }

  async getErrorLoginPasswordText(): Promise<string> {
    return (await this.errorLoginPassword.textContent()) || '';
  }
}

export default LoginPage;
