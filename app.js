const puppeteer = require('puppeteer');
var d = new Date;
var date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();

const takescreenshot = async ()=>{

	const browser = await puppeteer.launch();

	const page = await browser.newPage();
	const options = {
		path: `C:/Users/naksh/Pictures/Github-Screenshots/${date}.jpeg`,
		fullPage: true,
		type: 'jpeg',
		quality: 100
	}

	await page.goto('https://github.com/NakshatraCodes');
	await page.setViewport({ width: 1680, height: 1050 });
	await page.screenshot(options);

	await browser.close();
	console.log('Done');
}

const takepdf = async ()=>{

	const browser = await puppeteer.launch();

	const page = await browser.newPage();

	await page.goto('https://github.com/NakshatraCodes', {waitUntil: 'networkidle2'});
	await page.setViewport({ width: 1680, height: 1050 });
	  await page.pdf({
	    path: `C:/Users/naksh/Pictures/Github-Screenshots/${date}.pdf`,
	    format: 'A4'
	  });

	await browser.close();
	console.log('Done');
}

takescreenshot();
takepdf();