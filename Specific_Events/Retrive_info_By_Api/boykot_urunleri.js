const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const foodurl = 'https://boycott.thewitness.news/categories/food';
const clothurl = 'https://boycott.thewitness.news/categories/clothing';
const teknolojiUrl = 'https://boycott.thewitness.news/categories/technology';
const drinksurl = 'https://boycott.thewitness.news/categories/drinks';
const kozmatiksurl = 'https://boycott.thewitness.news/categories/cosmetics';
const enerjiurl = 'https://boycott.thewitness.news/categories/energy';
const coffeeurl = 'https://boycott.thewitness.news/categories/coffee';
const charityurl = 'https://boycott.thewitness.news/categories/charity';
const healthurl = 'https://boycott.thewitness.news/categories/healthcare';
const temizlikurl = 'https://boycott.thewitness.news/categories/household';

const gida = {};
const giyim = {};
const tekno = {};
const icecek = {};
const kozmatik = {};
const kalan = {};

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function fetchDataAndProcess(url, dataObject) {
  const html = await getHTML(url);
  const $ = cheerio.load(html);

  let counter = Object.keys(dataObject).length + 1; // Counter starts from the next available index

  $('.m-e615b15f').each((i, row) => {
    if (i > 0) {
      const ImageSrc = $(row).find('img').attr('src');
      const MarkaName = $(row).find('p').text().trim();

      // Replace '.' with ','
      const formattedMarketName = MarkaName.replace(/\./g, ',');

      dataObject[counter] = {
        MarketName: formattedMarketName,
        ImageSrc: ImageSrc,
      };

      counter++; // Increment counter for the next iteration
    }
  });
}

async function main() {
  await fetchDataAndProcess(foodurl, gida);
  await fetchDataAndProcess(clothurl, giyim);
  await fetchDataAndProcess(teknolojiUrl, tekno);
  await fetchDataAndProcess(drinksurl, icecek);
  await fetchDataAndProcess(kozmatiksurl, kozmatik);

  // Concatenate data from multiple URLs into kalan object
  const kalanUrls = [enerjiurl, coffeeurl, healthurl, charityurl, temizlikurl];
  for (const url of kalanUrls) {
    await fetchDataAndProcess(url, kalan);
  }

  const items = {
    gida,
    giyim,
    tekno,
    icecek,
    kozmatik,
    kalan,
  };

  fs.writeFile('items.json', JSON.stringify(items, null, 2), (err) => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
      console.log('File successfully saved!');
    }
  });
}

main();
