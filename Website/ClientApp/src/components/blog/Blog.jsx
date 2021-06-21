import React, {useEffect, useState, lazy, Suspense} from 'react';
import Markdown from "markdown-to-jsx"
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import darcula from "react-syntax-highlighter/src/styles/prism/darcula";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Loader from "../Loader";
import Error404 from "../Error404";

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Blog = () => {
	// const {name} = useParams();
	// const [blogData, setBlogData] = useState({
	// 	loading: false,
	// 	data: null,
	// 	error: false
	// });
	//
	// useEffect(() => {
	// 	setBlogData({
	// 		loading: true,
	// 		data: null,
	// 		error: false
	// 	})
	//
	// 	axios
	// 		.get(`api/blog/${name}`)
	// 		.then(r => {
	// 			setBlogData({
	// 				loading: false,
	// 				data: r.data,
	// 				error: false
	// 			})
	// 		})
	// 		.catch(err => {
	// 				setBlogData({
	// 					loading: false,
	// 					data: null,
	// 					error: true
	// 				})
	// 			}
	// 		)
	// }, [name]);
	//
	// if (blogData.loading) {
	// 	return <Loader/>
	// }
	//
	// if (blogData.error) {
	// 	return <Error404/>
	// }

	const md =
		`
# Header here?
## More content Here  
<SyntaxHighlighter language="javascript">
const data = () => {
}
</SyntaxHighlighter>  
`;

	return (
		<div className={"flex-grow-1"}>
			<Markdown
				options={{
					overrides: {
						h1: {
							props: {
								className: "text-center h1"
							}
						},
						SyntaxHighlighter: {
							component: SyntaxHighlighter,
							props: {
								style: darcula,
								showLineNumbers: true
							}
						}
					}
				}}
			>
				{md}
			</Markdown>
		</div>
	);
}

export default Blog;