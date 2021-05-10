import React from 'react';
import WelcomeCard from "../components/homeComponents/WelcomeCard";

function Home() {
    return (
        <div>
            <WelcomeCard title={"Berlm"} subtitle={"Dhruman Gupta"}/>
            <h1 className={"text-center"}>
                W.I.P
            </h1>
            <p className={"text-center"}>
                React.js is cool
            </p>
        </div>
    );
}

export default Home;