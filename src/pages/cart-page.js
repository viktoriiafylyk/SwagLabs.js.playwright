const SELECTORS = {
    continueShoppingButton: '[data-test="continue-shopping"]',
    checkoutButton: '[data-test="checkout"]',
    removeFromCartButton: "button[data-test^='remove-sauce-labs']",
    itemLinkOnCartPage: '[data-test^="item-"][data-test$="-title-link"]'
}

export class CartPage {
    constructor(page) {
        this.page = page;
        this.continueShoppingButton = page.locator(SELECTORS.continueShoppingButton);
        this.checkoutButton = page.locator(SELECTORS.checkoutButton);
        this.removeFromCartButton = page.locator(SELECTORS.removeFromCartButton);
        this.itemLinkOnCartPage = page.locator(SELECTORS.itemLinkOnCartPage);
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}