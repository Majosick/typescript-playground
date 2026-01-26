import { test, expect } from '@playwright/test';

test.describe('Desktop tests', () => {
    test('quick transfer with payment data', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').fill('lalalala');
        await page.getByTestId('password-input').fill('lalalala');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('666');
        await page.locator('#widget_1_transfer_title').fill('zapiekanki');

        await page.locator('#execute_btn').click();
        await expect(page.getByText('Przelew wykonany!Odbiorca:')).toBeVisible();
        await page.getByTestId('close-button').click();
        await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 666,00PLN - zapiekanki');
    });

    test(`successfuly mobile top-up ${i}`, async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').fill('lalalala');
        await page.getByTestId('password-input').fill('lalalala');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
        await page.locator('#widget_1_topup_amount').fill('100');
        await page.locator('#uniform-widget_1_topup_agreement > span').click();
        await page.waitForTimeout(500); // 0.5 second pause
        await page.getByRole('button', { name: 'doładuj telefon' }).click();

        await expect(page.getByText('Doładowanie wykonane!Kwota:')).toBeVisible();
        await page.getByTestId('close-button').click();
        await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 100,00PLN na numer 500 xxx xxx');
    });
})