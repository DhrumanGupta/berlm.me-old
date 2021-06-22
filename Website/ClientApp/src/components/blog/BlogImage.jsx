import React from 'react';

function BlogImage(props) {
	return (
		<div className={"text-center"}>
			<img alt={props.alt} src={props.src} className={"blog-image"}/>
		</div>
	);
}

export default BlogImage;