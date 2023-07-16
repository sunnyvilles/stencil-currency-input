import { Component, State, Listen, h, Event, EventEmitter } from '@stencil/core';
import { decimalValidator } from '../../utils/utils';

@Component({
  tag: 'money-form-component',
  styleUrl: 'money-form-component.css',
  shadow: true,
})
export class MoneyFormComponent {

  @State() isValid: boolean = false;
  @State() moneyValue: string = '';
  @State() errorMessage: string = '';

  @Event() formSubmitted: EventEmitter;

  @Listen('valueChange')
  onValueChange(ev: CustomEvent) {
    this.moneyValue = ev.detail.value;
    this.errorMessage = '';

    if (!ev.detail.isValid) this.errorMessage = 'Input value is not valid!';
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('submitted value: ', this.moneyValue)

    this.formSubmitted.emit(this.moneyValue);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <money-input-component validator={decimalValidator} required={true}></money-input-component>

        <button
          type="submit"
          disabled={!!this.errorMessage}>
          Submit
        </button>

        {this.errorMessage && <p class="error-message">{this.errorMessage}</p>}

      </form >
    )
  }
}
