import { test, Page, Browser, expect, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import { log } from 'console';


test('dropdown test case1 ', async () => {

    const browserInfo: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browserInfo.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropDown = 'select#Contact_CountryCode';

    // by value 
    //    await page.selectOption(countryDropDown, { value: 'AD' });

    //by text
    // await page.selectOption(countryDropDown, { label: 'India' });

    // by index
    // await page.selectOption(countryDropDown, { index: 10 });


    // select#Contact_CountryCode > option

    // it will return the array simillar to findElements 
    const allOptions = await page.$$(countryDropDown + '> option');
    console.log(allOptions.length);

    for (const e of allOptions) {
        // it will fetch the paticular txt 
        const text = await e.textContent();
        console.log(text);
        if (text == 'India') {
            await page.selectOption(countryDropDown, { label: text });
            break;
        }

    }

    await new Promise(() => { })

});