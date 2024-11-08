const functions = require('firebase-functions');
const express = require ('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51Pu8FnFz6ADdRgO2fNyh2pPZ8BIw6F1dkaAD0BBRX7cCy08WQvSyhypUtEPop3m1gETYMX5p2RoLmpS1PCJdIv1e008GU9Z8t2'
)

const app = express();

app.use(cors({origin: true}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Update to your client's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello from Firebase!'))

app.post('/payments/create', async(req, res) =>{
    const totalPrice =req.query.total;

    console.log('payment request received for amount >>>', totalPrice);


    const amount = parseInt(totalPrice, 10);
    if (isNaN(amount) || amount <= 0) {
        return res.status(400).send({ error: 'Invalid amount' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating PaymentIntent:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: 'usd'
//     })

//     res.status(201).send({
//         clientSecret: paymentIntent.client_secret
//     })
// })

exports.api = functions.https.onRequest(app)

// http://127.0.0.1:5001/airbnb-react-64656/us-central1/api


