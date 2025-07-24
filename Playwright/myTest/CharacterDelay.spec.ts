import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('Enter character by delay test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://www.flipkart.com/");

    // it will enter directly witout any pause by adding delay it will pause for 1 sec for each element.
    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially('Macbook', { delay: 1000 })

    await page.waitForTimeout(10000);
})
