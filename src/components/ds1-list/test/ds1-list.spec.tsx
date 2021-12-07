import { newSpecPage } from '@stencil/core/testing';
import { Ds1List } from '../ds1-list';

describe('ds1-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Ds1List],
      html: `<ds1-list></ds1-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ds1-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds1-list>
    `);
  });
});
