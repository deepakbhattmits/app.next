/** @format */
import Head from 'next/head';
import Navbar from './Navbar';
const Layout = ({ children }) => (
	<div>
		<Head>
			<title>Next Demo</title>
			<link
				rel='stylesheet'
				href='https://bootswatch.com/4/cerulean/bootstrap.min.css'
			/>
		</Head>
		<Navbar />
		<div className='container'>{children}</div>
	</div>
);
export default Layout;
