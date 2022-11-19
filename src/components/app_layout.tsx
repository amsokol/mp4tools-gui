import Navbar from './navbar'
import PropTypes from 'prop-types'

export default function AppLayout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

AppLayout.propTypes = {
	children: PropTypes.node,
}
