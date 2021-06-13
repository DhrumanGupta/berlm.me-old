import React from 'react';
import Typing from 'react-typist';

export default function Home() {
		return (
			<div className={"container position-absolute top-50 start-50 translate-middle display-1 text-center"}>
				<Typing startDelay={500} cursor={{
					hideWhenDone: true
				}}>
					Hey there!

					<Typing.Backspace count={10} delay={750}/>
					<Typing.Delay ms={500}/>
					
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
					<Typing.Delay ms={1000}/>

					Welcome
				</Typing>
			</div>
		);
}