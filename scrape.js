const puppeteer = require('puppeteer');
var d = new Date;
var date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();

const scrape = async (url, type, path, callback)=>{

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(url);
	await page.setViewport({ width: 1680, height: 1050, deviceScaleFactor: 2});
    
    const message = [];
    
	if(type=='jpeg'){
		const options = {
		path: path + `/${date}.jpeg`,
		fullPage: true,
		type: 'jpeg',
		quality: 100
		}
		await page.screenshot(options)
			.then( () => {
				message.push({
                    msg: "Saved Screenshot"
                })
			});
	} else if(type=='pdf'){
		await page.pdf({
	    	path: path + `${date}.pdf`,
	   		format: 'A4'
		  })
		  .then( () => {
            message.push({
                msg: "Saved PDF"
            })
		  });
	}
	
	await browser.close()
		.then( () => {
			message.push({
                msg: "Completed task. Browser Closed"
            })
            callback(message);
		})
}

module.exports = scrape;