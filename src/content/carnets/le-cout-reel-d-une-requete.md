---
title: "Le coût réel d'une requête qui ne sait pas ce qu'elle cherche"
category: hors-piste
date: 2026-09-15
tags: [ia, apprentissage, outils, consommation, pilotage]
teaser: "Un samedi soir, ma courbe de dépenses a pris une forme que je ne lui connaissais pas. 12$. Puis 14$. En deux jours."
---

Un samedi soir, j'ai ouvert mon tableau de bord. La courbe avait pris une forme que je ne lui connaissais pas. Une bosse. Puis une autre, plus haute. 12$. Puis 14$. En deux jours.

D'habitude, je sais ce que je dépense. Pas ce week-end-là.

## Ce que les graphs m'ont dit

J'ai regardé les trois graphiques côte à côte.

**Usage par modèle** : un mur de couleurs. Cin, six modèles empilés sur une même journée. Aucun ne dominait.

**Volume de requêtes** : un pic à près de 900 le 5 septembre.

**Tokens** : 45 millions en une journée. Et à côté, le cache : une barre orange énorme, mais aussi une barre grise tout aussi haute. Le cache avait joué. Mais pas assez.

## Le diagnostic

J'ai compris ce qui s'était passé.

Je n'avais pas piloté. J'avais tiré.

Un prompt qui ne rendait pas ce que je voulais ? J'ai changé de modèle. Toujours pas ? J'en ai essayé un autre. Le contexte devenait lourd ? J'ai relancé une nouvelle session.

En ingénierie logicielle, il y a un mot pour cela : le *shotgun debugging*. Quand on ne sait pas ce qui ne va pas, on change tout et on espère que quelque chose tombe juste. Ce week-end-là, j'ai fait du shotgun debugging avec des agents.

## L'effet composé

Le coût n'est pas le vrai problème. C'est un proxy.

Chaque requête inutile ajoute de la latence. Chaque tentative ratée pollue le contexte, rendant les suivantes moins susceptibles de réussir. Chaque changement de modèle sans raison introduit de la variance qui rend le débogage quasi impossible.

Je ne dépensais pas plus. Je dégradais activement la qualité de mes propres résultats. Le cache, que je croyais être mon filet de sécurité, ne sauvait que ce qui était déjà stabilisé. Il ne sauvait pas l'expérimentation erratique. Il la rendait juste un peu moins chère.

## La discipline

Les jours qui ont suivi, j'ai fait autre chose.

J'ai choisi un modèle avant d'écrire le prompt. Pas après l'échec de la tentative précédente. Quand quelque chose ne fonctionnait pas, la réponse n'était plus « réessayer ». C'était « comprendre pourquoi, ajuster, puis essayer une fois ».

Les pics ont disparu. La courbe est redevenue plate. 2$ par jour. 80 requêtes. Chaque requête ajustée. Chaque choix intentionnel.

## Ce qui a changé

Ce qui m'est arrivé ce week-end-là, c'est ce qui arrive à des milliers de personnes en ce moment. La première technologie expérimentale qui sort directement dans les mains du grand public. Avant, il y avait un filtre. Aujourd'hui, c'est l'inverse. Vous payez l'abonnement. Vous apprenez en dépensant.

Nous avons passé des années à attendre que les modèles deviennent plus capables. Mais la contrainte a changé de camp.

Le vrai goulot d'étranglement n'est plus le modèle. C'est l'humain dans la boucle. Son jugement. Sa capacité à lire un output et à décider s'il faut itérer ou rediriger. Aucune amélioration de modèle ne se substituera à cela.

La prochaine vague de productivité ne viendra pas d'un nouveau moteur plus rapide. Elle viendra de ceux qui auront appris à ne plus appuyer sur le bouton jusqu'à ce que quelque chose tombe.

Ceux qui auront compris que piloter n'est pas consommer.
