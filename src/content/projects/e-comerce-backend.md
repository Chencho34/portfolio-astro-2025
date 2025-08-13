---
# layout: "../../layouts/BlogLayout.astro"
title: "E-comerce - Backend"
description: "Tienda en línea con pasarela de pagos, autenticación y panel de administración. Tienda en línea con pasarela de pagos, autenticación y panel de administración. Tienda en línea con pasarela de pagos, autenticación y panel de administración."
image: "/images/ktm-project.png"
technologies: ["Node", "Postgres", "Sequelize", "Express", "TypeScript", "Docker", "Jwt"]
githubUrl: "https://github.com/Chencho34/shopping-cart-backend/tree/user-endpoints"
featured: true
date: 2025-06-10
---

# Documentación del Proyecto: Cart Shopping Backend

## 1. Descripción General

Este proyecto es el backend de una aplicación de e-commerce, diseñado para gestionar usuarios, productos y operaciones relacionadas con el carrito de compras. Su objetivo es ofrecer una experiencia de compra sencilla, rápida y segura, permitiendo a los usuarios registrarse, iniciar sesión y administrar sus cuentas. El sistema está preparado para integrarse con cualquier frontend moderno y cuenta con endpoints robustos para todas las operaciones esenciales de una tienda en línea.

Entre las funcionalidades implementadas se encuentran la autenticación de usuarios, la gestión de cuentas y la protección de datos sensibles mediante cifrado de contraseñas y generación de tokens de acceso. El backend está pensado para ser escalable y fácil de mantener, utilizando prácticas modernas de desarrollo y una arquitectura modular. Además, la estructura del proyecto facilita la incorporación de nuevas características, como la gestión de productos y un panel de administración para monitorear la actividad de la tienda.

## 2. Características Principales

- **Diseño Minimalista y Modular:** Organización clara en módulos para facilitar la escalabilidad y el mantenimiento.
- **Gestión de Usuarios:** Registro, inicio de sesión, consulta, actualización y eliminación de usuarios.
- **Autenticación Segura:** Uso de JWT para autenticación y bcrypt para cifrado de contraseñas.
- **Validación de Datos:** Validación robusta de datos de entrada usando Joi.
- **Preparado para Carrito de Compras:** Estructura lista para integrar funcionalidades de carrito, productos y pedidos.
- **Preparado para Dashboard Administrativo:** Arquitectura pensada para añadir paneles de administración.
- **API RESTful:** Endpoints claros y documentados para facilitar la integración con cualquier frontend.
- **Soporte para Docker:** Configuración lista para desplegar en contenedores Docker.
- **Logs y Monitoreo:** Integración con morgan para registro de peticiones HTTP.
- **Configuración por Entorno:** Uso de variables de entorno para una configuración flexible y segura.

## 3. Detalles Técnicos

| Backend & Core         | Seguridad & Validación      | Base de Datos & ORM         | Desarrollo & Calidad      |
|------------------------|----------------------------|-----------------------------|---------------------------|
| Node.js                | bcryptjs                   | PostgreSQL                  | TypeScript                |
| Express                | jsonwebtoken               | pg                          | ts-node-dev               |
| cors                   | Joi                        | pg-hstore                   | ts-standard               |
| dotenv                 |                            | sequelize                   | typescript                |
| morgan                 |                            |                             | ESLint                    |

## 4. Información Adicional Útil

- **Estructura de Carpetas:** El proyecto está organizado para separar la lógica de negocio, configuración, modelos de datos y rutas de la API.
- **Fácil Despliegue:** Gracias a Docker y Docker Compose, puedes levantar el entorno completo con un solo comando.
- **Preparado para Producción:** Uso de variables de entorno y separación de dependencias para diferentes entornos.
- **Extensible:** Arquitectura que permite añadir fácilmente nuevas entidades y funcionalidades.
- **Buenas Prácticas:** El código sigue buenas prácticas de desarrollo, facilitando su comprensión y extensión.

---
