import { lowerCaseFirstLetter } from './lowerCaseFirstLetter';

describe('lowerCaseFirstLetter()', () => {
  it('Instance of function', () => {
    expect(lowerCaseFirstLetter).toBeInstanceOf(Function);
  });

  it('Should lower case first letter of string', () => {
    expect(lowerCaseFirstLetter('Lorem ipsum')).toEqual('lorem ipsum');
  });
});
