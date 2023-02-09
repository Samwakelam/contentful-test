import { ValidationType } from './input-group.definition';

export const Validators = {
  [ValidationType.EMAIL]: (value: string) => {
    const expression: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return expression.test(value);
  },
  [ValidationType.SLUG]: (value: string) => {
    const expression: RegExp = /^\/(\w|\-|\/)*$/;
    return expression.test(value);
  },
  [ValidationType.GENERIC_STRING]: (value: string) => {
    const expression: RegExp = /^[^\n]*$/;
    return expression.test(value);
  },
  [ValidationType.LINK]: (value: string) => {
    let url;

    try {
      url = new URL(value);
      return true;
    } catch (error) {
      return false;
    }
  },
};
