const SELECTORS = {
    sortContainer: '[data-test="product-sort-container"]',
};

export class SortingComponent {
    constructor(page) {
        this.page = page;
        this.sortDown = page.locator(SELECTORS.sortContainer);
    }

    async sortByNameAsc(){
        await this.sortDown.click();
        await this.sortDown.selectOption('az');
    }

    async sortByNameDesc(){
        await this.sortDown.click();
        await this.sortDown.selectOption('za');
    }

    async sortByPriceLowToHigh(){
        await this.sortDown.click();
        await this.sortDown.selectOption('lohi');
    }

    async sortByPriceHighToLow(){
        await this.sortDown.click();
        await this.sortDown.selectOption('hilo');
    }

}
