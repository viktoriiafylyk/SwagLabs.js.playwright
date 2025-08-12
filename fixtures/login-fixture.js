import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/login-page';
import { InventoryPage } from '../src/pages/inventory-page';

export const test = base.extend({
    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();

        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }
});

export { expect } from '@playwright/test';
