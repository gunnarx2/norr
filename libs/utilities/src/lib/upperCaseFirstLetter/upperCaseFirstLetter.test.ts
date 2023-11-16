import { upperCaseFirstLetter } from './upperCaseFirstLetter';

describe('upperCaseFirstLetter()', () => {
  it('Should upper case first letter of string', () => {
    expect(upperCaseFirstLetter('lorem ipsum')).toEqual('Lorem ipsum');
  });
});
