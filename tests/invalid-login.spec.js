import {test, expect} from '@playwright/test';
import {LoginPage} from "src/pages/login-page";
import {InvalidLoginData} from "utils/data/invalid-login-data";
import {isErrorDisplayed, getErrorText} from 'utils/error-utils.js';

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

            await expect(await isErrorDisplayed(loginPage.errorMessage)).toBeTruthy();
            await expect(await getErrorText(loginPage.errorMessage)).toBe(data.expectedError);
        });
    }
});
