import { useRecoilState } from 'recoil'
import { TfiMusicAlt } from 'react-icons/tfi'
import PageLayout from '../../components/page_layout'
import InputFile from '../../components/input_file'
import { storeAudioDN } from '../../store/audio/dn'
import { FileInputType } from '../../components/file_filter'

function AudioDN() {
	const id = 'audio.dn'

	const [source, setSource] = useRecoilState(storeAudioDN.source)

	function onChangeSource(value: string) {
		setSource(value)
	}
	function handleSubmit(event) {
		event.preventDefault()
	}

	return (
		<PageLayout level1Icon={<TfiMusicAlt />} level1Text="Audio" level2Text="Dialog normalization">
			<form onSubmit={handleSubmit}>
				<InputFile
					required={true}
					id={id + '.source'}
					label="Source audio file"
					type={FileInputType.Audio}
					value={source}
					onChange={onChangeSource}
					filters={[
						{
							name: 'Audio',
							extensions: ['aac', 'adts', 'ac3', 'ec3', 'ac4', 'dts', 'eac3'],
						},
					]}
				/>
				<input type="submit" value="Submit" />
			</form>
		</PageLayout>
	)
}

export default AudioDN
