import { DemocracyNowPage } from './app.po';

describe('democracy-now App', function() {
  let page: DemocracyNowPage;

  beforeEach(() => {
    page = new DemocracyNowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
