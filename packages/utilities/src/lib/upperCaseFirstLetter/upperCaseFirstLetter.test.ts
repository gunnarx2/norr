import { upperCaseFirstLetter } from './upperCaseFirstLetter';

describe('upperCaseFirstLetter()', () => {
  it('Instance of function', () => {
    expect(upperCaseFirstLetter).toBeInstanceOf(Function);
  });

  it('Should upper case first letter of string', () => {
    expect(upperCaseFirstLetter('lorem ipsum')).toEqual('Lorem ipsum');
  });
});
