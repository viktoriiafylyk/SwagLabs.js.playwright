import { test, expect } from '../fixtures/login-fixture';
import { InventoryItemPage } from 'src/pages/inventory-item-page';
import { getProductPrice } from 'utils/get-price-utils';

test.describe('Price consistency between Inventory and Item page', () => {
    test('Verify that product price on Inventory page matches Item page price', async ({ page, inventoryPage }) => {
        const inventoryItemPage = new InventoryItemPage(page);

        const productsCount = await inventoryPage.areProductsDisplayed();

        for (let i = 0; i < productsCount; i++) {
            const mainPagePriceText = await getProductPrice(inventoryPage.productPrice.nth(i));
            const mainPagePrice = mainPagePriceText.trim();

            await inventoryPage.productName.nth(i).click();

            const itemPagePriceText = await getProductPrice(inventoryItemPage.productPrice);
            const itemPagePrice = itemPagePriceText.trim();

            await expect(itemPagePrice).toBe(mainPagePrice);
            await inventoryItemPage.clickBackToProductsButton();
        }
    });
});
