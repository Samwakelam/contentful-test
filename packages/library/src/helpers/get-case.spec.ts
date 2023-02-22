import { describe, expect, it } from 'vitest';
import {
  getCamelCase,
  getCase,
  getKebabCase,
  getPascalCase,
  getSentenceCase,
} from './get-case.helper';

describe('getSentenceCase', () => {
  it('should create a sentence case string from an array of strings', () => {
    const array = ['a', 'sentence', 'case', 'string'];

    const string = getSentenceCase(array);

    expect(string).toEqual('a sentence case string');
  });
});

describe('getCamelCase', () => {
  it('should create a sentence case string from an array of strings', () => {
    const array = ['a', 'camel', 'case', 'string'];

    const string = getCamelCase(array);

    expect(string).toEqual('aCamelCaseString');
  });
});

describe('getKebabCase', () => {
  it('should create a sentence case string from an array of strings', () => {
    const array = ['a', 'kebab', 'case', 'string'];

    const string = getKebabCase(array);

    expect(string).toEqual('a-kebab-case-string');
  });
});

describe('getPascalCase', () => {
  it('should create a sentence case string from an array of strings', () => {
    const array = ['a', 'pascal', 'case', 'string'];

    const string = getPascalCase(array);

    expect(string).toEqual('APascalCaseString');
  });
});

describe('getCase', () => {
  it('should return a camel case string from any other string type', () => {
    const camel = 'thisIsATestString';
    const kebab = 'this-is-a-test-string';
    const sentence = 'this is a test string';
    const pascal = 'ThisIsATestString';

    const stringOne = getCase(camel, 'camel');
    const stringTwo = getCase(kebab, 'camel');
    const stringThree = getCase(sentence, 'camel');
    const stringFour = getCase(pascal, 'camel');

    expect(stringOne).toEqual(camel);
    expect(stringTwo).toEqual(camel);
    expect(stringThree).toEqual(camel);
    expect(stringFour).toEqual(camel);
  });

  it('should return a camel case string from any other string type that also contains numbers', () => {
    const camel = 'thisIsA123TestString';
    const kebab = 'this-is-a-123-test-string';
    const sentence = 'this is a 123 test string';
    const pascal = 'ThisIsA123TestString';

    const stringOne = getCase(camel, 'camel');
    const stringTwo = getCase(kebab, 'camel');
    const stringThree = getCase(sentence, 'camel');
    const stringFour = getCase(pascal, 'camel');

    expect(stringOne).toEqual(camel);
    expect(stringTwo).toEqual(camel);
    expect(stringThree).toEqual(camel);
    expect(stringFour).toEqual(camel);
  });

  it('should return a sentence case string from any other string type', () => {
    const camel = 'thisIsATestString';
    const kebab = 'this-is-a-test-string';
    const sentence = 'this is a test string';
    const pascal = 'ThisIsATestString';

    const stringOne = getCase(camel, 'sentence');
    const stringTwo = getCase(kebab, 'sentence');
    const stringThree = getCase(sentence, 'sentence');
    const stringFour = getCase(pascal, 'sentence');

    expect(stringOne).toEqual(sentence);
    expect(stringTwo).toEqual(sentence);
    expect(stringThree).toEqual(sentence);
    expect(stringFour).toEqual(sentence);
  });

  it('should return a sentence case string from any other string type that also contains numbers', () => {
    const camel = 'thisIsA123TestString';
    const kebab = 'this-is-a-123-test-string';
    const sentence = 'this is a 123 test string';
    const pascal = 'ThisIsA123TestString';

    const stringOne = getCase(camel, 'sentence');
    const stringTwo = getCase(kebab, 'sentence');
    const stringThree = getCase(sentence, 'sentence');
    const stringFour = getCase(pascal, 'sentence');

    expect(stringOne).toEqual(sentence);
    expect(stringTwo).toEqual(sentence);
    expect(stringThree).toEqual(sentence);
    expect(stringFour).toEqual(sentence);
  });

  it('should return a kebab case string from any other string type', () => {
    const camel = 'thisIsATestString';
    const kebab = 'this-is-a-test-string';
    const sentence = 'this is a test string';
    const pascal = 'ThisIsATestString';

    const stringOne = getCase(camel, 'kebab');
    const stringTwo = getCase(kebab, 'kebab');
    const stringThree = getCase(sentence, 'kebab');
    const stringFour = getCase(pascal, 'kebab');

    expect(stringOne).toEqual(kebab);
    expect(stringTwo).toEqual(kebab);
    expect(stringThree).toEqual(kebab);
    expect(stringFour).toEqual(kebab);
  });

  it('should return a kebab case string from any other string type that also contains numbers', () => {
    const camel = 'thisIsA123TestString';
    const kebab = 'this-is-a-123-test-string';
    const sentence = 'this is a 123 test string';
    const pascal = 'ThisIsA123TestString';

    const stringOne = getCase(camel, 'kebab');
    const stringTwo = getCase(kebab, 'kebab');
    const stringThree = getCase(sentence, 'kebab');
    const stringFour = getCase(pascal, 'kebab');

    expect(stringOne).toEqual(kebab);
    expect(stringTwo).toEqual(kebab);
    expect(stringThree).toEqual(kebab);
    expect(stringFour).toEqual(kebab);
  });
});
