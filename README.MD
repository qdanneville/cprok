# Skill tree
#### Description de l'applicaiton  

L'arbre de talent a pour but de centraliser tous les modules ainsi que toutes 
les compétences du référentiel CDA.

Chaque apprenant doit pouvoir situer son niveau par rapport aux différentes compétences du référentiel.
Chaque apprenant doit pouvoir se situer par rapport au niveau global de la promotion.

# TODO

Étape de Conception, concevoir une base de données : NIVEAU 1  
[ ] Description de l'application, explication & pitch  
[ ] Définir les différentes entités (modèles)  
[ ] Faire un MCD sur http://www.mocodo.net/ - Auto formation si nécessaires sur ce point  
[ ] Faire un MPD - Schéma de base de données - Auto formation si nécessaires sur ce point  

Maquetter une application : NIVEAU 2    
[ ] Utilisation de Figma   
[ ] Création de wireframe / maquettes    

Mettre en place une base de données : NIVEAU 2  
[ ] Utlisation du SGBD MYSQL  
[ ] Outils - phpmyadmin / Workbench  

Développer des composants dans le langage d'une base de données, back-end, multi-couche, composant métier : NIVEAU 2  
[ ] Nodejs - express - mysql  

Préparer et exécuter les plans de tests d’une application : NIVEAU 2  
[ ] Utilisation de postman  
[ ] Afficher les requêtes et les résultats des fonctionnalités énoncés dans le sujet  

Développer la partie front-end d'une interface : NIVEAU 1 - NIVEAU 2  
[ ] Mise en place d'une architecture front  
[ ] Bundler  
[ ] Mise en place des bonnes pratiques de conception  
[ ] Intégrations des maquettes  

# ENTITIES 

#### PADAWANS
- ID
- FIRSTNAME
- LASTNAME
- EMAIL

#### SKILLS
- ID
- NAME
- MODULE_ID
- DESCRIPTION_ID