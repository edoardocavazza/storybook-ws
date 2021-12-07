import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds1-list',
  styleUrl: 'ds1-list.css',
  shadow: true,
})
export class Ds1List {

  render() {
    return (
      <Host role="list" tabindex="0" aria-label="Users list">
        <slot/>
      </Host>
    );
  }

}
