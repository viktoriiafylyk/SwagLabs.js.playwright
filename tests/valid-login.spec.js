import {test, expect} from '@playwright/test';
import {LoginPage} from "../src/pages/login-page";

test.describe('Valid Login Test', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });

    test('test', async ({ page }) => {
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
    });
});
