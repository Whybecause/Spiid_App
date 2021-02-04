# Getting Started with Spiid

This is a school project, only for developpement.


### Fonctionnalités disponibles :

Gestion du login
Affichage de la google map qui récupère les positions des vehicule (stockées dans la bdd)
Demande l'autorisation de géolocaliser l'utilisateur pour afficher la map près de lui.

Intègre la fonctionnalité de scanner les QR COde ('npm i react-qr-reader')
Dès que le scan est effectué, l'utilisateur est redirigé sur une page de confirmation avec un bouton qui une fois cliqué valide la réservation.

L'utilisateur peut alors se rendre sur son profil et voir les détails de sa réservation ainsi que l'historique des réservations passées.

Il peut cliquer sur un bouton pour terminer la réservation.



## Available Scripts

In api :

### 'npm run dev
Runs the app in developpement mode : http://localhost:8080

In pwa : 

### 'npm start'

Runs the app in developpement mode : http://localhost:3000

### 'npm run build' :

Create a build project for production, which is served by the api: open http://localhost:8080 

In site : 

### 'npm start'

Runs the app in developpement mode : http://localhost:8081

### 'npm run build'

# API ROUTES - USER

### POST /api/signup
Register a user in db
Takes some body parameters : 
name, email, password, passwordConfirm

### POST /api/login
Takes some body parameters : email, password
Create a token for the user.

### GET /api/logout
Deletes the user token

### GET /api/user
Gets id of current User

### GET /api/user:id
id = user id
Returns user informations (if current rental, pasted rentals)

# API ROUTES - VEHICULE

### POST /api/vehicule
Insert new vehicule in DB
Note: the QR code is not created by default you need to user the patch route and user the vehicule id you just created.

### PATCH /vehicule/:id
Generate a qr code with the id of vehicule.
QR code is stored in db with the vehicule + in a local folder.

### GET /vehicule/:id
Returns informations of the specified vehicule

### GET /availableVehicule
Returns only the vehicules which availablity status is true
(Allows to display on the map only the available vehicules)

### GET /vehicule
Returns a list of all vehicules created

# API ROUTES - RENTAL

### GET /api/rental/:id
Returns all the rentals of a the current user

### POST /api/rental/:id
:id : of a vehicule
->insert a new rental in db with vehicule and user informations
-> Update vehicule availability status to 'off'

### PATCH /rental/endRental
Ends the current rental for the current user.
-> Turns rentals status 'isFinished' to false
-> Turns vehicule status 'availability' to true


### Fonctionnalités à intégrer
Gestion des données de paiement utilisateurs avec api externe
Inscription par réseaux sociaux
Calcul du cout du paiement à la fin de la réservation selon la durée écoulée.
Intégrer un système de paiement
Ajout des features telles que les points bonus, codes promo…

### Refactoring possible
Système de gestion des rôles à stocker dans le token plutôt que de faire une requête en bdd directement.

Se passer des cookies pour gérer les user, car ils sont appelés à chaque route vu qu’ils sont dans un middleware.
