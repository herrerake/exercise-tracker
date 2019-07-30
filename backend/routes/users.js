const router = require('express').Router();
let User = require('../models/user.model');

//handles incoming HTTP get request at /user url
router.route('/').get((req, res) => {
    User.find() //mongoose method that gets all the users from the database. returns a promise in JSON format
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming HTTP post request at /user url
router.route('/add').post((req, res) => {
    const username = req.body.username; //saving the incoming username text to this variable

    const newUser = new User({username}); //here were create a new instance of a user with that username text

    newUser.save() //here is where saving the new user to the database
        .then(() => res.json('User added!')) //here were returning/confirming this happened
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;