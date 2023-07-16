import { newE2EPage } from '@stencil/core/testing';

describe('money-input-component', () => {

  it('should render correctly with valid inputs', async () => {
    const page = await newE2EPage();
    await page.setContent('<money-input-component></money-input-component>');

    const dollarInput = await page.find('money-input-component >>> #dollars-input');

    await dollarInput.type('10');
    await page.waitForChanges();

    expect(await dollarInput.getProperty('value')).toBe('010');
  });


  it('should show error message for invalid input', async () => {
    const page = await newE2EPage();
    await page.setContent('<money-input-component></money-input-component>');

    const dollarInput = await page.find('money-input-component >>> #dollars-input');

    await dollarInput.type('aa');
    await page.waitForChanges();

    expect(await dollarInput.getProperty('value')).toBe('0aa');
  });
});
