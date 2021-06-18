import React from 'react';
import BoxLoading from 'react-loadingg/lib/BoxLoading';

function Loader() {
	return (
		<BoxLoading color={"gray"} speed={.5} size={"large"}/>
	);
}

export default Loader;