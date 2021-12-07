import { Component, Host, h, Event, Prop, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ds1-listitem',
  styleUrl: 'ds1-listitem.css',
  shadow: true,
})
export class Ds1Listitem {
  /**
   * The checked state of the component.
   */
  @Prop() checked = false;

  /**
   * Qui posso scrivere la doc dell'evento.
   */
  @Event({eventName: 'checked'}) checkBoxClicked: EventEmitter;

  /**
   *
   */
  @Method()
  async checkedHandler(): Promise<void> {
    this.checked = !this.checked;
    console.log('clickHandler');
  }

  @Method()
  async keyDownHandler(keyCode) {
    if(keyCode == 32) {
      this.checked = !this.checked
    }
  }

  render() {
    return (
      <Host role="listitem" tabindex="0">
          <div role="checkbox" aria-checked={this.checked ? 'true' : 'false'} tabindex="0" onClick={() => {
            this.checkedHandler();
          }} onKeyDown={(e: KeyboardEvent) => {
              this.keyDownHandler(e.keyCode);
          }}></div>
          <div role="switch" aria-checked="false" tabindex="0">favorite</div>
          <slot name="item"/>
          <img alt="" />
      </Host>
    );
  }

}
