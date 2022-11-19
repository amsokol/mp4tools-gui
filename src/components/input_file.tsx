import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { storeLastUsedFolder } from '../store/input_file'
import { open as fopen, save as fsave } from '@tauri-apps/api/dialog'
import { FileInputType } from './file_filter'
import type { FileFilter } from './file_filter'
import { classNames } from 'primereact/utils'

interface InputFileProps {
	id: string
	label?: string
	value?: string
	required?: boolean
	isSave?: boolean
	type: FileInputType
	filters?: FileFilter[]
	onChange?: (value: string) => void
}

function InputFile({ id, label, value, required, isSave, type, filters, onChange }: InputFileProps): JSX.Element {
	const [folder, setFolder] = useRecoilState(storeLastUsedFolder.folder)
	const [invalid, setInvalid] = useState(false)

	// const refInput = useRef(null)
	let fileIcon: string

	switch (type) {
		case FileInputType.Audio:
			fileIcon = 'bi bi-file-earmark-music'
			break
		case FileInputType.MP4:
			fileIcon = 'bi bi-filetype-mp4'
			break
		case FileInputType.Subtitles:
			fileIcon = 'bi bi-file-earmark-font'
			break
		case FileInputType.Video:
			fileIcon = 'bi bi-file-earmark-play'
			break
		default:
			fileIcon = 'bi bi-file-earmark'
			break
	}

	async function onBrowseFile() {
		const path = await import('@tauri-apps/api/path')

		let dir: string | undefined = undefined

		if (value) {
			dir = await path.dirname(value)
		}

		if (!dir) {
			dir = folder
		}

		if (!dir) {
			dir = await path.homeDir()
		}

		let selected: string | string[] | null = null

		if (isSave) {
			selected = await fsave({
				title: 'Save as',
				defaultPath: value ? value : dir,
				filters: filters,
			})
		} else {
			// Open a selection dialog for image files
			selected = await fopen({
				title: 'Open',
				multiple: false,
				defaultPath: dir,
				filters: filters,
			})
		}

		if (selected === null) {
			// user cancelled the selection
		} else {
			// user selected a single file
			value = selected as string
			setFolder(await path.dirname(value))
			onChangeInput(value)
		}
	}

	function onChangeInput(value) {
		setInvalid(false)
		onChange(value)
	}

	return (
		<div className="p-inputgroup">
			<span className="p-inputgroup-addon border-none p-0">
				<Button icon="pi pi-folder-open" className="p-button-outlined" onClick={onBrowseFile} />
			</span>
			<div className="w-full">
				<span className="p-float-label p-input-icon-right">
					<i className={fileIcon} />
					<InputText
						id={id + '.input'}
						type="text"
						value={value}
						required={required}
						onChange={(event) => onChangeInput(event.target.value)}
						onKeyUp={(event) => {
							if (event.key === 'Enter') onBrowseFile()
						}}
						onInvalid={() => {
							setInvalid(true)
						}}
						className={classNames({ 'p-invalid': invalid })}
					/>
					<label htmlFor={id + '.input'} className={classNames({ 'p-error': invalid })}>
						{label}
						{required ? '*' : ''}
					</label>
				</span>
			</div>
		</div>
	)
}

export default InputFile
