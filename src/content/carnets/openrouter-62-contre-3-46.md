---
title: "62$ contre 3,46$ : ce que mon tableau de bord OpenRouter m'a appris sur l'IA"
category: contre-jour
date: 2026-09-10
tags: [signaux-faibles, ia, openrouter, travail, connaissance]
teaser: "Il y a un chiffre qui m'a frappée : 18x. Le ratio de coût entre deux personnes qui utilisent exactement les mêmes agents IA."
---

Il y a un chiffre qui m'a frappée ce mois-ci : 18x.

C'est le ratio de coût entre deux personnes qui utilisent exactement les mêmes agents IA, sur la même plateforme, au même moment. L'une dépense 62$ par mois. L'autre 3,46$. La seule variable, c'est la personne derrière le clavier.

## La première technologie « Try it » à l'échelle publique

Je m'arrête un instant sur ce que cela signifie.

L'IA générative est la première technologie expérimentale de l'histoire qui sort directement dans les mains du grand public. Avant, il y avait un filtre. Les entreprises testaient en interne pendant des années. Les chercheurs publiaient des papiers. Les ingénieurs construisaient des prototypes. Puis, quand la technologie était mature, elle arrivait chez vous.

Aujourd'hui, c'est l'inverse. Vous êtes le cobaye. Vous payez l'abonnement. Vous apprenez en dépensant. Et personne ne vous a expliqué comment conduire.

C'est pour cela que mon tableau de bord OpenRouter ressemble à un mur de couleurs. Cinq ou six modèles empilés. Des pics à 600 requêtes par jour. Des dépenses qui grimpent sans que je sache pourquoi. Je fais du vrai travail. Mais je ne sais pas ce que je fais.

## Le shotgun debugging

En ingénierie logicielle, il y a un mot pour cela : le *shotgun debugging*. Quand on ne sait pas ce qui ne va pas, on change tout et on espère que quelque chose tombe juste.

C'est exactement ce que je fais. Mon prompt échoue ? J'essaie un autre modèle. Ça ne marche toujours pas ? J'en essaie un troisième. Je teste GLM, puis Kimi, puis MiMo, sans savoir pourquoi. Je ne diagnostique pas. Je tire au hasard.

Et chaque tentative ratée ne coûte pas juste de l'argent. Elle pollue le contexte. Elle dégrade la qualité de la prochaine tentative. Elle engendre plus de retries. C'est un effet composé du gaspillage. Le cercle n'est pas vicieux. Il est fermé. On génère plus vite. On corrige plus longtemps. On ne construit rien.

## L'effet exponentiel

Le coût n'est pas le vrai problème. C'est un proxy pour quelque chose de pire.

Chaque requête inutile ajoute de la latence. Chaque retry raté rend les suivants moins susceptibles de réussir. Chaque changement de modèle sans raison introduit de la variance qui rend le débogage impossible. Je ne dépense pas 18 fois plus. Je dégrade activement la qualité de mes propres résultats.

Le professionnel, lui, fait 80 requêtes par jour. Pas 600. Chaque requête est ajustée. Le modèle est choisi avant l'écriture du prompt, pas après l'échec. Quand quelque chose ne fonctionne pas, la réponse n'est pas « réessayer ». C'est « comprendre pourquoi, ajuster, puis essayer une fois ».

Cette discipline transforme une journée à 15$ en une journée à 2$.

## Ce que cela révèle sur l'industrie

Le vrai goulot d'étranglement n'est plus le modèle. C'est l'humain dans la boucle.

Nous avons passé des années à rendre les modèles plus capables. La contrainte est désormais notre jugement. Notre capacité à lire un output et à décider s'il faut itérer ou rediriger. Aucune amélioration de modèle ne se substitue à cela.

Et cela a des implications qui dépassent ma facture OpenRouter.

## L'arithmétique froide

Si une seule personne qui pilote mal les agents dépense 18 fois plus qu'une personne qualifiée, que se passe-t-il à l'échelle d'une entreprise ?

Une équipe de cinq personnes qui pilote mal les agents dépensera cent fois plus qu'un opérateur qualifié seul — et produira de moins bons résultats. Former les gens à bien piloter l'IA n'est pas un luxe. C'est la différence entre un workflow viable et un centre de coûts incontrôlé.

Et si cela se reproduit à l'échelle de l'économie ?

La dette souveraine des pays avancés dépasse 110 % du PIB. Cet édifice ne tient que grâce à une hypothèse : la croissance future de la productivité. Or, la productivité stagne depuis 2005. Et la technologie censée la sauver — l'IA — contribue, selon les dernières analyses macroéconomiques, à « zéro » de croissance agrégée.

Nous avons bâti une montagne de dette sur la promesse que la machine nous sauverait. Mais la machine ne fait que polir le vide. Et nous ne savons pas encore comment la conduire.

## La question

Le vrai sujet n'est pas de savoir si l'IA va remplacer les humains. C'est de savoir qui saura la piloter.

Parce que lorsque le vrai choc arrivera — économique, géopolitique, climatique — la question ne sera pas de savoir si le système s'effondre. Les systèmes bâtis sur le déclin des compétences s'effondrent toujours.

La question sera de savoir qui sera encore dans la pièce, capable de reconnaître le réel, quand le modèle ne suffira plus.

C'est pour cela que je construis mes propres outils. Pas pour être plus rapide. Pour savoir pourquoi chaque requête est envoyée.
