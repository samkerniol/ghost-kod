import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/fonts.css';

import Layout from '../layout';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}