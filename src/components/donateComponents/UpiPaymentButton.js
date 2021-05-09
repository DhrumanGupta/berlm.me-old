import React, {useState} from 'react';
import upiIcon from "../../assets/donation/upi.svg";
import myUpiCode from "../../assets/donation/myUpiCode.png";

function UpiPaymentButton(props) {
    const [shown, setShown] = useState(false)

    let image;
    if (shown) {
        image = <div style={{
            width: "100%",
            display: "grid",
            justifyItems: "center"
        }}>
            <br/>
            <img src={myUpiCode} style={{
                width: "70%",
                left: "50%"
            }}/>
            <br/>
            <a>
                berlm@icici
            </a>

        </div>
    }

    return (
        <div>
            <div className={"payment-option block-center"} style={{backgroundColor: "#e6e6e6"}}>
                <div className={"payment-overlay"} onClick={() => {
                    setShown(!shown);
                }}/>
                <img src={upiIcon} className={"absolute-block-center"} alt={"Paypal"}/>
            </div>
            {image}
        </div>
    );
}

export default UpiPaymentButton;