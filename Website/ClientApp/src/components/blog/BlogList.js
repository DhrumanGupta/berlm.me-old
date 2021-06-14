import React from 'react';
import Blog from "./Blog";

function BlogList() {
	var text= 
		`
# Header
### Subheader I guess?
<SyntaxHighlighter language="JavaScript">
function Method() {
	console.log('weclome!');
}
</SyntaxHighlighter>
`
	return (
		<div>
			<Blog text={text}/>
		</div>
	);
}

export default BlogList;