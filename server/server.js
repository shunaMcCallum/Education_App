const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('countriesApp');
        const countriesCollection = db.collection('countries');
        const countriesRouter = createRouter(countriesCollection);
        app.use('/api/countries', countriesRouter);

        const usersCollection = db.collection('users');
        const usersRouter = createRouter(usersCollection);
        app.use('/api/users', usersRouter);
    })
    .catch(console.error)

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});