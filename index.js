import { launch } from 'puppeteer';

export async function scrape() {
   const browser = await launch({})
   const page = await browser.newPage()

   await page.goto('https://www.ou-serrurier.fr/hauts-de-seine/boulogne-billancourt-92100/')
    var element = await page.waitForSelector("#wpbdp-page-all_listings > div > div")
    var text = await page.evaluate(element => element.textContent, element)
    console.log(text)
    browser.close()
}
scrape()