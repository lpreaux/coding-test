# Dockerfiles

There are multiple dockerfiles use as runners to verify the tests passed by students.

## Publication sur GitHub Container Registry

Premièrement, il faut build l'image docker :

```bash
docker build IMAGE_NAME[:TAG]
```

Ensuite, il faut push l'image sur le registre de container GitHub souhaité.  
Cela se fait en 2 étapes. Il faut d'abord ajouter un tag à l'image en le préfixant par l'url du registre GitHub (ghcr.io)
ainsi que le namespace GitHub (le nom du compte personnel ou de l'organisation GitHub) ; puis on push l'image :

```bash
docker image tag IMAGE_NAME[:TAG] ghcr.io/NAMESPACE/IMAGE_NAME[:TAG]
docker push ghcr.io/NAMESPACE/IMAGE_NAME[:TAG]
```


**Exemple avec `maven-project-test` :**

```bash
docker build -t maven-project-test:1.0.0 -f maven-project-test.Dockerfile .
```

On peut vérifier l'image construite avec la commande suivante :

```bash
docker image list maven-project-test
```


```bash
docker image tag maven-project-test:1.0.0 ghcr.io/lpreaux/maven-project-test:1.0.0
docker push ghcr.io/lpreaux/maven-project-test:1.0.0
```

Normalement, à partir de ce moment, je peux trouver mon image sur le GitHub Registry de me compte.

Admettons que j'ai également envie que cette version soit la `latest` :

```bash
docker image tag maven-project-test:1.0.0 ghcr.io/lpreaux/maven-project-test:latest
docker push ghcr.io/lpreaux/maven-project-test:1.0.0
```
