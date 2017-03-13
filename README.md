
# isAd?

**Check if a request is an add.**  
You can use this. You should not. In development.  
I will add more lists later this week.

```sh
$ npm install --save is-ad
```

```js
import { initialize, isAd } from 'is-ad';

// Initializes in less then 0.014s. Don't worry.
initialize().then(() => {

  // Detect simple ad requests.
  isAd('http://www.blabal.com&ad_type_'); // True
  isAd('http://www.twitter.com');         // False

  // Add base url of the site that requests the url for extra precision.
  isAd('http://www.blabal.com&ad_type_', 'blabal.com');   // True
  isAd('http://www.twitter.com', 'twitter.com');          // False

});
```
