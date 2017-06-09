import { TcheckerPage } from './app.po';

describe('tchecker App', () => {
  let page: TcheckerPage;

  beforeEach(() => {
    page = new TcheckerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
