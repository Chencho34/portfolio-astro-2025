---
title: "E-Comerce - UI ingles"
description: "Aplicación desarrollada con React y TypeScript, diseñada para ofrecer una experiencia de compra moderna, intuitiva y visualmente atractiva. Al ingresar, los usuarios son recibidos por un carrusel (slider) tipo hero que destaca promociones, productos y novedades de la tienda."
image: "/images/preview-ecomerce-ui.webp"
technologies: ["React", "Tailwind", "Redux", "ReactRouter" ]
githubUrl: "https://github.com/Chencho34/shopping-cart"
demoUrl: "https://cart-shopping-app.netlify.app/"
featured: true
date: 2025-06-10
lang: 'en'
---

# Descripción General del Proyecto

Plataforma e-commerce desarrollada con React y TypeScript, diseñada para ofrecer una experiencia de compra moderna, intuitiva y visualmente atractiva. Al ingresar, los usuarios son recibidos por un carrusel (slider) tipo hero que destaca promociones, productos y novedades de la tienda. La interfaz es limpia y minimalista, facilitando la navegación y el acceso rápido a las distintas secciones como productos, carrito de compras, favoritos y perfil de usuario.

## Características Principales

- **Diseño Minimalista y Responsivo:** Interfaz moderna, limpia y adaptable a cualquier dispositivo.
- **Carrusel Hero:** Slider principal en la página de inicio para destacar promociones y novedades.
- **Galería de Productos:** Visualización de productos en formato masonry, con imágenes grandes y descripciones claras.
- **Carrito de Compras:** Añade, elimina y ajusta la cantidad de productos en el carrito, con resumen de compra y subtotal.
- **Favoritos:** Permite marcar productos como favoritos y acceder a ellos fácilmente.
- **Autenticación de Usuarios:** Registro, inicio de sesión y gestión de sesión segura.
- **Panel de Administración (Admin Dashboard):** Gestión de productos y usuarios, creación y eliminación de productos, búsqueda y filtrado.

## Detalles Técnicos

| Frontend                  | Estado Global        | Herramientas & Tools         | Estilos y UI                |
|---------------------------|----------------------|------------------------------|-----------------------------|
| React                     | Redux Toolkit        | Vite                         | Tailwind CSS                |
| TypeScript                |                      | ESLint + TypeScript ESLint   | React Slick (slider)        |
| React Router DOM          |                      |                              |                             |
| React Icons               |                      |                              |                             |
| React Responsive Masonry  |                      |                              |                             |

## Estructura de Carpetas

- **src/components/**: Componentes reutilizables (botones, inputs, sliders, cards, etc.)
- **src/pages/**: Páginas principales (home, login, signup, cart, admin, etc.)
- **src/layout/**: Layouts para público, autenticación y administración.
- **src/reducers/**: Slices de Redux para carrito y autenticación.
- **src/services/**: Lógica de consumo de APIs.
- **src/hooks/**: Custom hooks para lógica de negocio.
- **src/constants/**: Datos estáticos y configuraciones.
- **src/types/**: Tipos y modelos TypeScript.

## Consideraciones Adicionales

- **Fácil Extensión:** La arquitectura modular permite agregar nuevas funcionalidades o secciones fácilmente.
- **Buenas Prácticas:** Uso de hooks personalizados, separación de lógica y presentación, y tipado estricto.
- **Preparado para Producción:** Configuración de ESLint, scripts de build y preview, y manejo de variables de entorno.
- **Accesibilidad:** Uso de etiquetas semánticas y navegación accesible.
- **Internacionalización:** El proyecto puede adaptarse fácilmente a otros idiomas.

## Capturas de pantalla

![Hero-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refs/heads/refactoring-services/public/screenshots/cartapp-hero-01.webp)
![Footer-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refs/heads/refactoring-services/public/screenshots/cartapp-footer-03.webp)
![cart-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-cart-04.webp)
![Favorites-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-favorites-05.webp)
![settings-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-settings-06.webp)

## Login / SignUp

![login-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-login-10.webp)
![signup-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-signup-11.webp)

## Admin Panel

![admin-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-createproduct-07.webp)
![users-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-adminproducts-08.webp)
![products-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-adminusers-09.webp)
