import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('focus test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    // dynamically wait 
    // it waits untill all network calls has been resolved

    // await page.waitForLoadState('networkidle'); // it might be flaky 
    await page.locator(".card-body b").first().waitFor();
    
    const tiles = await page.locator(".card-body b").allTextContents();
    console.log(tiles);




    await page.waitForTimeout(10000);
})