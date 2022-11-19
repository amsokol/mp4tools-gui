import { Menubar } from 'primereact/menubar'
import { Image } from 'primereact/image'
import { TfiVideoCamera, TfiImport, TfiExport, TfiMusicAlt } from 'react-icons/tfi'
import { SiDolby } from 'react-icons/si'
import { useRouter } from 'next/router'

export default function Navbar(/* { children } */) {
	const router = useRouter()

	const menu = [
		{
			label: 'Mux',
			icon: <TfiImport className="mr-2" />,
			items: [
				{
					label: 'MP4 Dolby Vision',
					icon: <SiDolby className="mr-2" />,
					command: () => {
						router.push('/mux/dv')
					},
				},
			],
		},
		{
			label: 'Audio',
			icon: <TfiMusicAlt className="mr-2" />,
			items: [
				{
					label: 'Dialogue normalization',
					command: () => {
						router.push('/audio/dn')
					},
				},
			],
		},
		{
			label: 'Video',
			icon: <TfiVideoCamera className="mr-2" />,
			items: [
				{
					label: 'TBD',
				},
			],
		},
		{ label: 'Demux', icon: <TfiExport className="mr-2" /> },
	]

	return (
		<nav>
			<div className="card">
				<Menubar model={menu} start={<Image alt="logo" src="/logo.png" width="35rem" className="mr-2" />} />
			</div>
		</nav>
	)
}
