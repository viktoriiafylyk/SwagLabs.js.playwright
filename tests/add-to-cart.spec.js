import {test, expect} from '../fixtures/login-fixture';
import {HeaderComponent} from "../src/component/header-component";

test.describe('Shopping cart counter', () => {
    test('Verify cart counter updates when adding and removing products', async ({inventoryPage, page}) => {
        const header = new HeaderComponent(page);

        await expect(await inventoryPage.isOnInventoryPage()).toBeTruthy();
        const totalProducts = await inventoryPage.areProductsDisplayed();
        for (let i = 1; i <= totalProducts; i++) {
            await inventoryPage.addProductsToCart(1);
            expect(await header.getCartCount()).toBe(i);
        }

        for (let i = totalProducts - 1; i >= 1; i--) {
            await inventoryPage.clickRemoveFromCart(1);
            expect(await header.getCartCount()).toBe(i);
        }
    });
});
