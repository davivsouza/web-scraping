import puppeteer from "puppeteer";
const url = process.argv[2]

if(!url){
  throw "Please provide a URL as the fist argument"
}
async function run(){
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()
  await page.setViewport({width: 1500, height: 1200, deviceScaleFactor: 1})
  await page.goto(url)
  await page.screenshot({path:"screenshot.png"})

  browser.close()
}

run()