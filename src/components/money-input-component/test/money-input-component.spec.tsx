import { newSpecPage } from '@stencil/core/testing';
import { MoneyInputComponent } from '../money-input-component';
import { moneyEventData } from '../../../models/ImoneyInput';

describe('money-input-component', () => {
  it('should emit valueChange event with truthy values when input value is valid', async () => {

    const page = await newSpecPage({
      components: [MoneyInputComponent],
      html: `<money-input-component></money-input-component>`,
    });

    let emittedValue: moneyEventData;
    page.root.addEventListener('valueChange', (e: CustomEvent) => emittedValue = e.detail);

    const dolllarsInput = page.root.shadowRoot.querySelector('#dollars-input') as HTMLInputElement;
    dolllarsInput.value = '5';
    dolllarsInput.dispatchEvent(new Event('input'));

    await page.waitForChanges();

    expect(emittedValue.isValid).toBeTruthy();
    expect(emittedValue.value).toBe('5.0');

  });


  it('should emit valueChange event with falsy values when input value is invalid', async () => {

    const page = await newSpecPage({
      components: [MoneyInputComponent],
      html: `<money-input-component></money-input-component>`
    });

    let emittedValue: moneyEventData;
    page.root.addEventListener('valueChange', (e: CustomEvent) => emittedValue = e.detail);

    const dolllarsInput = page.root.shadowRoot.querySelector('#dollars-input') as HTMLInputElement;
    dolllarsInput.value = 'abc';
    dolllarsInput.dispatchEvent(new Event('input'));

    await page.waitForChanges();

    expect(emittedValue.isValid).toBeFalsy();
    expect(emittedValue.value).toBe('abc.0');
  });

});
