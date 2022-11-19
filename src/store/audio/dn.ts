import {
    atom,
    RecoilState
} from 'recoil'

export type DN = {
    textState: RecoilState<string>
}

export const store: DN = {
    textState: atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: 'qwerty', // default value (aka initial value)
    })
}
