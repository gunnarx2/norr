import { upperCaseFirstLetter } from './upperCaseFirstLetter';

describe('upperCaseFirstLetter()', () => {
  test('Instance of function', () => {
    expect(upperCaseFirstLetter).toBeInstanceOf(Function);
  });

  test('Should upper case first letter of string', () => {
    expect(upperCaseFirstLetter('lorem ipsum')).toEqual('Lorem ipsum');
  });
});
