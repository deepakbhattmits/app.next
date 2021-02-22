/** @format */

import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';
const Posts = ({ data }) => (
	<Layout>
		<ul>
			{data.map(({ id, title }) => (
				<li key={id}>
					<Link href={`/post?id=${id}`} as={`/p/${id}`}>
						<a>{title}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);
export const getStaticProps = async () => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts`
	);
	return {
		props: {
			data,
		},
	};
};
export default Posts;
