import { atom, RecoilState } from 'recoil'

export type LastUsedFolder = {
	folder: RecoilState<string>
}

export const storeLastUsedFolder: LastUsedFolder = {
	folder: atom({
		key: 'last-used-folder', // unique ID (with respect to other atoms/selectors)
		default: '', // default value (aka initial value)
	}),
}
