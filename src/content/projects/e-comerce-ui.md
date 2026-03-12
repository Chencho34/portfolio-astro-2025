---
title: "E-Commerce - UI"
description: "Esta es una aplicación moderna y completa de comercio electrónico construida con React, TypeScript y Redux Toolkit. Proporciona una experiencia de compra integral con autenticación de usuarios, gestión de productos y un panel de administración."
image: "/images/preview-ecomerce-ui.webp"
technologies: ["React", "Tailwind", "Redux", "ReactRouter" ]
githubUrl: "https://github.com/Chencho34/shopping-cart"
demoUrl: "https://cart-shopping-app.netlify.app/"
featured: true
date: 2025-06-10
type: "frontend"
---

# 🛍️ Descripción General  

Esta es una aplicación moderna y completa de comercio electrónico construida con React, TypeScript y Redux Toolkit.  
Proporciona una experiencia de compra integral con autenticación de usuarios, gestión de productos y un panel de administración.

## 🏗️ Arquitectura y Stack Tecnológico

### 🖥️ Frontend
- **React 18 con TypeScript** para un desarrollo tipado y seguro.  
- **Vite** como herramienta de construcción para un entorno de desarrollo rápido y compilaciones optimizadas.  
- **React Router DOM v6** para el enrutamiento del lado del cliente.

### ⚙️ Gestión de Estado
- **Redux Toolkit** con dos *slices* principales:  
  - **cartSlice**: gestiona el carrito de compras, favoritos, cantidades y subtotales.  
  - **authSlice**: maneja el estado de autenticación del usuario y la gestión de tokens.

### 🎨 Estilos y UI
- **Tailwind CSS** para un diseño con clases utilitarias.  
- **Tailwind Merge** para combinar clases de forma eficiente.  
- **React Icons** para iconografía.  
- **React Slick** con **Slick Carousel** para sliders de imágenes.  
- **React Responsive Masonry** para el diseño de la galería de productos.

## 📁 Estructura del Proyecto

```bash
src/
├── app/                 # Redux store configuration
├── components/          # Reusable UI components (17 components)
│   ├── button/
│   ├── card/
│   ├── nav/
│   ├── sliderHero/
│   └── ... (13 more)
├── constants/          # Static data (products, slider items)
├── hooks/             # Custom React hooks
├── layout/            # Layout components
│   ├── adminLayout/   # Admin dashboard layout
│   ├── authLayout/    # Authentication pages layout
│   └── publicLayout/  # Main app layout
├── pages/             # Page components
│   ├── admin/         # Admin dashboard pages
│   ├── cart/          # Shopping cart page
│   ├── favorites/     # Favorites page
│   ├── home/          # Homepage
│   ├── login/         # Login page
│   ├── signUp/        # Registration page
│   └── user/          # User profile pages
├── reducers/          # Redux slices
├── routes/            # React Router configuration
├── services/          # API services
└── types/             # TypeScript type definitions
```

## ✨ Funcionalidades Principales

### 🛍️ Experiencia del Usuario
- **Diseño Responsivo:** interfaz limpia y minimalista adaptable a todos los dispositivos.  
- **Carrusel Principal (Hero):** slider promocional en la página de inicio.  
- **Galería de Productos:** diseño tipo *masonry* con imágenes grandes.  
- **Carrito de Compras:** permite agregar, eliminar y modificar cantidades con cálculo de subtotales.  
- **Sistema de Favoritos:** marcar y administrar productos favoritos.  
- **Detalles del Producto:** páginas individuales con información detallada.

### 🔐 Autenticación y Autorización
- **Registro e Inicio de Sesión:** sistema de autenticación seguro.  
- **Rutas Protegidas:** acceso restringido según el estado de autenticación.  
- **Gestión de Tokens:** persistencia de sesión usando *localStorage*.  
- **Acceso por Roles:** layouts diferenciados para usuarios y administradores.

### 🧑‍💼 Panel de Administración
- **Gestión de Productos:** crear, visualizar y administrar productos.  
- **Gestión de Usuarios:** panel de control para supervisar usuarios.  
- **Controles Administrativos:** rutas protegidas y diseño exclusivo para administradores.

## 🔧 Configuración del Entorno de Desarrollo

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Configuración General
- **TypeScript:** modo estricto habilitado con objetivo ES2020.  
- **ESLint:** configurado para React/TypeScript con reglas estrictas.  
- **Variables de Entorno:** manejo mediante `.env` y `.env.local`.

## 📦 Detalles de la Gestión de Estado

### 🛒 Estado del Carrito
- Lista de productos con control de cantidades.  
- Gestión de productos favoritos.  
- Cálculo del total y subtotales.  
- Operaciones del carrito (agregar, eliminar, modificar).

### 🔑 Estado de Autenticación
- Seguimiento del estado de autenticación.  
- Almacenamiento de la información del usuario.  
- Gestión de tokens JWT.  
- Rehidratación automática del estado desde `localStorage`.

## 🎨 Componentes de UI

El proyecto incluye una **biblioteca completa de componentes reutilizables**, entre ellos:  
- Botones e Inputs.  
- Tarjetas de producto.  
- Componentes de navegación.  
- Sliders para secciones principales y de categorías.  
- Galerías para productos y favoritos.  
- Wrappers y Containers para la estructura.  
- Rutas protegidas para control de acceso.

## 📱 Páginas y Enrutamiento

- **Rutas Públicas:** Inicio, Detalle de Producto, Favoritos.  
- **Rutas Protegidas:** Carrito, Perfil de Usuario, Configuración del Usuario (requieren autenticación).  
- **Rutas de Autenticación:** Inicio de Sesión, Registro.  
- **Rutas de Administración:** Panel Principal, Gestión de Productos y Usuarios.

## 💻 Capturas de pantalla

![Hero-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refs/heads/refactoring-services/public/screenshots/cartapp-hero-01.webp)
![cart-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-cart-04.webp)
![Favorites-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-favorites-05.webp)
![settings-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-settings-06.webp)

## 🔐 Login / SignUp

![login-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-login-10.webp)
![signup-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-signup-11.webp)

## 👤 Admin Panel

![admin-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-createproduct-07.webp)
![users-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-adminproducts-08.webp)
![products-section](https://raw.githubusercontent.com/Chencho34/shopping-cart/refactoring-services/public/screenshots/cartapp-adminusers-09.webp)
