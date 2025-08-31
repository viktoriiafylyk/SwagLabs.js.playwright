const SELECTORS = {
    backToProductsButton: '[data-test="back-to-products"]',
    addToCartButton: '[data-test="add-to-cart"]',
    removeFromCartButton: '[data-test="remove-to-cart"]',
    productPrice: '[data-test="inventory-item-price"]'
}

export class InventoryItemPage {
    constructor(page) {
        this.page = page;
        this.backToProductsButton = page.locator(SELECTORS.backToProductsButton);
        this.addToCartButton = page.locator(SELECTORS.addToCartButton);
        this.removeFromCartButton = page.locator(SELECTORS.removeFromCartButton);
        this.productPrice = page.locator(SELECTORS.productPrice);
    }

    async clickBackToProductsButton() {
        await this.backToProductsButton.click();
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickRemoveFromCartButton() {
        await this.removeFromCartButton.click();
    }
}