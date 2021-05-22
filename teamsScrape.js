const puppeteer = require("puppeteer");
const url =
  "https://www.microsoft.com/en-in/microsoft-teams/group-chat-software";

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.setViewport({ width: 1680, height: 1050, deviceScaleFactor: 2 });
  await page.waitForSelector(
    'a[aria-label="Sign in and get started with Teams for business"]'
  );
  await page.click(
    'a[aria-label="Sign in and get started with Teams for business"]'
  );

  console.log("New page");

  await page.waitFor(1000);
  page = (await browser.pages())[2];
  console.log(page.url());

  await page.waitForSelector('input[type="email"]');

  console.log("Waiting for selector and typing...");
  await page.type('input[type="email"]', "nakshatra.saxena@s.amity.edu");
  await page.click('input[type="submit"]');

  await page.waitForSelector('input[type="password"]');

  await page.type('input[type="password"]', "M17F240@1");
  console.log("Clicking Submit");
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.click('input[type="submit"]');
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.click('input[type="submit"]');

  await page.waitForNavigation({ waitUntil: "networkidle2" });
  console.log("Waited");
  await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName("stv-item-inner-container");
    for (var element of elements) data.push(element.textContent);
    console.log(data);
    return data;
  });
};

scrape();
