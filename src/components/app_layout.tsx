import Navbar from './navbar'
import PropTypes from 'prop-types'

export default function AppLayout({ children }) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	)
}

AppLayout.propTypes = {
	children: PropTypes.node,
}
