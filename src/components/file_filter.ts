export enum FileInputType {
	Video,
	Audio,
	Subtitles,
	MP4,
}

export type FileFilter = {
	name: string
	extensions: string[]
}
