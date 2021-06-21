import React from 'react';

class MediaIcon extends React.PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	
	render() {
		const data = this.props.data;
		return (
			<a href={data.url} target={"_blank"} className={`btn btn-outline-${data.color} p-2 mx-1 fa-lg ${data.class}`}/>
		);
	}
}

export default MediaIcon;
