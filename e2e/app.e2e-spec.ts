import { TickPage } from './app.po';

describe('Owlee App', function() {
  let page: TickPage;

  beforeEach(() => {
    page = new TickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
