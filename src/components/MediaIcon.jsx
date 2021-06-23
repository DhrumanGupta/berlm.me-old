import React from 'react';

class MediaIcon extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const data = this.props.data;
		return (
			<a href={data.url} target={"_blank"} rel={"noopener noreferrer"} className={`btn btn-outline-${data.color} p-2 mx-1 fa-lg ${data.class}`}/>
		);
	}
}

export default MediaIcon;
