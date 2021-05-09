import React from 'react';
import DonationBox from "../components/donateComponents/DonationBox";
import Background from "../components/donateComponents/Background";

function Donate(props) {
    return (
        <div>
            <Background/>
            <DonationBox/>
        </div>
    );
}

export default Donate;