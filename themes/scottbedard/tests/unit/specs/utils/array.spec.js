//
// utils
//
import {
    createArray,
    createSeries,
    isEmpty,
} from '@/app/utils/array';

//
// specs
//
describe('array utils', () => {
    it('createArray', () => {
        expect(createArray(3)).to.deep.equal([null, null, null]);
        expect(createArray(3, 'a')).to.deep.equal(['a', 'a', 'a']);
    });

    it('createSeries', () => {
        expect(createSeries(3)).to.deep.equal([0, 1, 2]);
        expect(createSeries(3, 3)).to.deep.equal([3, 4, 5]);
    });

    it('isEmpty', () => {
        expect(isEmpty([])).to.be.true;
        expect(isEmpty([1])).to.be.false;
    });
});
