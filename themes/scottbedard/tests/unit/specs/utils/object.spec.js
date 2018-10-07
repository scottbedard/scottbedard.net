//
// utils
//
import { resolveProperty } from '@/app/utils/object';

//
// specs
//
describe('object utils', () => {
    it('resolveProperty', () => {
        const src = {
            foo: {
                bar: {
                    baz: 'hello',
                },
            },
        };

        expect(resolveProperty(src, 'foo.bar.baz')).to.equal('hello');
        expect(resolveProperty(src, 'keys.that.dont.exist')).to.be.undefined;
    });
});
