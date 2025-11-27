---
title: "Sistema de Gestión de Inventario"
description: "API CRUD simple para gestión de inventario con operaciones básicas de productos y control de stock."
tags: ["Node.js", "Express", "MongoDB", "REST API"]
githubLink: "https://github.com/OscarDRD/API-de-Gestion-de-Inventario-Simple-CRUD-"
---
## El Reto
Manejar la concurrencia en el inventario durante eventos de alto tráfico como el Black Friday.

## Arquitectura
Se implementó una arquitectura basada en eventos utilizando Apache Kafka para desacoplar el servicio de órdenes del servicio de inventario.
