import React, {useState, useEffect} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const {_id, price, name, email} = order;
    
    useEffect(() => {
        fetch('https://desolate-beach-97825.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}` 
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)

        // confire card payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
        );

        if(intentError) {
            setCardError(intentError?.message)
            setSuccess('')
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is Completed')

            //store payment on database
            const payment = {
                orderId: _id,
                transactionId: paymentIntent.id,
            }
            
            fetch(`https://desolate-beach-97825.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })


        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='btn btn-success px-5 text-white mt-3' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                processing && 'Loading...'
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;