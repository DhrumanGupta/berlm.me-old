import React from 'react';
import Markdown from "markdown-to-jsx";

function Blog(props) {
	return (
		<Markdown
			className={"text-light"}
			options={{
				overrides: {
					h1: {
						props: {
							className: "text-center"
						}
					}
				}
			}}
		>
			{props.text}
		</Markdown>
	);
}

export default Blog;