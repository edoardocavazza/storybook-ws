import { newE2EPage } from '@stencil/core/testing';

describe('ds1-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds1-list></ds1-list>');

    const element = await page.find('ds1-list');
    expect(element).toHaveClass('hydrated');
  });
});
