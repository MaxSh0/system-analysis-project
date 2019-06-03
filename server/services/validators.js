const { body } = require('express-validator/check');

module.exports = [
    body('email').isEmail().normalizeEmail(),
    body('name').not().isEmpty().trim()
]