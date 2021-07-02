import React, {useEffect, useState} from 'react';
import Markdown from "markdown-to-jsx"
import {useParams} from 'react-router-dom'
import Loader from "../Loader";
import Error404 from "../Error404";
import Code from "./Code";
import './blog.scss';
import BlogImage from "./BlogImage";

const Blog = () => {
	const {title} = useParams();
	const [blogData, setBlogData] = useState({
		loading: true,
		data: null,
		error: false
	});

	useEffect(() => {
		setBlogData({
			loading: true,
			data: null,
			error: false
		})

		axios
			.get(`api/blog/${title}`)
			.then(r => {
				console.log(r)
				setBlogData({
					loading: false,
					data: r.data,
					error: false
				})
			})
			.catch(err => {
					setBlogData({
						loading: false,
						data: null,
						error: true
					})
				}
			)
	}, [title]);

	if (blogData.loading) {
		return <Loader/>
	}

	if (blogData.error) {
		return <Error404/>
	}

	const md =
		`
NOTE: THIS IS A TEST BLOG. I do not plan to upload this, words from another blog have been swapped to get dummy content that makes sense  

## First. What is wrong with \`BinaryFormatter\`?  
Recently, Microsoft updated their documentation, which suggests that \`BinaryFormatter\` is a security risk. The risk is because of the way it works. Essentially, it runs an executable to deserialize the data. The issue at hand is that the file being deserialized can be replaced, and without doubt will be be run as a standalone executable. See the issue?  
  
> The  \`BinaryFormatter\`  type is dangerous and is not recommended for data processing. Applications should stop using  \`BinaryFormatter\`  as soon as possible, even if they believe the data they’re processing to be trustworthy.  \`BinaryFormatter\`  is insecure and can’t be made secure.
> 
> […]
> 
> Assume that calling  \`BinaryFormatter.Deserialize\`  over a payload is the equivalent of interpreting that payload as a standalone executable and launching it.
>
> <cite> [https://docs.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guide](https://docs.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guide) </cite>  

![test image](https://blog.oliverbooth.dev/wp-content/uploads/2021/03/image-3.png)
`;

	return (
		<div className={"d-flex justify-content-center container-sm"}>
			<div className={"blog-container"}>
				<p className={"blog-header h1 mt-1"}>
					{blogData.data.title}
				</p>

				<p className={"blog-content mt-1 mb-4"}>
					{blogData.data.description}
				</p>

				<Markdown
					options={{
						overrides: {
							h1: {
								className: ""
							},
							hr: {
								props: {
									'aria-hidden': true
								}
							},
							p: {
								props: {
									className: 'blog-content'
								}
							},
							SyntaxHighlighter: {
								component: Code
							},
							code: {
								props: {
									className: "inline-code"
								}
							},
							img: {
								component: BlogImage
							}
						}
					}}
					className={"pt-1"}
				>
					{md}
				</Markdown>
			</div>
		</div>
	);
}

export default Blog;