import { AuditPlatformAdminFePage } from './app.po';

describe('audit-platform-admin-fe App', () => {
  let page: AuditPlatformAdminFePage;

  beforeEach(() => {
    page = new AuditPlatformAdminFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
