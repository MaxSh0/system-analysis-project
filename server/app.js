const express = require('express');
const app = express();
var port = 3000;
const { body, validationResult } = require('express-validator/check');
const bodyParser = require('body-parser');
const { Order } = require('../server/models')
const userValidator = require('./services/validators')

app.use(express.static('system-analysis-project/public'))

app.use(express.json());

app.get('/hello', function(req, res, next) {
    res.send('hello');

});


app.post('/api/dataup', userValidator, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    res.send(req.body)

    const { name, surname, email, address, country, state, zip, cc_name, cc_number, cc_expiration, cc_cvv } = req.body;
    Order.create({ name, surname, email, address, country, state, zip, cc_name, cc_number, cc_expiration, cc_cvv })
})

app.listen(port, function() {
    console.log('Server started on 3000 port')
});