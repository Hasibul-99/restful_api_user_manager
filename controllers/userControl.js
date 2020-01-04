const UserModel = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        let body = req.body;

        let user = new UserModel({
            forename: body.forename,
            surname: body.surname,
            email: body.email,
            password: body.password,
            age: body.age,
            team: body.team
        });

        user.save()
        .then(result => {
            res.json({success: true, result: result})
        })
        .catch(err => {
            res.json({success: false, error: error})
        })
    },

    update: (req, res) => {
        UserModel.updateOne({_id: req.body._id}, req.body)
        .then(user => {
            if (!user) res.json({success: false, result: "User does not exist"});

            res.json(user)
        })
        .catch(err => {
            res.json({success: false, error: err});
        });
    },

    retrieve: (req, res) => {
        UserModel.find()
        .then(result => {
            if (!result) res.json({success: false, error: "no result found"});

            res.json({success: true, result: result});
        })
        .catch(err => res.json({success: false, error: err}));
    },

    delete: (req, res) => {
        UserModel.remove({_id: req.body._id})
        .then(result => {
            if (!result) res.json({success: false, error: "No user found"});
            res.json({success: true, result: result});
        })
        .catch(e => res.json({success: false, error: e}));
    }
}