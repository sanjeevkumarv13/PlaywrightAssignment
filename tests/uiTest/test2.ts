import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium } from '@playwright/test'

test('polestarVerification',async()=>{
    const browser:Browser = await chromium.launch({headless:true});
    const page:Page=await browser.newPage();
    await page.goto("https://www.polestar.com/se");

    const trackExp:Locator = await page.locator('text=Track experiences');
    const uptrackButton:Locator=await page.locator('id=NR6PdAMJTICkp6zLlgE7RA');
    const polestarExpLbl:Locator=await page.locator('text=Polestar experiences');
    const trackAvailable = await trackExp.isVisible;
    console.log(trackAvailable);
    await uptrackButton.click();
    expect(polestarExpLbl.textContent).toEqual('Polestar experiences');
    await page.screenshot({path:'trackExp.png'});

    browser.close();

});