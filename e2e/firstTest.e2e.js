describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show target screen after tap goal 13', async () => {
    await element(by.id('goal-list')).scroll(2000, 'down');
    await element(by.id('goalItem-13')).tap();
    await expect(element(by.text('Target'))).toBeVisible();
  });
});
