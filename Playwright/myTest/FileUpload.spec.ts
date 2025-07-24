import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';
import path from 'path';


test('file upload code ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    // await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");


    // // single files
    // await page.locator("input[name='upfile']").setInputFiles("./homepage.jpg");

    // for multiple photos
    await page.goto("https://devidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("input[name='filesToUpload")
        .setInputFiles([path.join(""), path.join("")]);

    // deselect files:
    await page.locator("input[name='filesToUpload']").setInputFiles([]);

    await page.waitForTimeout(10000);
})
