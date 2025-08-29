import {test, expect} from '../fixtures/login-fixture';
import {FooterComponent} from 'src/component/footer-component';

test.describe('Footer social media links', () => {
    test('Verify footer links and copyright text', async ({inventoryPage}) => {
        const footer = new FooterComponent(inventoryPage.page);

        expect(await footer.isFooterVisible()).toBeTruthy();

        expect(await footer.isTwitterLinkDisplayed()).toBeTruthy();
        const twitterPage = await footer.clickAndSwitchToNewTab(footer.twitterLink);
        expect(twitterPage.url()).toContain('x.com');
        await twitterPage.close();

        expect(await footer.isFacebookLinkDisplayed()).toBeTruthy();
        const facebookPage = await footer.clickAndSwitchToNewTab(footer.facebookLink);
        expect(facebookPage.url()).toContain('facebook.com');
        await facebookPage.close();

        expect(await footer.isLinkedInLinkDisplayed()).toBeTruthy();
        const linkedInPage = await footer.clickAndSwitchToNewTab(footer.linkedInLink);
        expect(linkedInPage.url()).toContain('linkedin.com');
        await linkedInPage.close();

        const copyrightText = await footer.getCopyrightText();
        expect(copyrightText).toContain('© 2025 Sauce Labs. All Rights Reserved. Terms of Service');
    });
});
