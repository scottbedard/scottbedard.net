//
// utils
//
import { createArray } from '@/app/utils/array';

//
// specs
//
describe('array utils', () => {
    it('createArray', () => {
        expect(createArray(3)).to.deep.equal([null, null, null]);
        expect(createArray(3, 'a')).to.deep.equal(['a', 'a', 'a']);
    });
});
