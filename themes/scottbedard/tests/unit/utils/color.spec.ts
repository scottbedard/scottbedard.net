import { expect } from 'chai';

//
// color utils
//
import {
    calculateGradient,
    hexToRgb,
    rgbToHex,
} from '@/app/utils/color';

//
// specs
//
describe('color utils', () => {
    it('calculateGradient', () => {
        expect(calculateGradient('#000000', '#ff0000')).to.deep.equal([
            [0, 0, 0], [128, 0, 0], [255, 0, 0],
        ]);

        expect(calculateGradient('#000000', '#00ff00')).to.deep.equal([
            [0, 0, 0], [0, 128, 0], [0, 255, 0],
        ]);

        expect(calculateGradient('#000000', '#0000ff')).to.deep.equal([
            [0, 0, 0], [0, 0, 128], [0, 0, 255],
        ]);

        expect(calculateGradient('#000000', '#ffffff', 3, 'hex')).to.deep.equal([
            '#000000', '#808080', '#ffffff',
        ]);
    });

    it('hexToRgb', () => {
        expect(() => hexToRgb('not-a-color')).to.throw();
        expect(hexToRgb('000000')).to.deep.equal([0, 0, 0]);
        expect(hexToRgb('#000000')).to.deep.equal([0, 0, 0]);
        expect(hexToRgb('#ff0000')).to.deep.equal([255, 0, 0]);
        expect(hexToRgb('#00ff00')).to.deep.equal([0, 255, 0]);
        expect(hexToRgb('#0000ff')).to.deep.equal([0, 0, 255]);
        expect(hexToRgb('#ffffff')).to.deep.equal([255, 255, 255]);
    });

    it('rgbToHex', () => {
        expect(rgbToHex(0, 0, 0)).to.equal('#000000');
        expect(rgbToHex(255, 0, 0)).to.equal('#ff0000');
        expect(rgbToHex(0, 255, 0)).to.equal('#00ff00');
        expect(rgbToHex(0, 0, 255)).to.equal('#0000ff');
        expect(rgbToHex(255, 255, 255)).to.equal('#ffffff');
    });
});
