import { test, Page, Browser, Locator, chromium, expect } from '@playwright/test'
import { } from '@playwright/test'


test('fill form', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // type of email is locator
    const emailID: Locator = await page.locator("#input-email");
    const emailPass: Locator = await page.locator("#input-password");
    const loginBttn: Locator = await page.locator("[type='submit']");
    const logoutBttn: Locator = await page.locator("(//a[text()='Logout'])[2]");
    const registerBttn: Locator = await page.locator("(//a[text()='Register'])[2]");
    const fname: Locator = await page.locator("#input-firstname");
    const lname: Locator = await page.locator("#input-lastname");
    const contact: Locator = await page.locator("#input-telephone");
    const confirmPass: Locator = await page.locator("#input-confirm");
    const checkbox: Locator = await page.locator("[name='agree']");
    const continueBttn: Locator = await page.locator("[value='Continue']");


    await registerBttn.click();

    function getRandomString(length: number): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }


    // for sendkeys we use .fill method 
    await fname.fill("Testing1234");
    await lname.fill("Code");
    // await emailID.fill(getRandomString(5) + "@yopmail.com");
    await emailID.fill("john1234@yopmail.com")
    await contact.fill("1234567890")
    await emailPass.fill("hello@123");
    await confirmPass.fill("hello@123");

    await checkbox.click();
    await continueBttn.click();

    const title = await page.title();
    console.log("title: ", title);


    expect(title).toEqual("Your Account Has Been Created!");

    await new Promise(() => { });

});
