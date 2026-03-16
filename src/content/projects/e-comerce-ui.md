---

title: "E-Commerce Platform UI"
description: "Full-featured e-commerce frontend with shopping cart, favorites, authentication, and admin dashboard built with React, TypeScript, and Redux Toolkit."
image: "/images/preview-ecomerce-ui.webp"
technologies:
  - React
  - Vite  
  - TypeScript
  - Redux Toolkit
  - React Router v6
  - Tailwind CSS
githubUrl: "https://github.com/..."
demoUrl: ""
featured: true
date: 2024-12-21
type: "frontend"
images: [
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refs/heads/refactoring-services/public/screenshots/cartapp-hero-01.webp",
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-cart-04.webp",
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-settings-06.webp",
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-login-10.webp",
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-createproduct-07.webp",
  "https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-adminproducts-08.webp",

]


---

## Descripción breve

Plataforma de comercio electrónico (UI) construida con **React 18**, **TypeScript** y **Redux Toolkit**.  
Incluye carrito de compras, sistema de favoritos, autenticación con **JWT**, rutas protegidas por rol y un panel de administración para gestión de productos y usuarios. Consume una **API REST externa** vía variables de entorno.

---

## Funcionalidades principales

- **Carrito de compras**
  - Agregar y eliminar productos
  - Aumentar/disminuir cantidades (máx. 10 por producto)
  - Cálculo de subtotales en tiempo real
  - Vaciado completo del carrito

- **Sistema de favoritos**
  - Marcar y desmarcar productos
  - Galería con layout tipo **masonry**

- **Autenticación JWT**
  - Registro y login
  - Persistencia de sesión en `localStorage`
  - Rehidratación automática del estado

- **Rutas protegidas**
  - Acceso al carrito, perfil y configuración requiere autenticación
  - Panel de administración separado

- **Panel de administración**
  - Listar, crear y eliminar productos
  - Listar, buscar y eliminar usuarios

- **Carrusel hero + slider de categorías**
  - Secciones promocionales en el home

- **Página de detalle de producto**
  - Ruta dinámica `/product/:id`

- **Diseño responsivo**
  - Interfaz adaptable construida con **Tailwind CSS**

---

## Arquitectura

Estado global manejado con dos *slices* de **Redux Toolkit**:

- `cartSlice` — productos en carrito, favoritos, conteos y subtotales  
- `authSlice` — `isAuthenticated`, `user`, `token`

**API Layer** (`src/services/api/`) abstrae todos los llamados `fetch` a la **REST API externa** configurada vía `VITE_CART_APP_URL_API`.

Operaciones implementadas:

- `getProducts`
- `getProductById`
- `createProduct`
- `deleteProductById`
- `getUsers`
- `getUserByName`
- `deleteUserByName`
- `registerUser`
- `loginUser`

---

## Lo que resuelve / por qué es relevante

Demuestra dominio de **arquitectura frontend moderna con TypeScript estricto**:

- Separación clara de responsabilidades (`services → hooks → components → pages`)
- Gestión de estado predictiva con **Redux Toolkit**
- Control de acceso por **roles**
- Implementación desacoplada de backend, consumiendo una **API REST externa** sin depender de un framework full-stack