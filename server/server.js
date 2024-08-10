const exp = require('express');
const app = exp();
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const DB_URL = process.env.DB_URL;

MongoClient.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => {
    const dbObj = client.db('cineMatix');
    const moviesObj = dbObj.collection('moviescollection');
    const theatresObj = dbObj.collection('theatrescollection');
    const bookingsObj = dbObj.collection('bookingscollection');

    app.set('moviesObj', moviesObj);
    app.set('theatresObj', theatresObj);
    app.set('bookingsObj', bookingsObj);
    console.log('connected to database');
}).catch(err => {
    console.log(err);
});

app.use(exp.json());

app.use((err, req, res, next) => {
    res.send({ message: "error", payload: err.message });
});

app.listen(process.env.PORT || 5000, () => {
    console.log('listening on port 5000');
});
