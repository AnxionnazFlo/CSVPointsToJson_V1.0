# ATTENTION NE PAS METTRE EN PROD !
# Projet CSV Points to JSON

## 1. Contexte de la webapp

Module de transformation d'un fichier CSV en JSON  
L'objectif est de faire une application mono-page permettant de tranformer un fichier CSV en JSON exploitable pour l'application web Cooperider.  
Nous avons à disposition les APIs de Google (place et geocoding).  

#### 1.1 Fonctionnalitées désirées :

- Récupérer et parser un fichier CSV pour en faire un tableau exploitable
- Récupérer les Places ID des lieux via les Apis Google
- Récupérer les détails des places via les Apis Google
- Afficher les JSONs de sortie dans la console de l'inspecteur
- Gérer les erreurs afin de les identifiées

#### 1.2 Contrainte technique : 

- Toute la page doit être gérée en Front
- Pas de langage back

## 2. Environnement technique

- HTML 5
- JS Vanilla
- APIs Google Place (geocoding, details)
- Pas de Design Patern pour ce petit projet
- Xampp (ou autre en fonction de l'OS) pour les requètes AJAX


## 3. Procédure de mise en place en local

- Cloner le dossier sur votre ordinateur avec  
  `git clone https://github.com/AnxionnazFlo/CSVPointsToJson_V1.0`  

- Changer le path vers le fichier CSV à traiter

- Changer les API Key Google dans les fichier geolocatApi.js et placeIdApi.js

- Suivre le tuto vidéo pour la procédure complète

- Attention ne pas mettre en prod, cette webapp est faite pour fonctioner en local !

- Tout devrais fonctionner à présent

#### Have fun