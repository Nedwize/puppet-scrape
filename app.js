const scrape = require("./scrape");

const url = 'https://github.com/NakshatraCodes';
const type = 'jpeg';
const path = 'C:/Users/naksh/Pictures/GitHub-Screenshots';

scrape(url, type, path, (result) => {
    console.log(result)
});

scrape(url, 'pdf', path, (result) => {
    console.log(result)
});
