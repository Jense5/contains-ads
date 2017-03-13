import { expect } from 'chai';
import { initialize, isAd } from '../src/index';

describe('Default tests', () => {
  it('should detect ad', (done) => {
    initialize().then(() => {
      expect(isAd('http://www.somesite.com/public/ad/some-ad')).to.equal(true);
      done();
    }).catch(done);
  });
  it('should not detect twitter', (done) => {
    initialize().then(() => {
      expect(isAd('http://www.twitter.com')).to.equal(false);
      done();
    }).catch(done);
  });
});
