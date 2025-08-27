const SELECTORS = {
    burgerButton: '.bm-burger-button',
    cartButton: '[data-test="shopping-cart-link"]',
    cartCounter: '[data-test="shopping-cart-badge"]'
}

export class HeaderComponent {
    constructor(page) {
        this.page = page;
        this.burgerButton = page.locator(SELECTORS.burgerButton);
        this.cartButton = page.locator(SELECTORS.cartButton);
        this.cartCounter = page.locator(SELECTORS.cartCounter);
    }

    async clickBurgerButton() {
        await this.burgerButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }

    async getCartCount() {
        if (await this.cartCounter.count() === 0) {
            return 0;
        }
        const text = await this.cartCounter.first().textContent();
        return parseInt(text, 10);
    }
}