import { test as base } from "@playwright/test";
import CounterPage from "../pages/counter-page";

type PageFixtures = {
    counterPage: CounterPage;
};

export const test = base.extend<PageFixtures>({
    counterPage: async ({ page }, use) => {
        await use(new CounterPage(page));
    },
})