import { TholangPage } from './app.po';

describe('tholang App', function() {
  let page: TholangPage;

  beforeEach(() => {
    page = new TholangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
