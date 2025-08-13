---
# layout: "../layouts/BlogLayout.astro"
title: "E-Comerce - UI"
description: "Tienda en línea con pasarela de pagos, autenticación y panel de administración."
image: "/images/e-comerce-project.png"
technologies: ["React", "Tailwind", "Redux", "ReactRouter" ]
githubUrl: "https://github.com/Chencho34/shopping-cart"
demoUrl: "https://cart-shopping-app.netlify.app/"
featured: true
date: 2025-06-10
---

# Descripción General

Este proyecto es una aplicación de e-commerce desarrollada con React y TypeScript, diseñada para ofrecer una experiencia de compra moderna, intuitiva y visualmente atractiva. Al ingresar, los usuarios son recibidos por un carrusel (slider) tipo hero que destaca promociones, productos y novedades de la tienda. La interfaz es limpia y minimalista, facilitando la navegación y el acceso rápido a las distintas secciones como productos, carrito de compras, favoritos y perfil de usuario.

El sistema permite a los usuarios explorar una galería de productos organizada en un diseño tipo "masonry" (rejilla fluida), donde pueden añadir productos al carrito o marcarlos como favoritos con un solo clic. Además, los usuarios pueden registrarse, iniciar sesión y gestionar su perfil y configuraciones personales. Para la administración, existe un panel exclusivo donde los administradores pueden gestionar productos y usuarios, así como crear nuevos productos y visualizar estadísticas generales.




Aplicación de **e-commerce** desarrollada con **React** y **TypeScript**, diseñada para ofrecer una experiencia de compra moderna, intuitiva y visualmente atractiva.  
Incluye un **carrusel tipo hero** para destacar promociones y novedades, una **galería de productos en diseño masonry**, y funciones como **carrito de compras**, **favoritos**, **registro e inicio de sesión**, y **gestión de perfil**.  
Cuenta con un **panel de administración** para manejar productos, usuarios y visualizar estadísticas.  
La interfaz es **minimalista y completamente responsiva**, con animaciones y transiciones suaves para una experiencia fluida.


## Características Principales

- **Diseño Minimalista y Responsivo:** Interfaz moderna, limpia y adaptable a cualquier dispositivo.
- **Carrusel Hero:** Slider principal en la página de inicio para destacar promociones y novedades.
- **Galería de Productos:** Visualización de productos en formato masonry, con imágenes grandes y descripciones claras.
- **Carrito de Compras:** Añade, elimina y ajusta la cantidad de productos en el carrito, con resumen de compra y subtotal.
- **Favoritos:** Permite marcar productos como favoritos y acceder a ellos fácilmente.
- **Autenticación de Usuarios:** Registro, inicio de sesión y gestión de sesión segura.
- **Perfil y Configuración de Usuario:** Visualiza y edita información personal.
- **Panel de Administración (Admin Dashboard):** Gestión de productos y usuarios, creación y eliminación de productos, búsqueda y filtrado.
- **Animaciones y Transiciones:** Experiencia visual fluida y atractiva.
- **Footer Informativo:** Enlaces a servicios, ayuda, información de la empresa y redes sociales.
- **Integración con API:** Consumo de endpoints para usuarios y productos.
- **Soporte para Temas Oscuro/Claro:** (opcional, según configuración de Tailwind).

## Detalles Técnicos

| Frontend                  | Estado Global         | API & Servicios         | Herramientas & Tools         | Estilos y UI                |
|---------------------------|----------------------|------------------------|------------------------------|-----------------------------|
| React                     | Redux Toolkit        | Fetch API              | Vite                         | Tailwind CSS                |
| TypeScript                | Redux Persist (op.)  | Servicios REST         | ESLint + TypeScript ESLint   | Tailwind Merge              |
| React Router DOM          |                      |                        | PostCSS                      | React Slick (slider)        |
| React Icons               |                      |                        | Autoprefixer                 | Slick Carousel (slider CSS) |
| React Responsive Masonry  |                      |                        |                              |                             |

**Notas:**
- **Frontend:** Todo lo relacionado con la construcción de la interfaz y la experiencia de usuario.
- **Estado Global:** Manejo del estado compartido entre componentes y páginas.
- **API & Servicios:** Comunicación con el backend y lógica de negocio.
- **Herramientas & Tools:** Utilidades para desarrollo, calidad de código y build.
- **Estilos y UI:** Frameworks y librerías para el diseño visual

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

---

## Capturas de pantalla