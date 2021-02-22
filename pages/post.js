/** @format */
// import { withRouter, useRouter } from 'next/router';
// const Post = withRouter((props) => <h1>you are in Post page with #</h1>);
// const Post = () => {
// 	const router = useRouter();
// 	console.log('in the post page :', router);
// 	return <h1>Ypu are in Post Page</h1>;

// };
import axios from 'axios';
import Comment from '../components/Comment';
const Post = ({ id, comments }) => (
	<>
		<h1>comments for the post {id} </h1>
		{comments?.map((comment) => (
			<Comment key={comment.id} {...comment} />
		))}
	</>
);

Post.getInitialProps = async ({ query: { id } }) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?postId=${id}`
	);
	return { id, comments: data };
};
export default Post;
