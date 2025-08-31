import { test, expect } from '../fixtures/login-fixture';
import { HeaderComponent } from "src/component/header-component";
import { CartPage } from "src/pages/cart-page";
import { CheckoutInfoPage } from "src/pages/checkout-info-page";
import { InvalidCheckoutData } from "utils/data/invalid-checkout-data";
import { isErrorDisplayed, getErrorText } from 'utils/error-utils.js';

test.describe('Checkout Info - validation of empty fields', () => {
    Object.entries(InvalidCheckoutData).forEach(([caseName, data]) => {
        test(`Verify checkout with ${caseName}`, async ({ inventoryPage, page }) => {
            const header = new HeaderComponent(page);

            await inventoryPage.addProductsToCart(1);
            await header.clickCartButton();

            const cartPage = new CartPage(page);
            await cartPage.clickCheckoutButton();

            const checkoutInfoPage = new CheckoutInfoPage(page);
            await checkoutInfoPage.fillTheCheckoutForm(data.firstName, data.lastName, data.postalCode);
            await checkoutInfoPage.clickContinueButton();

            expect(await isErrorDisplayed(checkoutInfoPage.errorMessage)).toBeTruthy();
            expect(await getErrorText(checkoutInfoPage.errorMessage)).toBe(data.expectedError);
        });
    });
});
