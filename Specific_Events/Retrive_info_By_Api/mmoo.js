const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.imdb.com/chart/top/';
const moviesData = [];

async function getHTML() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  };

  try {
    const { data: html } = await axios.get(url, { headers });
    return html;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    throw error;
  }
}

getHTML().then((res) => {
  const $ = cheerio.load(res);

  $('ul > li').each((i, element) => {
    if (i > 0) {
      const Name = $(element).find('a > h3').text();
      const ImageSrc = $(element).find('img').attr('src');
      const Year = $(element).find('.sc-1e00898e-7 > span:eq(0)').text();
      if (Name && Year) {
        moviesData.push({ id: i, Name, Year, ImageSrc });
      }
    }
  });

  fs.writeFile('moviesData2.json', JSON.stringify(moviesData), (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log('File successfully saved!');
    }
  });
}).catch((error) => {
  console.error('Error in getHTML:', error);
});
