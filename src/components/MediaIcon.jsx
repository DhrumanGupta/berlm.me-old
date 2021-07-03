import React from 'react';

class MediaIcon extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const data = this.props.data;
		return (
			<a href={data.url} aria-label={data.name} title={data.name} target={"_blank"} rel={"noopener noreferrer"} className={`btn btn-outline-${data.color} p1 mx-1`}>
				<i className={`fa-lg ${data.class}`} aria-hidden={"true"}/>
			</a>
		);
	}
}

export default MediaIcon;
