import {test, expect} from '@playwright/test';
import {LoginPage} from "../src/pages/login-page";
import {InventoryPage} from "../src/pages/inventory-page";

test.describe('Valid Login Test', () => {
    let loginPage;
    let inventoryPage;


    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.visit();
    });

    test('Verify login with valid data', async ({ page }) => {
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        await expect(await inventoryPage.isOnInventoryPage()).toBeTruthy();
        await expect(await inventoryPage.areProductsDisplayed()).toBeGreaterThan(0);

    });
});
