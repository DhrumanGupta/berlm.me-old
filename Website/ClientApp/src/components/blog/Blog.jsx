import React, {useEffect, useState, lazy, Suspense} from 'react';
import Markdown from "markdown-to-jsx"
import {useParams} from 'react-router-dom'
import axios from "axios";
import Loader from "../Loader";
import Error404 from "../Error404";
import BlogHeader from "./BlogHeader";
import './blog.scss'
import Code from "./Code";

const Blog = () => {
	const {title} = useParams();
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
	// 		.get(`api/blog/${title}`)
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
	// }, [title]);

	// if (blogData.loading) {
	// 	return <Loader/>
	// }

	// if (blogData.error) {
	// 	return <Error404/>
	// }

	const md =
		`
This is a test to see if markdown is being converted properly.  

# Heading 1  
## Heading 2  
### Heading 3  
#### Heading 4  
##### Heading 5  

*Italic Text*  
**Bold Text**  
***Italic and bold text***  

Horizontal Rule:  

---  

Code test:  

<SyntaxHighlighter language="csharp">
public int Id { get; set; }</SyntaxHighlighter>

<SyntaxHighlighter language="csharp">
public static void Main(string[] args)
{
	// Looks ugly on a few mobile devices, needs to be fixed
	Console.WriteLine("This is a test to check markdown compatibility");
}</SyntaxHighlighter>
`;

	return (
		<div className={"flex-grow-1 pt-3"}>
			<BlogHeader title={title} img={"https://pbs.twimg.com/media/EU6iDKnWkAA9Lxu.jpg"}/>
			<Markdown
				options={{
					overrides: {
						hr: {
							props: {
								'aria-hidden': true
							}
						},
						p: {
							props: {
								className: 'lead blog-content'
							}
						},
						SyntaxHighlighter: {
							component: Code
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