# Example : container maven-project-test

Voici un petit projet d'exemple maven pour tester l'utilisation du container `maven-project-test`.

## Exécution des tests du projet

Pour exécuter les tests du projet avec le container `maven-project-test` exécuter la commande suivante :

```bash
docker run -v ./sample-project:/workdir $(docker build -q -f ../../../dockerfiles/maven-project-test.Dockerfile .)
```
