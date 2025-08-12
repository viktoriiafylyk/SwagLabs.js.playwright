const SELECTORS = {
    inventoryContainer: '[data-test="inventory-container"]',
    inventoryItem: '[data-test="inventory-item"]',
    sortContainer: '[data-test="product-sort-container"]',
    removeFromCartButton: "button[data-test^='remove-sauce-labs']",
    productName: '[data-test="inventory-item-name"]',
    productPrice: '[data-test="inventory-item-price"]'
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

    async isOnInventoryPage() {
        return await this.inventoryContainer.isVisible();
    }

    async areProductsDisplayed() {
        return await this.inventoryItem.count();
    }

    async clickOnSortComponent() {
        await this.sortContainer.click();
    }

    async isSortedByNameAscending() {
        const names = await this.productName.allTextContents();
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        return names.join('') === sortedNames.join('');
    }

    async isSortedByNameDescending() {
        const names = await this.productName.allTextContents();
        return names.every((name, i) => i === 0 || names[i - 1].localeCompare(name) >= 0);
    }

    async isSortedByPriceAscending() {
        const prices = await this.productPrice.allTextContents();
        const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
        return numericPrices.every((price, i) => i === 0 || numericPrices[i - 1] <= price);
    }

    async isSortedByPriceDescending() {
        const prices = await this.productPrice.allTextContents();
        const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
        return numericPrices.every((price, i) => i === 0 || numericPrices[i - 1] >= price);
    }
}