const scrape = require("./scrape");

const url = 'https://github.com/NakshatraCodes';
const type = 'jpeg';
const path = 'C:/Users/naksh/Pictures';

scrape(url, type, path , (result) => {
    console.log(result)
});
