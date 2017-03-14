
# isAd?

**Check if a request is an ad.**  
You can use this. You should not. In development.  
I will add more lists later this week.

```sh
$ npm install --save is-ad
```

```js
import { initialize, isAd, client } from 'is-ad';

// Initializes in less than 0.014s. Don't worry.
initialize().then(() => {

  // Detect simple ad requests.
  isAd('http://www.blabal.com&ad_type_'); // True
  isAd('http://www.twitter.com');         // False

  // Add base url of the site that requests the url for extra precision.
  isAd('http://www.blabal.com&ad_type_', 'blabal.com');   // True
  isAd('http://www.twitter.com', 'twitter.com');          // False

});

// You can also use the client to provide custom rules as described in the brave ad-block.
// (https://github.com/brave/ad-block) For example, blacklist a website:
client.parse('||blacklistwebsite.com')
// Check this page for rule info: https://adblockplus.org/filters.
// This means you can also whitelist a website:
client.parse('@@||whitelistwebsite.com');
```
