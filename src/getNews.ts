import puppeteer from "puppeteer";
const url = "https://news.ycombinator.com/";

interface IResults {
  url: string | null;
  text: string | null;
}

async function run() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    
    const newsLinks = await page.evaluate(() => {
      let result: Array<IResults> = [];
      let items: NodeListOf<Element> = document.querySelectorAll("a.titlelink");
      items.forEach((item: Element) => {
        result.push({
          url: item.getAttribute("href"),
          text: item.textContent,
        });
      });
      
      return result;
    });
    console.log(newsLinks);
    
    browser.close();
    
  } catch (e: any) {
    console.error(e);
  }
}

run()
