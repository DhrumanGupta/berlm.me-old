import React from 'react';
import CodeBlockWrapper from "./CodeBlockWrapper";
import Blog from "./Blog";

function BlogList() {
	return (
		<div>
			<Blog text={
`
# Header
## Subheader I guess?
`}/>
		</div>
	);
}

export default BlogList;