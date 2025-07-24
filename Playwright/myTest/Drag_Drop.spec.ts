import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('drag and drop test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");


    // single: 
    // await page.locator("#draggable").dragTo(page.locator("#droppable"));

    // multiple comands:
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();




    await page.waitForTimeout(100000);
})
