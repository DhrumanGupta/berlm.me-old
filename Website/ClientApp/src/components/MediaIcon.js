import React from 'react';

const MediaIcon = (props) => {
	const data = props.data;
	return (
			<a href={data.url} target={"_blank"} className={`btn btn-outline-${data.color} p-2 mx-1 fa-lg ${data.class}`}/>
	);
};

export default MediaIcon;
