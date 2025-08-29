export async function isErrorDisplayed(locator) {
    return await locator.isVisible();
}

export async function getErrorText(locator) {
    return await locator.textContent();
}