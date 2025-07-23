import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('hover test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://www.spicejet.com");

    await page.getByText('Add-ons').first().hover();
    await page.getByText('Visa Services').first().click();


    await new Promise(() => { })
});