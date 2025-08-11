import {test, expect} from '@playwright/test';
import {LoginPage} from "../src/pages/login-page";
import {InvalidLoginData} from "../tests/data/invalid-login-data";

test.describe('Invalid Login Test', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });

    for (const key in InvalidLoginData) {
        const data = InvalidLoginData[key];

        test(`Verify login with invalid data: ${key}`, async () => {
            await loginPage.enterUsername(data.username);
            await loginPage.enterPassword(data.password);
            await loginPage.clickLoginButton();

            await expect(await loginPage.isErrorDisplayed()).toBeTruthy();
            await expect(await loginPage.getErrorText()).toBe(data.expectedError);
        });
    }
});
