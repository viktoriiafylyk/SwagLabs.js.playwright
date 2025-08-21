const SELECTORS = {
    footer: '.footer',
    twitterLink: 'a[data-test="social-twitter"]',
    facebookLink: 'a[data-test="social-facebook"]',
    linkedInLink: 'a[data-test="social-linkedin"]',
    copyright: '.footer .footer_copy'
}

export class FooterComponent {

    constructor(page) {
        this.page = page;
        this.footer = page.locator(SELECTORS.footer);
        this.twitterLink = page.locator(SELECTORS.twitterLink);
        this.facebookLink = page.locator(SELECTORS.facebookLink);
        this.linkedInLink = page.locator(SELECTORS.linkedInLink);
        this.copyright = page.locator(SELECTORS.copyright);
    }

    async isFooterVisible() {
        return this.page.isVisible(SELECTORS.footer);
    }

    async isTwitterLinkDisplayed() {
        return this.page.isVisible(SELECTORS.twitterLink);
    }

    async isFacebookLinkDisplayed() {
        return this.page.isVisible(SELECTORS.facebookLink);
    }

    async isLinkedInLinkDisplayed() {
        return this.page.isVisible(SELECTORS.linkedInLink);
    }

    async clickAndSwitchToNewTab(link) {
        await link.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            link.click({force: true})
        ]);
        return newPage;
    }

    async getCopyrightText() {
        return this.page.textContent(SELECTORS.copyright);
    }
}

export {expect} from '@playwright/test';