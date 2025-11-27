---
title: "API de E-commerce con Microservicios"
description: "Plataforma de comercio electrónico basada en microservicios con comunicación asíncrona para manejar altos volúmenes de tráfico."
tags: ["Spring Boot", "Kafka", "MongoDB", "Docker"]
githubLink: "https://github.com/OscarDRD/ecommerce-api"
---
## El Reto
Manejar la concurrencia en el inventario durante eventos de alto tráfico como el Black Friday.

## Arquitectura
Se implementó una arquitectura basada en eventos utilizando Apache Kafka para desacoplar el servicio de órdenes del servicio de inventario.
