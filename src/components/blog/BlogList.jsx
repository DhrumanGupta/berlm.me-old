import React from 'react';

function BlogList() {
	return (
			<div className="container-sm d-flex justify-content-center align-items-center flex-column flex-grow-1">
				<p className="text-center display-4">I AM REDOING THE ENTIRE WEBSITE</p>
				<p className="text-center text-muted">
					This was a hard descision, but this time I am trying to do thing right. 
					<br/>
					(making designs, no css framework, more professional).
				</p>
				<p className={"text-center lead"}>
					You can check out the development progress <a target={"_blank"} rel={"noopener noreferrer"}
					                                              href={'https://github.com/DhrumanGupta/berlm.me'}>here</a>
				</p>
		</div>
	);
}

export default BlogList;