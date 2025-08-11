const SELECTORS = {
    inventoryContainer:'[data-test="inventory-container"]',
    inventoryItem:'[data-test="inventory-item"]',
    sortContainer: '[data-test="product-sort-container"]',
    removeFromCartButton:"button[data-test^='remove-sauce-labs']",
    productName:'[data-test="inventory-item-name"]',
    productPrice:'[data-test="inventory-item-price"]'
   ///sortingComponent:;
};

export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator(SELECTORS.inventoryContainer);
        this.inventoryItem = page.locator(SELECTORS.inventoryItem);
        this.sortContainer = page.locator(SELECTORS.sortContainer);
        this.removeFromCartButton = page.locator(SELECTORS.removeFromCartButton);
        this.productName = page.locator(SELECTORS.productName);
        this.productPrice = page.locator(SELECTORS.productPrice);
    }

    async isOnInventoryPage(){
        return await this.inventoryContainer.isVisible();
    }
    async areProductsDisplayed(){
        return await this.inventoryItem.count();
    }

    async clickOnSortComponent(){
        await this.sortContainer.click();
    }
}