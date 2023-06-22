const User = require('../models/users');

exports.display = (req, res, next) => {
    User.find()
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(400).json({ error });
        })
};