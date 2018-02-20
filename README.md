# contains-ad

Function to check if a url contains an ad or not.

```sh
$ yarn add contains-ad
```

### Basic Example

```js
import { initialize, containsAd } from 'is-ad';

// Optionally pass the current url for extra precision.
initialize().then(() => {
  containsAd('http://www.twitter.com');                         // False
  containsAd('http://www.blabal.com&ad_type_');                 // True
  containsAd('http://www.blabal.com&ad_type_', 'sample.com');   // True
});
```

### Advanced Example

```js
import { initialize, containsAd, client } from 'is-ad';

// You can also parse custom rules. Check the adblock plus docs
// for more information (https://adblockplus.org/filters).
client.parse('||blacklistwebsite.com')
client.parse('@@||whitelistwebsite.com');

initialize().then(() => {
  containsAd('http://www.blacklistwebsite.com');    // True
  containsAd('http://www.whitelistwebsite.com');    // False
});
```

### Development

```py
# Run tests with mocha.
$ yarn test

# Rebuild the blocker/blocked.txt to a buffer.
$ yarn build:detector
```