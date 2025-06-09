import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({amount,onSuccess,onError}) => {
    return (
        <PayPalScriptProvider options={{
            "client-id":
                import.meta.env.VITE_PAYPAL_CLIENT_ID ,
        }}
        >

            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount // Replace with the actual amount
                            }
                        }]
                    });
                }}

                onApprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess)
                }}

                onError={(err) => {
                    console.error("PayPal Button Error:", err);
                    alert("Payment Failed. Try again.");
                }}
            >

            </PayPalButtons>

        </PayPalScriptProvider>
    )
}

export default PayPalButton