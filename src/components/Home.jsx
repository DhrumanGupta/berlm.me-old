﻿import React, {Suspense} from 'react';
import Typing from 'react-typist';
import mediaData from "../data/MediaHandles.json";

const MediaIcon = React.lazy(() => import('./MediaIcon'));

class Home extends React.PureComponent {
	render() {
		return (
			<div className={"d-flex justify-content-center align-items-center flex-column flex-grow-1"}>
				<div className={"display-1 flex-grow-1 d-flex align-items-center text-center"}>
					<Typing startDelay={500} cursor={{
						hideWhenDone: true
					}}>

						I am Berlm.
						<Typing.Backspace count={6} delay={750}/>
						<Typing.Delay ms={500}/>

						a programmer.

						<Typing.Backspace count={13} delay={500}/>
						<Typing.Delay ms={500}/>

						a designer.

						<Typing.Backspace count={11} delay={500}/>
						<Typing.Delay ms={500}/>

						a tech enthusiast.

						<Typing.Backspace count={27} delay={700}/>

						Welcome
					</Typing>
				</div>
				<div style={{width: "100px"}} className={"d-flex flex-row align-items-center justify-content-center"}>
					{
						mediaData.map((obj) => (
								<Suspense fallback={" W "} key={obj.class}>
									<MediaIcon data={obj}/>
								</Suspense>
							)
						)
					}
				</div>
				<hr style={{width: "200px", height: "2px"}} className={"mb-3"}/>
			</div>
		);
	}
}

export default Home;