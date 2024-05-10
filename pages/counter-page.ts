import { Page, expect } from "@playwright/test";

export class CounterPage {
    private readonly counterAppSection = this.page.locator('#app');
    private readonly plusOneButton = this.counterAppSection.getByRole('button', { "name": "+1" });
    private readonly minusOneButton = this.counterAppSection.getByRole('button', { "name": "-1" });
    private readonly resetButton = this.counterAppSection.getByRole('button', { "name": "Reset" });
    private readonly counterValueText = this.counterAppSection.locator('h2');
    private readonly counterAppTitleText = this.counterAppSection.locator('h1');

    constructor(readonly page: Page) { }

    async clickPlusOneButton() {
        await this.plusOneButton.click();
    }

    async clickPlusOneButtonSeveralTimes(repeateAmount: number) {
        for (let i = 0; i < repeateAmount; i++)
            await this.plusOneButton.click();
    }

    async clickMinusOneButton() {
        await this.minusOneButton.click();
    }

    async clickMinusOneButtonSeveralTimes(repeateAmount: number) {
        for (let i = 0; i < repeateAmount; i++)
            await this.minusOneButton.click();
    }

    async clickResetButton() {
        await this.resetButton.click();
    }

    async checkIfCounterValueIs(value: number) {
        await expect((await this.counterValueText.innerHTML()).replace(" ", "").replace(" ", "")).toBe(value.toString());
    }

    async checkIfHeaderTitleIs(value: string) {
        await expect(await this.counterAppTitleText.innerHTML()).toBe(value);
    }
}

export default CounterPage;