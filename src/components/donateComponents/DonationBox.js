import React, {useEffect, useState} from 'react';
import './DonationBox.css'
import {useSpring, animated, config} from "react-spring";
import axios from "axios";
import PaypalPaymentButton from "./PaypalPaymentButton";
import UpiPaymentButton from "./UpiPaymentButton";

function DonationBox() {
    const props = useSpring({
        from: {transform: 'translate(-50%, -200%)'},
        to: {transform: 'translate(-50%, -50%)'},
        config: config.slow
    });

    const metadataUrl = 'http://extreme-ip-lookup.com/json/';
    const [countryCode, setCountryCode] = useState(null)

    useEffect(() => {
        axios.get(metadataUrl)
            .then(metadata => {
                setCountryCode(metadata.data.countryCode);
            })
            .catch();
    }, [metadataUrl]);

    let paymentButtons = [<PaypalPaymentButton/>]
    if (countryCode === 'IN') {
        paymentButtons.push(<UpiPaymentButton/>)
    }

    paymentButtons = insertTokenEveryN(paymentButtons, <br/>, 1, false);

    return (
        <animated.div className={"box absolute-block-center shadow-big"} style={props}>
            <p className={"text-center header"}>Donate</p>
            <br/>
            <p className={"text-center subheader"}>Pay using:</p>
            <br/>
            {paymentButtons}
            <br/>
        </animated.div>
    );
}

const insertTokenEveryN = (arr, token, n, fromEnd) => {

    // Clone the received array, so we don't mutate the
    // original one. You can ignore this if you don't mind.

    let a = arr.slice(0);

    // Insert the <token> every <n> elements.

    let idx = fromEnd ? a.length - n : n;

    while ((fromEnd ? idx >= 1 : idx <= a.length))
    {
        a.splice(idx, 0, token);
        idx = (fromEnd  ? idx - n : idx + n + 1);
    }

    return a;
};

export default DonationBox;