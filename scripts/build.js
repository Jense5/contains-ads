const { AdBlockClient } = require('ad-block'); // eslint-disable-line
const path = require('path');
const fs = require('fs');

const input = path.resolve(__dirname, './blocked.txt');
fs.readFile(input, 'utf8', (error, data) => {
  if (error) { console.log(error); }

  console.log('Parsing...');
  const client = new AdBlockClient();
  data.split('\n').map(line => client.parse(line));
  const buffer = client.serialize(64);

  const output = path.resolve(__dirname, '../src/detector.buffer');
  fs.writeFile(output, buffer, (err) => {
    if (err) { console.log(err); }
    console.log('Finished.');
  });
});
