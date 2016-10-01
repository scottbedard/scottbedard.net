const reverse = (swaps) => swaps.map(([a, b]) => [b, a]);

const U = [
                  ['B2', 'R2'], ['B1', 'R1'], ['B0', 'R0'],
    ['L0', 'B0'], ['U0', 'U2'], ['U1', 'U5'], ['U2', 'U8'], ['R2', 'F2'],
    ['L1', 'B1'], ['U3', 'U1'], /*         */ ['U5', 'U7'], ['R1', 'F1'],
    ['L2', 'B2'], ['U6', 'U0'], ['U7', 'U3'], ['U8', 'U6'], ['R0', 'F0'],
                  ['F0', 'L0'], ['F1', 'L1'], ['F2', 'L2'],
];

const L = [
                  ['U0', 'F0'], ['U3', 'F3'], ['U6', 'F6'],
    ['B8', 'U0'], ['L0', 'L2'], ['L1', 'L5'], ['L2', 'L8'], ['F0', 'D0'],
    ['B5', 'U3'], ['L3', 'L1'], /*         */ ['L5', 'L7'], ['F3', 'D3'],
    ['B2', 'U6'], ['L6', 'L0'], ['L7', 'L3'], ['L8', 'L6'], ['F6', 'D6'],
                  ['D6', 'B2'], ['D3', 'B5'], ['D0', 'B8'],
];

const F = [
                  ['U6', 'R0'], ['U7', 'R3'], ['U8', 'R6'],
    ['L8', 'U6'], ['F0', 'F2'], ['F1', 'F5'], ['F2', 'F8'], ['R0', 'D2'],
    ['L5', 'U7'], ['F3', 'F1'], /*         */ ['F5', 'F7'], ['R3', 'D1'],
    ['L2', 'U8'], ['F6', 'F0'], ['F7', 'F3'], ['F8', 'F6'], ['R6', 'D0'],
                  ['D2', 'L8'], ['D1', 'L5'], ['D0', 'L2'],
];
const R = [
                  ['U8', 'B0'], ['U5', 'B3'], ['U2', 'B6'],
    ['F2', 'U2'], ['R0', 'R2'], ['R1', 'R5'], ['R2', 'R8'], ['B0', 'D8'],
    ['F5', 'U5'], ['R3', 'R1'], /*         */ ['R5', 'R7'], ['B3', 'D5'],
    ['F8', 'U8'], ['R6', 'R0'], ['R7', 'R3'], ['R8', 'R6'], ['B6', 'D2'],
                  ['D2', 'F2'], ['D5', 'F5'], ['D8', 'F8'],
];

const B = [
                  ['U2', 'L0'], ['U1', 'L3'], ['U0', 'L6'],
    ['R8', 'U2'], ['B0', 'B2'], ['B1', 'B5'], ['B2', 'B8'], ['L0', 'D6'],
    ['R5', 'U1'], ['B3', 'B1'], /*         */ ['B5', 'B7'], ['L3', 'D7'],
    ['R2', 'U0'], ['B6', 'B0'], ['B7', 'B3'], ['B8', 'B6'], ['L6', 'D8'],
                  ['D8', 'R2'], ['D7', 'R5'], ['D6', 'R8'],
];

const D = [
                  ['F6', 'R6'], ['F7', 'R7'], ['F8', 'R8'],
    ['L6', 'F6'], ['D0', 'D2'], ['D1', 'D5'], ['D2', 'D8'], ['R6', 'B6'],
    ['L7', 'F7'], ['D3', 'D1'], /*         */ ['D5', 'D7'], ['R7', 'B7'],
    ['L8', 'F8'], ['D6', 'D0'], ['D7', 'D3'], ['D8', 'D6'], ['R8', 'B8'],
                  ['B6', 'L6'], ['B7', 'L7'], ['B8', 'L8'],
];

const X = [
    ...R,
    ['U7', 'B1'], ['U4', 'B4'], ['U1', 'B7'],
    ['B1', 'D7'], ['B4', 'D4'], ['B7', 'D1'],
    ['D7', 'F7'], ['D4', 'F4'], ['D1', 'F1'],
    ['F7', 'U7'], ['F4', 'U4'], ['F1', 'U1'],
    ...reverse(L),
];

const Y = [
    ...U,
    ['L3', 'B3'], ['L4', 'B4'], ['L5', 'B5'],
    ['F3', 'L3'], ['F4', 'L4'], ['F5', 'L5'],
    ['R3', 'F3'], ['R4', 'F4'], ['R5', 'F5'],
    ['B3', 'R3'], ['B4', 'R4'], ['B5', 'R5'],
    ...reverse(D),
];

const Z = [
    ...F,
    // 0  1  2
    // 3  4  5
    // 6  7  8
    ['U3', 'R1'], ['U4', 'R4'], ['U5', 'R7'],
    ['R1', 'D5'], ['R4', 'D4'], ['R7', 'D3'],
    ['D5', 'L7'], ['D4', 'L4'], ['D3', 'L1'],
    ['L7', 'U3'], ['L4', 'U4'], ['L1', 'U5'],
    ...reverse(B),
];

export default { U, L, F, R, D, B, X, Y, Z };
