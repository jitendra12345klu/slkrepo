import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class myPage {

    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public elements = {
        buttonxml: `//button[@id="makeItRain"]`
    }

    async navigateToMyPage() {
        await this.base.goto("https://cat-bounce.com/");
        await this.page.waitForTimeout(3000);
    }
    async clickButton() {
        await this.page.getByRole('button', { name: 'MakeItRain' }).click();
        //await this.page.waitForEvent('popup');
        //const page1Promise = this.page.waitForEvent('popup');
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('link', { name: 'MESSAGE FROM CAT' }).click();
        //const page1 = await page1Promise;
        //await page1.getByRole('heading', { name: 'Am here for crunchies...' }).isVisible();
    }
    async ValuateMyPage() {
        await this.page.getByRole('heading', { name: 'Am here for crunchies...' }).isVisible();
    }
}