const express = require('express'); // L'import d'express
const router = express.Router(); // Création du router via express


// L'import du contrôleur user
const userCtrl = require('../controllers/user');

// L'import des middlewares



// Route POST pour enregistrer des contes utilisateurs   
router.post('/signup', userCtrl.signup);
// Route POST pour la connexion des utilisateurs  
router.post('/login', userCtrl.login);


// routes de l'utilisateur
router.get('/user-profile/:userId', userCtrl.getOneUser);

// L'exporte vers la app
module.exports = router;