/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MoneyFormComponent {
    }
    interface MoneyInputComponent {
        "disabled": boolean;
        "required": boolean;
        "validator": string;
    }
}
export interface MoneyFormComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMoneyFormComponentElement;
}
export interface MoneyInputComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMoneyInputComponentElement;
}
declare global {
    interface HTMLMoneyFormComponentElement extends Components.MoneyFormComponent, HTMLStencilElement {
    }
    var HTMLMoneyFormComponentElement: {
        prototype: HTMLMoneyFormComponentElement;
        new (): HTMLMoneyFormComponentElement;
    };
    interface HTMLMoneyInputComponentElement extends Components.MoneyInputComponent, HTMLStencilElement {
    }
    var HTMLMoneyInputComponentElement: {
        prototype: HTMLMoneyInputComponentElement;
        new (): HTMLMoneyInputComponentElement;
    };
    interface HTMLElementTagNameMap {
        "money-form-component": HTMLMoneyFormComponentElement;
        "money-input-component": HTMLMoneyInputComponentElement;
    }
}
declare namespace LocalJSX {
    interface MoneyFormComponent {
        "onFormSubmitted"?: (event: MoneyFormComponentCustomEvent<any>) => void;
    }
    interface MoneyInputComponent {
        "disabled"?: boolean;
        "onValueChange"?: (event: MoneyInputComponentCustomEvent<any>) => void;
        "required"?: boolean;
        "validator"?: string;
    }
    interface IntrinsicElements {
        "money-form-component": MoneyFormComponent;
        "money-input-component": MoneyInputComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "money-form-component": LocalJSX.MoneyFormComponent & JSXBase.HTMLAttributes<HTMLMoneyFormComponentElement>;
            "money-input-component": LocalJSX.MoneyInputComponent & JSXBase.HTMLAttributes<HTMLMoneyInputComponentElement>;
        }
    }
}
