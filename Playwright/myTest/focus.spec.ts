import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('focus test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial");

    const fullname = await page.locator('#Form_getForm_Name');
    fullname.focus();
    fullname.fill("hello testing");

    await page.waitForTimeout(10000);
})