// @flow

import fs from 'fs';
import path from 'path';

// $FlowFixMe: Can't find ad-block... whatever.
import { AdBlockClient, FilterOptions } from 'ad-block'; // eslint-disable-line

export const client = new AdBlockClient();

export const initialize = () =>
  new Promise((resolve, fail) => {
    const bufferPath = path.resolve(__dirname, './detector.buffer');
    fs.readFile(bufferPath, (err, buffer) => {
      if (err) { fail(err); }
      client.deserialize(buffer);
      resolve();
    });
  });

export const isAd = (request: string, base: string = '') =>
  client.matches(request, FilterOptions.noFilterOption, base);
