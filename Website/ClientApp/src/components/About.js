import React, {Fragment, useState} from 'react';
import profilePicture from '../images/berlm.png';

function About() {
	const defaultContent = <Fragment>
		<p>
			I'm Dhruman Gupta, a junior student who likes to automate things. I've always been fascinated by
			technology.
		</p>
		<p>
			I've been programming since grade 8, although at that time, I'd mess around on photoshop and make simple
			python/Lua projects to help automate small things on my computer (menial, repetitive tasks).
		</p>
		<p>
			During grade 9, I developed a keener interest in programming and developed my skills, especially in C#,
			Javascript, Python, and a little bit of CSS: the full stack skill set.
		</p>
	</Fragment>

	const extraContent = <Fragment>
		<p>
			Fortunately, the pandemic gave me a lot of time to work on my skills. I explored many aspects of programming and
			computer science (game development, networking, backend development, database management).
		</p>
	</Fragment>

	const [readMore, setReadMore] = useState(false);
	const linkName = readMore ? 'Read Less <<' : 'Read More >>'

	return (
		<div className={"d-flex align-items-center"}>
			<div
				className={`bg-dark h-auto vw-sm-70 vw-lg-60 vw-lg-50 vw-xl-40 rounded-3 d-flex flex-column align-items-center shadow-lg px-2 py-3 py-md-4 ${readMore && "mb-4 mb-md-0"}`}>
				<div className={"w-30 w-md-25 w-lg-20 h-auto pb-3"}>
					<img src={profilePicture} alt={"Profile Picture"} className={"img-fluid rounded-circle shadow-sm"}/>
				</div>
				<div className={'text-center lead'}>
					{defaultContent}
					{readMore && extraContent}

					<a className={"text-muted btn"} onClick={() => {
						setReadMore(!readMore)
					}}>
						<ins>{linkName}</ins>
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;