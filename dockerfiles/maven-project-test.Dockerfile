FROM maven:3.9.9-eclipse-temurin-21-alpine
LABEL authors="lpreaux"

WORKDIR /workdir

ENTRYPOINT ["mvn", "clean", "test"]
