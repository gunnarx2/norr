import { lowerCaseFirstLetter } from './lowerCaseFirstLetter';

describe('lowerCaseFirstLetter()', () => {
  test('Instance of function', () => {
    expect(lowerCaseFirstLetter).toBeInstanceOf(Function);
  });

  test('Should lower case first letter of string', () => {
    expect(lowerCaseFirstLetter('Lorem ipsum')).toEqual('lorem ipsum');
  });
});
