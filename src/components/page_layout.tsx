import PropTypes from 'prop-types'
import { BreadCrumb } from 'primereact/breadcrumb'
import { Panel } from 'primereact/panel'

export default function PageLayout({ level1Icon, level1Text, level2Icon, level2Text, children }) {
	const items = [
		{
			template: () => {
				return (
					<div>
						{level1Icon ? <span className="mr-2">{level1Icon}</span> : ''}
						<span>{level1Text}</span>
					</div>
				)
			},
		},
		{
			template: () => {
				return (
					<div>
						{level2Icon ? <span className="mr-2">{level2Icon}</span> : ''}
						<span>{level2Text}</span>
					</div>
				)
			},
		},
	]
	const home = {
		template: () => {
			return <span className="pi pi-home" />
		},
	}

	return (
		<Panel className="m-2" header={<BreadCrumb model={items} home={home} className="border-none p-0" />}>
			<div className="mt-3">{children}</div>
		</Panel>
	)
}

PageLayout.propTypes = {
	level1Icon: PropTypes.node,
	level1Text: PropTypes.string,
	level2Icon: PropTypes.node,
	level2Text: PropTypes.string,
	children: PropTypes.node,
}
