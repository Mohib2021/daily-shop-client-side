import React, { useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import AlertBox from "../../AlertBox/AlertBox";
import useAuth from "../../../CustomHooks/Context/useAuth";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
function CheckOut({ price, name, email, id }) {
	const { setShow } = useAuth();
	const [heading, setHeading] = useState("");
	const [message, setMessage] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const [process, setProcess] = useState(false);
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch(
			"https://murmuring-lowlands-26250.herokuapp.com/create-payment-intent",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ price }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, [price]);

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}
		setProcess(true);
		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setHeading("Error Ops!!!!");
			setMessage(error.message);
			setShow(true);
			setProcess(false);
			return;
		}

		// payment intent
		const { paymentIntent, intentError } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: card,
					billing_details: {
						name: name,
						email: email,
					},
				},
			}
		);
		console.log(paymentIntent);
		if (intentError) {
			setHeading("Error Ops!!!!");
			setMessage(intentError.message);
			setShow(true);
		}
		if (paymentIntent.status === "succeeded") {
			setHeading("Success!!");
			setMessage(
				`Your payment ($${paymentIntent.amount}) is successfully done. Thank you.`
			);
			setShow(true);
			setProcess(false);

			const payment = {
				amount: paymentIntent.amount,
				last4: paymentMethod.card.last4,
				transaction: paymentIntent.client_secret,
			};
			fetch(
				`https://murmuring-lowlands-26250.herokuapp.com/orderPayment/${id}`,
				{
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(payment),
				}
			)
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	return (
		<div className="text-center">
			<h4> CheckOut</h4>
			<AlertBox heading={heading} message={message} />
			<form className="mt-3" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				{!process ? (
					<button
						className="mt-3 btn btn-success"
						type="submit"
						disabled={!stripe}
					>
						Pay ${price}
					</button>
				) : (
					<Stack
						sx={{ width: "100%", color: "grey.500", marginTop: "2rem" }}
						spacing={2}
					>
						<LinearProgress color="secondary" />
						<LinearProgress color="success" />
						<LinearProgress color="inherit" />
					</Stack>
				)}
			</form>
		</div>
	);
}

export default CheckOut;
