import { test } from '../utils/fixtures';
import { expect } from '@playwright/test';

const startCounterValue = 10;
const counterAppPageTitle = "CounterAPP";
const couterAppPageHeader = "CounterApp";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
})

test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(counterAppPageTitle);
});

test('has header', async ({ counterPage }) => {
    await counterPage.checkIfHeaderTitleIs(couterAppPageHeader);
});

test('check "+1" button', async ({ counterPage }) => {
    await counterPage.clickPlusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue + 1);

    await counterPage.clickPlusOneButtonSeveralTimes(30);
    await counterPage.checkIfCounterValueIs(startCounterValue + 31);
});

test('check "-1" button', async ({ counterPage }) => {
    await counterPage.clickMinusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue - 1);

    await counterPage.clickMinusOneButtonSeveralTimes(30);
    await counterPage.checkIfCounterValueIs(startCounterValue - 31);
});

test('check "Reset" button', async ({ counterPage }) => {
    await counterPage.checkIfCounterValueIs(startCounterValue);

    await counterPage.clickResetButton();
    await counterPage.checkIfCounterValueIs(startCounterValue);

    await counterPage.clickPlusOneButton();
    await counterPage.clickResetButton();
    await counterPage.checkIfCounterValueIs(startCounterValue);

    await counterPage.clickMinusOneButton();
    await counterPage.clickResetButton();
    await counterPage.checkIfCounterValueIs(startCounterValue);
});

test('check mixed counting', async ({ counterPage }) => {
    await counterPage.clickPlusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue + 1);

    await counterPage.clickPlusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue + 2);

    await counterPage.clickMinusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue + 1);

    await counterPage.clickResetButton();
    await counterPage.checkIfCounterValueIs(startCounterValue);

    await counterPage.clickMinusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue - 1);

    await counterPage.clickMinusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue - 2);

    await counterPage.clickPlusOneButton();
    await counterPage.checkIfCounterValueIs(startCounterValue - 1);

    await counterPage.clickResetButton();
    await counterPage.checkIfCounterValueIs(startCounterValue);
});