const puppeteer = require('puppeteer');
var d = new Date;
var date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();

const scrape = async (url, type)=>{

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(url);
	await page.setViewport({ width: 1680, height: 1050 });

	if(type=='jpeg'){
		const options = {
		path: `C:/Users/naksh/Pictures/Github-Screenshots/${date}.jpeg`,
		fullPage: true,
		type: 'jpeg',
		quality: 100
		}
		await page.screenshot(options);
	} else if(type=='pdf'){
		await page.pdf({
	    	path: `C:/Users/naksh/Pictures/Github-Screenshots/${date}.pdf`,
	   		format: 'A4'
	  	});
	}
	
	await browser.close();
	console.log('Done');
}

// Specify the url and type as scrape(url, pdf)
scrape('https://github.com/NakshatraCodes', 'pdf');
scrape('https://github.com/NakshatraCodes', 'jpeg');
