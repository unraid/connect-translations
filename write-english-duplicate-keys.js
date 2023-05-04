const { readFileSync, writeFileSync } = require("node:fs");
const file = "translations/en_US.json";
const englishFile = readFileSync(file);
const parsed = JSON.parse(englishFile);
const updates = Object.entries(parsed).reduce((acc, [key, val]) => {
  acc[key] = val ?? key;
  return acc;
}, {});

const newEnglishFile = JSON.stringify(updates, null, 2);

writeFileSync(file, newEnglishFile, 'utf-8');
console.log('Finished writing duplicate English Keys');