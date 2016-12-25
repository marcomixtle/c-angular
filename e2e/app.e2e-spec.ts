import { CAngularPage } from './app.po';

describe('c-angular App', function() {
  let page: CAngularPage;

  beforeEach(() => {
    page = new CAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
