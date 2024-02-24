const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_Turkey';
const moviesData = [];

async function getHTML() {
  const { data: html } = await axios.get(url);
  return html;
}

getHTML().then((res) => {
  const $ = cheerio.load(res);
  $('.wikitable > tbody > tr').each((i, row) => {
    if (i > 0) { // Exclude the first row
      const Name = $(row).find('td:eq(1) a').text().trim();
      const Parti = $(row).find('td:eq(6) a').text().trim();
      const ImageSrc = $(row).find('td:eq(0) a > img').attr('src');

      if (Name && Parti) {
        moviesData.push({ id: i, Name, Parti,ImageSrc});
      }
    }
  });

  fs.writeFile('moviesData.json', JSON.stringify(moviesData, null, 2), (err) => {
    if (err) {
      console.log("errorrr");
    }
    console.log('file succesfully saved!');
  });
});
