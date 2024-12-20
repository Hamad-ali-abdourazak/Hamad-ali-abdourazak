________________________________________
# Planning Poker

Bienvenue sur Planning Poker, une application web pour estimer les tâches en équipe de manière collaborative.

---

## Fonctionnalités

- **Inscription et Connexion** : Les utilisateurs peuvent s'inscrire et se connecter pour accéder à l'application.  
- **Estimation des Tâches** : Les utilisateurs peuvent estimer les tâches en équipe en utilisant différentes règles de vote (unanimité, moyenne, médiane, majorité).  
- **Reprise de Partie** : Reprenez une partie en chargeant un fichier JSON contenant les tâches et les noms des utilisateurs.  
- **Discussion en Temps Réel** : Discutez en temps réel pendant l'estimation des tâches.  
- **Sauvegarde de l'État de la Partie** : Sauvegardez l'état actuel de la partie pour la reprendre plus tard.  

---

## Prérequis

- Un navigateur web moderne (**Chrome**, **Firefox**, **Edge**, etc.).

---

## Installation

### Étape 1 : Cloner le projet
Clonez le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/Hamad-ali-abdourazak/Projet-Poker.git
Étape 2 : Lancer l'application
1.	Ouvrez le fichier index.html dans votre navigateur.
2.	Optionnel :Installez l'extension Live Server pour votre éditeur de code 
    (par exemple Visual Studio Code) afin de lancer l'application en local.
________________________________________
Guide d'Utilisation
Inscription
1.	Cliquez sur le lien "Inscription" dans la barre de navigation.
2.	Remplissez le formulaire avec un nom d'utilisateur et un mot de passe.
3.	Cliquez sur "S'inscrire" pour créer un compte.
Connexion
1.Cliquez sur le lien "Connexion" dans la barre de navigation.
2.Remplissez le formulaire avec votre nom d'utilisateur et votre mot de passe.
3.Cliquez sur "Se connecter" pour accéder à l'application.
Commencer une Partie
1.	Sur la page d'accueil, cliquez sur "Commencer une partie".
2.	Configurez la partie : 
o	Nombre de joueurs
o	Noms des joueurs
o	Règles de vote
o	Tâches à estimer
3.	Cliquez sur "Commencer la Partie" pour démarrer.
Reprendre une Partie
1.	Cliquez sur "Reprendre une partie" sur la page d'accueil.
2.	Chargez un fichier JSON contenant les tâches et les noms des utilisateurs pour reprendre la partie.
________________________________________
Sauvegarde et Reprise de Partie
•json_progress.json :Contient l'état actuel de la partie (tâches restantes et noms des utilisateurs).
•json_results.json : Contient la liste des tâches et les votes finaux attribués par l'équipe.
________________________________________
Structure du Projet
•	Pages HTML
o	index.html : Page d'accueil de l'application.
o	setup.html : Page de configuration de la partie.
o	game.html : Page principale pour estimer les tâches.
o	connexion.html : Page de connexion.
o	inscription.html : Page d'inscription.
•	Dossier js : Contient les fichiers JavaScript de l'application.
o	connexion.js : Gestion de la connexion.
o	inscription.js : Gestion de l'inscription.
o	game.js : Gestion de l'estimation et de la logique de jeu.
•	Dossier css : Contient les fichiers CSS pour le style de l'application.
•	Dossier json :
o	json_progress.json : État actuel de la partie.
o	json_results.json : Résultats finaux.
________________________________________


