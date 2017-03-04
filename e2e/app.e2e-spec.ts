import { LooktestPage } from './app.po';

describe('looktest App', () => {
  let page: LooktestPage;

  beforeEach(() => {
    page = new LooktestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
