# Interface Marketing learnylib

L'objectif de cette application est de mettre à disposition du pôle marketing une interface afin de créer et de suivre des actions.

The objective of this application is to provide the marketing department with an interface to create and track actions.

## Résultat 

![](src/Assets/resultat-1.png)
![](src/Assets/resultat-2.png)

Info : Ce projet contient des données relatif à la stratégie marketing de learnylib est ne doit en aucun cas se retrouver en mode "public" sur un repo. 

## Gestion des erreurs avec la librairie toastify

## L'authentification est gérée via la méthode SSO.

1) L'apprenant est redirigé depuis la plateforme vers l'application Pixel avec une clés d'authentification dans l'url.
2) Je récupère, depuis mon composant Login, la clés dans l'url
3) Une fois que j'ai récupéré le token je l'envoie à l'Api pour vérifier son authenticité cf(src/api => Authenticate).
4) L'Api vérifie en BDD que la clés existe et encore valide (pas encore utilisée, et créee il y a moins d'une heure).
5) L'Api renvoie un second token qui contien les identifiants de l'utilisateur.
6) L'application Pixel mémorise ce token, je le rajoute dans le localStorage et dans le headers des requêtes fetch

## Structure de l'application 

Adresse fake api server pour tester mes données : http://localhost:3006/actions