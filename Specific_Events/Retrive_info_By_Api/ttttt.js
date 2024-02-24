const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://en.wikipedia.org/wiki/The_World%27s_Billionaires';

const moviesData = {};

async function getHTML() {
  const{data:html} = await axios.get(url);
  return html;
};

getHTML().then((res) => {
      const $ = cheerio.load(res);
      $('.wikitable > tbody > tr').each((i, row) => {
        const title = $(row).find('td:eq(1) a').text();
        const rating = $(row).find('td:eq(3)').text(); // Accessing the second <td>
        moviesData["new name " + title] = " Parti " + rating;
      });
      
      fs.writeFile('RichestData.json', JSON.stringify(moviesData), (err) => {
          if (err) {
            console.log("errorrr");
          };
          console.log('file succesfully saved!');
      });
  });