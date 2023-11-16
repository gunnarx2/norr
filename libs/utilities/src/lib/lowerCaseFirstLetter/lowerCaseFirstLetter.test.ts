import { lowerCaseFirstLetter } from './lowerCaseFirstLetter';

describe('lowerCaseFirstLetter()', () => {
  it('Should lower case first letter of string', () => {
    expect(lowerCaseFirstLetter('Lorem ipsum')).toEqual('lorem ipsum');
  });
});
