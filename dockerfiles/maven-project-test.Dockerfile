FROM maven:3.9.9-eclipse-temurin-21-alpine
LABEL authors="lpreaux"
LABEL org.opencontainers.image.source="https://github.com/lpreaux/coding-test"

WORKDIR /workdir

ENTRYPOINT ["mvn", "clean", "test"]
