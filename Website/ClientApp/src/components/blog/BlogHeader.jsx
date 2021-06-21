import React from 'react';

function BlogHeader(props) {
	return (
		<div className={"d-flex flex-column"}>
			<img src={props.img} className={"img-fluid"} alt="Cover Image"/>
			<p className={"text-center display-2 mt-2 mb-4"}>
				<strong>{props.title}</strong>
			</p>
		</div>
	);
}

export default BlogHeader;