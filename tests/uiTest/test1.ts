import {test, expect, Browser, Page} from '@playwright/test'
import { webkit, chromium } from '@playwright/test'

test('polestarVerification',async()=>{
    const browser:Browser = await chromium.launch({headless:true});
    const page:Page=await browser.newPage();
    await page.goto("https://www.polestar.com/se");

    const title=await page.title();
    console.log("Home Page Title : ",title);

    await page.screenshot({path:'homepage.png'});

    expect(title).toEqual('Polestar - Elbilar | Polestar Sverige');

    browser.close();

});