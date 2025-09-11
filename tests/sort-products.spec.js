import { test, expect } from '../fixtures/login-fixture';
import { SortingComponent } from "src/component/sorting-component";

test.describe('Checking the sorting of the products', () => {
    test('Verify all sorting options', async ({ page, inventoryPage }) => {
        const sorting = new SortingComponent(page);

        await test.step('Sort by Name (Z → A)', async () => {
            await sorting.sortByNameDesc();
            await expect(await inventoryPage.isSortedByNameDescending()).toBeTruthy();
        });

        await test.step('Sort by Price (Low → High)', async () => {
            await sorting.sortByPriceLowToHigh();
            await expect(await inventoryPage.isSortedByPriceAscending()).toBeTruthy();
        });

        await test.step('Sort by Price (High → Low)', async () => {
            await sorting.sortByPriceHighToLow();
            await expect(await inventoryPage.isSortedByPriceDescending()).toBeTruthy();
        });

        await test.step('Sort by Name (A → Z)', async () => {
            await sorting.sortByNameAsc();
            await expect(await inventoryPage.isSortedByNameAscending()).toBeTruthy();
        });
    });
});
