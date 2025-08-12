import { test, expect } from '../fixtures/login-fixture';
import {SortingComponent} from "../src/component/sorting-component";

test.describe('Checking the sorting of the products', () => {
    test('Verify all sorting options', async ({ page, inventoryPage }) => {
        const sorting = new SortingComponent(page);

        await sorting.sortByNameDesc();
        await expect(await inventoryPage.isSortedByNameDescending()).toBeTruthy();

        await sorting.sortByPriceLowToHigh();
        await expect(await inventoryPage.isSortedByPriceAscending()).toBeTruthy();

        await sorting.sortByPriceHighToLow();
        await expect(await inventoryPage.isSortedByPriceDescending()).toBeTruthy();

        await sorting.sortByNameAsc();
        await expect(await inventoryPage.isSortedByNameAscending()).toBeTruthy();
    });
});