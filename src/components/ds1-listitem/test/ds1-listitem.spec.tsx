import { newSpecPage } from '@stencil/core/testing';
import { Ds1Listitem } from '../ds1-listitem';

describe('ds1-listitem', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Ds1Listitem],
      html: `<ds1-listitem></ds1-listitem>`,
    });
    expect(page.root).toEqualHtml(`
      <ds1-listitem>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds1-listitem>
    `);
  });
});
