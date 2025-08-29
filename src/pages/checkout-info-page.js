import { isErrorDisplayed, getErrorText } from 'utils/error-utils.js';

const SELECTORS = {
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    cancelButton: '[data-test="cancel"]',
    continueButton: '[data-test="continue"]',
    errorMessage: '[data-test="error"]'
}

export class CheckoutInfoPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator(SELECTORS.firstName);
        this.lastName = page.locator(SELECTORS.lastName);
        this.postalCode = page.locator(SELECTORS.postalCode);
        this.cancelButton = page.locator(SELECTORS.cancelButton);
        this.continueButton = page.locator(SELECTORS.continueButton);
        this.errorMessage = page.locator(SELECTORS.errorMessage);
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async fillTheCheckoutForm(firstName, lastname, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalCode);
    }

    async isErrorDisplayed() {
        return await isErrorDisplayed(this.errorMessage);
    }

    async getErrorText() {
        return await getErrorText(this.errorMessage);
    }
}
