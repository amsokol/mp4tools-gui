import '../App.css'

import 'primereact/resources/primereact.min.css' //core css
import 'primereact/resources/themes/arya-blue/theme.css' //theme
import 'primeicons/primeicons.css' //icons
import 'primeflex/primeflex.css' //icons

import 'bootstrap-icons/font/bootstrap-icons.css' //icons

import type { AppProps } from 'next/app'

import PrimeReact from 'primereact/api'
PrimeReact.ripple = true

import { RecoilRoot } from 'recoil'

import Layout from '../components/app_layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<div className="App1">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</RecoilRoot>
	)
}
