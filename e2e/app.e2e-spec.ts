import { FireappEveroPage } from './app.po';

describe('fireapp-evero App', () => {
  let page: FireappEveroPage;

  beforeEach(() => {
    page = new FireappEveroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
