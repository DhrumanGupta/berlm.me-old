import React from 'react';
import WelcomeCard from "../components/homeComponents/WelcomeCard";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <WelcomeCard title={"Berlm"} subtitle={"Dhruman Gupta"}/>
            <h1 className={"text-center"}>
                W.I.P
            </h1>
            <p className={"text-center"}>
                I'm learning react.js
            </p>
        </div>
    );
}

export default Home;