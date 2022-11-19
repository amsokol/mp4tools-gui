import type { AppProps } from 'next/app'

import 'primereact/resources/themes/arya-blue/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons
import 'primeflex/primeflex.css'

import PrimeReact from 'primereact/api'
PrimeReact.ripple = true

import '../style.css'
import '../App.css'

import { RecoilRoot } from 'recoil'

import Layout from '../components/app_layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	)
}
