const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index');

const fs = require('fs');

const { User } = db.sequelize.models;

// const newToken = user => {
//   token = jwt.sign(
//       { userId: user.id},
//       `${'RANDOM_TOKEN_SECRET'}`,
//       { expiresIn: '24h' }
//   )
//   return { user, userId: user.id, token }
// };

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              age: req.body.age,
              profession: req.body.profession,
              bio: req.body.bio,
            })
            user.save()
              .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
              .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
    User.findOne({ where: {email: req.body.email}})
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.userId } })
        .then(user => res.status(200).json({ user }))
        .catch(error => res.status(404).json({ error }));
}