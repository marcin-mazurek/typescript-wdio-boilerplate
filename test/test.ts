import { expect } from 'chai';

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title = browser.getActiveElement();
    expect(title).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});
