import React from 'react';
import paypalIcon from '../../assets/donation/paypal.svg';

function PaypalPaymentButton() {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"
              className={"payment-option block-center"} style={{backgroundColor: "#ffd857"}}>
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="7STNYYK3YX3WW"/>
            <input type={"submit"} className={"payment-overlay"} name="submit"/>
            <img src={paypalIcon} className={"absolute-block-center"} alt={"Paypal"}/>
        </form>
    );
}

export default PaypalPaymentButton;