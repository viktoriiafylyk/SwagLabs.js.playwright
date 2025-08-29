import {isErrorDisplayed, getErrorText} from 'utils/error-utils.js';

const SELECTORS = {
    username: '#user-name',
    password: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]'
};

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator(SELECTORS.username);
        this.password = page.locator(SELECTORS.password);
        this.loginButton = page.locator(SELECTORS.loginButton);
        this.errorMessage = page.locator(SELECTORS.errorMessage);
    }

    async visit() {
        await this.page.goto('/');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async isErrorDisplayed() {
        return await isErrorDisplayed(this.errorMessage);
    }

    async getErrorText() {
        return await getErrorText(this.errorMessage);
    }
}