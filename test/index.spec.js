import { expect } from 'chai';
import { tic, toc } from 'tic-toc';
import { initialize, isAd } from '../src/index';

describe('Default tests', () => {
  it('should detect ad', (done) => {
    tic();
    initialize().then(() => {
      console.log(toc());
      expect(isAd('http://www.blabal.com&ad_type_')).to.equal(true);
      done();
    }).catch(done);
  });
  it('should not detect twitter', (done) => {
    tic();
    initialize().then(() => {
      console.log(toc());
      expect(isAd('http://www.twitter.com')).to.equal(false);
      done();
    }).catch(done);
  });
});
