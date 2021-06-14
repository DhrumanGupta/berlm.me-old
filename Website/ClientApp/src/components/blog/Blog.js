import React from 'react';
import Markdown from "markdown-to-jsx"
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {darcula} from "react-syntax-highlighter/src/styles/prism";
import {useLocation} from 'react-router-dom'

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Blog = (props) => {
	const blogName = useLocation().pathname.split('/').slice(-1);
	
	return (
		<Markdown
			options={{
				overrides: {
					h1: {
						props: {
							className: "text-center"
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
			{props.text}
		</Markdown>
	);
}

export default Blog;