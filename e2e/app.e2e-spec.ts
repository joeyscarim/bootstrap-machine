import { BootstrapMachinePage } from './app.po';

describe('bootstrap-machine App', () => {
  let page: BootstrapMachinePage;

  beforeEach(() => {
    page = new BootstrapMachinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
