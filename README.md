# Contains Ads

Function to check if a url contains an ad or not.

```sh
$ yarn add contains-ads
```

### Basic Example

```js
import { initialize, containsAds } from 'is-ad';

// Optionally pass the current url for extra precision.
initialize().then(() => {
  containsAds('http://www.twitter.com');                         // False
  containsAds('http://www.blabal.com&ad_type_');                 // True
  containsAds('http://www.blabal.com&ad_type_', 'sample.com');   // True
});
```

### Advanced Example

```js
import { initialize, containsAds, client } from 'is-ad';

// You can also parse custom rules. Check the adblock plus docs
// for more information (https://adblockplus.org/filters).
client.parse('||blacklistwebsite.com')
client.parse('@@||whitelistwebsite.com');

initialize().then(() => {
  containsAds('http://www.blacklistwebsite.com');    // True
  containsAds('http://www.whitelistwebsite.com');    // False
});
```

### Development

```py
# Run tests with mocha.
$ yarn test

# Rebuild the blocker/blocked.txt to a buffer.
$ yarn build:detector
```