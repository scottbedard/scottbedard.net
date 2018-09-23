//
// interface
//
export interface BrowserState {
    height: number;
    width: number;
}

//
// state
//
export default function(): BrowserState {
    return {
        height: 0,
        width: 0,
    };
}
