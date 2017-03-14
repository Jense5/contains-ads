import { expect } from 'chai';
import { tic, toc } from 'tic-toc';
import { initialize, isAd, client } from '../src/index';

describe('Default tests', () => {
  it('should detect ad', (done) => {
    tic();
    initialize().then(() => {
      toc();
      expect(isAd('http://www.blabal.com&ad_type_')).to.equal(true);
      done();
    }).catch(done);
  });
  it('should not detect twitter', (done) => {
    tic();
    initialize().then(() => {
      toc();
      expect(isAd('http://www.twitter.com')).to.equal(false);
      done();
    }).catch(done);
  });
  it('should return and edit client', () => {
    expect(!!client).to.equal(true);
    client.parse('||someEvilSite.com');
    client.parse('@@||someGoodSite.com');
    expect(isAd('http://someEvilSite.com/someGoodPage.html')).to.equal(true);
    expect(isAd('http://someGoodSite.com/someEvilPage.html')).to.equal(false);
  });
});
