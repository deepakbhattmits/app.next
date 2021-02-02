/** @format */
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Prices from '../components/Prices';
const Index = () => {
	const [data, setData] = useState();
	const fetchData = async () => {
		const res = await fetch(
			'https://api.coindesk.com/v1/bpi/currentprice.json'
		);
		const resData = await res.json();
		setData(resData);
	};
	useEffect(() => {
		fetchData();
		console.log('want data call', data);
	}, []);
	return (
		<Layout>
			<h1>Welcome to {data?.chartName}</h1>
			<Prices bpi={data?.bpi} />
			<h2>updated at :{data?.time?.updated}</h2>
		</Layout>
	);
};
export default Index;
