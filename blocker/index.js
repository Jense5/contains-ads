const fs = require('fs');
const path = require('path');
const winston = require('winston');
const Blocker = require('ad-block');

const input = path.resolve(__dirname, 'blocked.txt');
const output = path.resolve(__dirname, '../src/detector.buffer');

winston.info('Reading ' + input + '.');
fs.readFile(input, 'utf8', (error, data) => {
  if (error) { winston.error(error); }
  const urls = data.split('\n');
  const totalSize = urls.length;
  winston.info('Parsing ' + totalSize + ' urls (this can take a couple minutes).');
  const client = new Blocker.AdBlockClient();
  urls.map(line => client.parse(line));
  winston.info('Created buffer.');
  fs.writeFile(output, client.serialize(64), (err) => {
    if (err) { winston.error(err); }
    winston.info('Wrote buffer to src/detector.buffer!');
  });
});
