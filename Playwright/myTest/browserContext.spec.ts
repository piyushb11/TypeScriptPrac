import { test, Page, Browser, expect, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('login test case1 using browser context ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    const context1 = await browserInfo.newContext();
    const page1 = await context1.newPage();

    // context2 
    const context2 = await browserInfo.newContext();
    const page2 = await context2.newPage();

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // type of email is locator
    const emailID: Locator = await page1.locator("#input-email");
    const emailPass: Locator = await page1.locator("#input-password");
    const loginBttn: Locator = await page1.locator("[type='submit']");

    // for sendkeys we use .fill method 

    await emailID.fill("john@yopmail.com");
    await emailPass.fill("Hello@123");
    await loginBttn.click();

    // get title and it will return string ;
    const tittle = await page1.title();
    console.log("home page title: ", tittle);

    // for screenshot .. 
    await page1.screenshot({ path: 'hompage.png' });

    // assertions
    await expect(tittle).toEqual('My Account');

    // browserInfo.close();

    // type of email is locator for context 2 
    const emailID1: Locator = await page2.locator("#input-email");
    const emailPass1: Locator = await page2.locator("#input-password");
    const loginBttn1: Locator = await page2.locator("[type='submit']");

    // for sendkeys we use .fill method 

    await emailID1.fill("john123@yopmail.com");
    await emailPass1.fill("hello@123");
    await loginBttn1.click();

    // get title and it will return string ;
    const tittle2 = await page2.title();
    console.log("home page title: ", tittle2);

    // for screenshot .. 
    await page2.screenshot({ path: 'hompage2.png' });

    // assertions
    await expect(tittle2).toEqual('My Account');


    await new Promise(() => { });
});



test('open url in normal mode', async () => {
    const browserInfo: BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' });

    // it will return the array
    const pages = await browserInfo.pages();

    const page1: Page = await pages[0];

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // type of email is locator
    const emailID: Locator = await page1.locator("#input-email");
    const emailPass: Locator = await page1.locator("#input-password");
    const loginBttn: Locator = await page1.locator("[type='submit']");

    // for sendkeys we use .fill method 

    await emailID.fill("john@yopmail.com");
    await emailPass.fill("Hello@123");
    await loginBttn.click();

    // get title and it will return string ;
    const tittle = await page1.title();
    console.log("home page title: ", tittle);

    // for screenshot .. 
    await page1.screenshot({ path: 'hompage.png' });

    // assertions
    await expect(tittle).toEqual('My Account');

    await new Promise(() => { });

});