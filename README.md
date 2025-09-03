# Projet E-Commerce Microservices

## Description
Ce projet est une application d'e-commerce qui utilise une architecture de microservices. Chaque microservice est conçu pour gérer une fonctionnalité distincte du système, permettant une échelle et une maintenance facilitées.

## Microservices inclus
- **Service Utilisateur**: Gère l'inscription et l'authentification des utilisateurs.
- **Service Produit**: Gère l'affichage, l'ajout, et la mise à jour des produits.
- **Service Commande**: Gère le processus de commande, y compris le panier et l'historique des commandes.
- **Service Paiement**: Gère le traitement des paiements à l'aide de différentes méthodes de paiement.

## Technologies utilisées
- Node.js pour le backend
- MongoDB pour la base de données
- Docker pour la containerisation
- Kubernetes pour l'orchestration des containers

## Installation
1. Clonez le dépôt
2. Utilisez Docker Compose pour démarrer tous les services : `docker-compose up`
3. Accédez à l'application via `http://localhost:3000`

## Contribuer
Les pull requests sont les bienvenues. Si vous souhaitez contribuer, veuillez ouvrir un ticket pour discuter des changements que vous souhaitez apporter.

## Auteurs
- Votre Nom

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
