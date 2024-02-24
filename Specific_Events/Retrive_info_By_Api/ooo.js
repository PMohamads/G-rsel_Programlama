const fs = require('fs');

const readAndPrintJsonFile = (filePath) => {
  try {
    // Read the content of the JSON file
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON data
    const parsedData = JSON.parse(jsonData);

    // Print the parsed data
    console.log(parsedData);
  } catch (error) {
    console.error('Error reading or parsing the JSON file:', error);
  }
};

// Specify the path to your JSON file
const jsonFilePath = './moviesData2.json';

// Call the function with the file path
readAndPrintJsonFile(jsonFilePath);
