const express = require('express');
const app = express();
var port = 3000;
const { body, validationResult } = require('express-validator/check');
const bodyParser = require('body-parser');
const { Order } = require('../server/models')
const userValidator = require('./services/validators')

app.use(express.static('system-analysis-project/public'))

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    //res.render('template');
});

app.get('/template', function(req, res) {
    res.render('template');

})

app.post('/template', urlencodedParser, userValidator, (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const { name, surname, email, address, country, state, zip, cc_name, cc_number, cc_expiration, cc_cvv } = req.body;
    // res.send(req.body)
    Order.create({ name, surname, email, address, country, state, zip, cc_name, cc_number, cc_expiration, cc_cvv })
})

app.listen(port, function() {
    console.log('Server started on 3000 port')
});

// userValidator,