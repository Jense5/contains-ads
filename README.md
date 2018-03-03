# Contains Ads

Checks if the specified url contains advertisements.

```sh
$ yarn add contains-ads
```

```js
const { client, initialize, containsAds } = require('contains-ads');

initialize().then(() => {

  // Easylist is the used by default, but you can add custom rules.
  // Visit abp for more information (https://adblockplus.org/filters).
  client.parse('||blacklistwebsite.com')
  client.parse('@@||whitelistwebsite.com');
  
  containsAds('http://www.twitter.com');          // False
  containsAds('http://www.blabal.com&ad_type_');  // True
});
```

```
# Development commands -
$ yarn test     # Runs the tests
$ yarn build    # Parses the list of blocked sites
$ yarn update   # Updates the list of blocked sites
```