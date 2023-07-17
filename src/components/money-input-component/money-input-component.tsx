import { Component, Prop, State, Event, EventEmitter, h, Host } from '@stencil/core';
import { decimalValidator } from '../../utils/utils';

@Component({
  tag: 'money-input-component',
  styleUrl: 'money-input-component.css',
  shadow: true,
})
export class MoneyInputComponent {

  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() validator: string = decimalValidator;
  @State() dollars: string;
  @State() cents: string;

  @Event() valueChange: EventEmitter;

  componentWillLoad() {
    this.reset();
  }

  //todo : move to util
  private validateValue(value: string): boolean {
    const regex = new RegExp(this.validator);
    return regex.test(value);
  }

  handleInputChange(event: Event, type: string) {
    const target = event.target as HTMLInputElement;

    if (!target) return;

    if (type === 'dollars') this.dollars = target.value || '0';
    else this.cents = target.value || '0';

    const result = this.processReturnValue();

    this.valueChange.emit(result);
  }

  private processReturnValue() {
    let value = `${this.dollars}.${this.cents}`;
    let isValid = false;

    if (value === '0.0') {
      value = null;

      // if value entered is zero and its not a required field
      if (!this.required) isValid = true
    } else {
      isValid = this.validateValue(value);
    }

    return { value, isValid };
  }

  reset() {
    this.dollars = '0';
    this.cents = '0';
  }

  render() {
    return (
      <Host>
        <h3>Enter Amount</h3>

        <div class="ipnut-container">
          <span>€
            <input type="text"
              value={this.dollars}
              id="dollars-input"
              onInput={(event: Event) => this.handleInputChange(event, 'dollars')}
              required={this.required} disabled={this.disabled}
              aria-required="true"
              aria-label="Money Input" />
          </span>

          <span>,</span>

          <input type="text"
            value={this.cents}
            id="cents-input"
            onInput={(event: Event) => this.handleInputChange(event, 'cents')}
            disabled={this.disabled} />

        </div>
      </Host>
    );
  }

}
