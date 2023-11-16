import { usePrevious } from './usePrevious';

describe('usePrevious()', () => {
  it('Instance of function', () => {
    expect(usePrevious).toBeInstanceOf(Function);
  });
});
