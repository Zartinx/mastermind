/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

//console.log("coucou"); 

import './styles/app.css';
import './Jeu/js-mastermind/css/normalize.css'
import './Jeu/js-mastermind/css/main.css'


import './Jeu/js-mastermind/js/main.js'
import './scripts.js'

import Routing from 'fos-router';
const routes = require('./js/routes.json');
Routing.setRoutingData(routes);
console.log(Routing.generate('app_partie_new'), Routing.generate('app_classement_new')); 
// L'erreur lors du lancement de la partie vient de l'app.js et ne va pas au niveau d'après ( tracking.js) donc je ne peux pas tester si mon calssement controller fonctionne bien

