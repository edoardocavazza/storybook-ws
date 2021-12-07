import { newE2EPage } from '@stencil/core/testing';

describe('ds1-listitem', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds1-listitem></ds1-listitem>');

    const element = await page.find('ds1-listitem');
    expect(element).toHaveClass('hydrated');
  });
});
