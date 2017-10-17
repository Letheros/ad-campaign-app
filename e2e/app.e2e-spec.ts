import { AdCampaignAppPage } from './app.po';

describe('ad-campaign-app App', () => {
  let page: AdCampaignAppPage;

  beforeEach(() => {
    page = new AdCampaignAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
