import React from 'react';
import './WelcomeCard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faItchIo} from "@fortawesome/free-brands-svg-icons";
import {animated, config, useSpring} from "react-spring";

function WelcomeCard(props) {
    const animation = useSpring({
        from: {opacity: '0'},
        to: {opacity: '1'},
        config: config.molasses
    });
    
    return (
        <div className={"welcome-card-container"}>
            <div className={"bg-overlay"}/>
            <div className={"welcome-card"}>
                <animated.a style={animation} className={"welcome-title text-shadow-sm"}>{props.title}</animated.a>
                <animated.hr style={animation} width={"30%"} color={"white"} size={"1"}/>
                <animated.a style={animation} className={"welcome-subtitle text-shadow-sm"}>{props.subtitle}</animated.a>
                <animated.p style={animation}>
                    <a href={"https://github.com/DaRealBerlm/"} target={"_blank"} className={"btn btn-outline-dark"} title={"Github"}>
                        <FontAwesomeIcon icon={faGithub} color={"white"} size={"lg"}/>
                    </a>
                    &nbsp;
                    <a href={"https://berlm.itch.io/"} target={"_blank"} className={"btn btn-outline-dark"} title={"Itch.io"}>
                        <FontAwesomeIcon icon={faItchIo} color={"white"} size={"lg"}/>
                    </a>
                </animated.p>
            </div>
        </div>
    );
}

export default WelcomeCard;