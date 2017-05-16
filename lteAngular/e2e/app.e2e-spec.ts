import { LteAngularPage } from './app.po';

describe('lte-angular App', () => {
  let page: LteAngularPage;

  beforeEach(() => {
    page = new LteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
