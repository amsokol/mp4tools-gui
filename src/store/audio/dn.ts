import { atom, RecoilState } from 'recoil'

export type AudioDN = {
	source: RecoilState<string>
}

export const storeAudioDN: AudioDN = {
	source: atom({
		key: 'audio.dn.source', // audio.dn.source unique ID (with respect to other atoms/selectors)
		default: '', // default value (aka initial value)
	}),
}
