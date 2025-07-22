import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('login test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // type of email is locator
    const emailID: Locator = await page.locator("#input-email");
    const emailPass: Locator = await page.locator("#input-password");
    const loginBttn: Locator = await page.locator("[type='submit']");

    // for sendkeys we use .fill method 

    await emailID.fill("john@yopmail.com");
    await emailPass.fill("Hello@123");
    await loginBttn.click();

    // get title and it will return string ;
    const tittle = await page.title();
    console.log("home page title: ", tittle);

    // for screenshot .. 
    await page.screenshot({ path: 'hompage.png' });

    // assertions
    await expect(tittle).toEqual('My Account');

    // browserInfo.close();

    await new Promise(() => { });
});
