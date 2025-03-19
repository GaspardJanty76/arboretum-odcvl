# Arboretum pour ODCVL

Ce projet est une WebApp créée lors de mon alternance chez ODCVL.

L'enjeu était de créer une activité ludique destinée aux enfants pour leur faire découvrir et apprendre les différents arbres présents au [Manoir d'Argueil](https://odcvl.org/le-manoir-d-argueil).
L'activité devait être disponible sur format tablettes je suis donc parti sur une WebApp en utilisant React pour car il permet une gestion efficaces des composants étant donné que les pages de ma WebApp sont redondantes

Le jeu s'articule autour de scan de QR codes de quiz. l'idée du jeu est donc d'avoir un indice pour deviner l'arbre, de s'y rendre, de scanner le QR code, si c'est le mauvais arbre on demande de recommencer et si c'est le bon arbre cela affiche une page descriptive de l'arbre. 
Ensuite dès que les enfants ont terminés la lecture du descriptif ils peuvent passer à un petit quiz sur l'arbre précédemment vu avec un compteur de bonnes réponses et ensuite cela passe à l'abre suivant etc.

J'ai découpé le domaine en  zones car il y a 16 arbres en tout dans au manoir d'Argueil et il fallait une activité qui ne dure par plus d'une heure donc on peut retrouver 3 zones (Diamant, Perle et Platine, un clin d'œil aux meilleurs jeux de la licence Pokémon :slight_smile:) donc on a 3 mini activités d'une durée comprise entre 30 et 50 minutes.

On a la génération des QR codes intégrés à l'application pour une utilisation des plus simple 

Pour finir chaque QR code d'arbre est flashable indépendamment sans utiliser le jeu et cela permet d'afficher la page descriptive de ce dernier


Ce projet à été pensé pour être modifiable et adaptable à n'importe quel activité si on garde le fonctionnement général car tous les descriptifs des arbres sont contenus dans un fichier treeData qui peut être modifiable à votre guise.

Le jeu est disponible en ligne via ce [lien](https://arboretum-odcvl.vercel.app/)
