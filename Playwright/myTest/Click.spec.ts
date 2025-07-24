import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('dropdown test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // double click
    await page.getByText('Double-Click Me To See Alert').dblclick();

    // right click
    await page.getByText('right click me').click({ button: 'right' });

    // shift+ control
    await page.goto("https://the-internet.herokuapp.com/shifting_content");

    await page.getByText("Example 1: Menu Element").click({ modifiers: ['Shift'] });



    await page.waitForTimeout(10000);
})
