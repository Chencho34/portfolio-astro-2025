---
title: "E-Comerce - Backend"
description: "Este proyecto es el backend de una aplicación de e-commerce, diseñado para gestionar usuarios, productos y operaciones relacionadas con el carrito de compras. Entre las funcionalidades implementadas se encuentran la autenticación de usuarios, la gestión de cuentas y la protección de datos sensibles mediante cifrado de contraseñas y generación de tokens de acceso."
image: "/images/preview-ecomerce-backend.webp"
technologies: ["Node", "Postgres", "Sequelize", "Express", "TypeScript", "Docker", "Jwt"]
githubUrl: "https://github.com/Chencho34/shopping-cart-backend/tree/user-endpoints"
featured: true
date: 2025-06-10
---

# Descripción General del Proyecto

Este proyecto es el backend de una aplicación de e-commerce, diseñado para gestionar usuarios, productos y operaciones relacionadas con el carrito de compras. Entre las funcionalidades implementadas se encuentran la autenticación de usuarios, la gestión de cuentas y la protección de datos sensibles mediante cifrado de contraseñas y generación de tokens de acceso. El backend está pensado para ser escalable y fácil de mantener, utilizando prácticas modernas de desarrollo y una arquitectura modular.

## Características Principales

- **Diseño Minimalista y Modular:** Organización clara en módulos para facilitar la escalabilidad y el mantenimiento.
- **Gestión de Usuarios:** Registro, inicio de sesión, consulta, actualización y eliminación de usuarios.
- **Autenticación Segura:** Uso de JWT para autenticación y bcrypt para cifrado de contraseñas.
- **Validación de Datos:** Validación robusta de datos de entrada usando Joi.
- **Preparado para Carrito de Compras:** Estructura lista para integrar funcionalidades de carrito, productos y pedidos.
- **Preparado para Dashboard Administrativo:** Arquitectura pensada para añadir paneles de administración.
- **Soporte para Docker:** Configuración lista para desplegar en contenedores Docker.

## Detalles Técnicos

| Backend & Core         | Seguridad & Validación      | Base de Datos & ORM         | Desarrollo & Calidad      |
|------------------------|----------------------------|-----------------------------|---------------------------|
| Node.js                | bcryptjs                   | PostgreSQL                  | TypeScript                |
| Express                | jsonwebtoken               | pg                          | ts-node-dev               |
| cors                   | Joi                        | pg-hstore                   | ts-standard               |
| dotenv                 |                            | sequelize                   | typescript                |
| morgan                 |                            |                             | ESLint                    |

## Información Adicional Útil

- **Estructura de Carpetas:** El proyecto está organizado para separar la lógica de negocio, configuración, modelos de datos y rutas de la API.
- **Fácil Despliegue:** Gracias a Docker y Docker Compose, puedes levantar el entorno completo con un solo comando.
- **Preparado para Producción:** Uso de variables de entorno y separación de dependencias para diferentes entornos.
- **Extensible:** Arquitectura que permite añadir fácilmente nuevas entidades y funcionalidades.
- **Buenas Prácticas:** El código sigue buenas prácticas de desarrollo, facilitando su comprensión y extensión.

## Estructura de Carpetas

| Carpeta/Archivo   | Descripción                                      |
|-------------------|--------------------------------------------------|
| src/models/       | Definición de modelos de datos (Sequelize)        |
| src/routes/       | Definición de rutas de la API                     |
| src/controllers/  | Lógica de negocio y controladores                 |
| src/services/     | Servicios reutilizables (ej: autenticación)       |
| src/middlewares/  | Middlewares personalizados                        |
| src/config/       | Configuración de base de datos y entorno          |

---
