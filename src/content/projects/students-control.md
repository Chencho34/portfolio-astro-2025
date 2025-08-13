---
# layout: "../layouts/BlogLayout.astro"
title: "Control de Estudiantes CRUD"
description: "Aplicación web desarrollada con Blazor (.NET 8) para la gestión de estudiantes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un registro de estudiantes, utilizando Entity Framework Core y una base de datos SQL Server."
image: "https://raw.githubusercontent.com/Chencho34/PruebaCRUD/main/images/inicio.png"
technologies: [".NET 8", "Entity Framework", "SQLServer", "Blazor"]
githubUrl: "https://github.com/armando/ecommerce"
demoUrl: "https://ecommerce-armando.netlify.app"
featured: true
date: 2022-07-06
---

# Control de Estudiantes CRUD 

Aplicación web desarrollada con **Blazor** (.NET 8) para la gestión de estudiantes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un registro de estudiantes, utilizando Entity Framework Core y una base de datos SQL Server.

## Características

- Listado de estudiantes con paginación y acciones rápidas (editar, ver detalles, eliminar).
- Formulario para registrar nuevos estudiantes con validaciones.
- Edición y eliminación de registros existentes.
- Visualización de detalles completos de cada estudiante.
- Campos gestionados: Nombres, Apellidos, Fecha de Nacimiento, Dirección, Sexo, CURP, Teléfono, Email, Carrera, Modalidad, Descripción, Mascotas, Horario de Comida, entre otros.
- Interfaz moderna usando componentes de Syncfusion Blazor.

## Tecnologías utilizadas

- [Blazor Server](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
- .NET 8
- Entity Framework Core
- SQL Server
- Syncfusion Blazor Components

## Requisitos previos

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- SQL Server
- Visual Studio 2022

## Estructura del proyecto
- **Pages/Home.razor**: Listado principal de estudiantes.
- **Pages/Create.razor**: Alta de nuevos estudiantes.
- **Pages/Edit.razor**: Edición de estudiantes.
- **Pages/Details.razor**: Detalles de un estudiante.
- **Pages/Delete.razor**: Eliminación de estudiantes.
- **Models/Student.cs**: Modelo de datos del estudiante.
- **Data/MyAppDbContext.cs**: Contexto de Entity Framework.

## Capturas de pantalla

### Listado, paginacion y funcionalidad CRUD
![Inicio](https://raw.githubusercontent.com/Chencho34/PruebaCRUD/main/images/inicio.png)
### Formulario para crear y editar
![Editar](https://raw.githubusercontent.com/Chencho34/PruebaCRUD/main/images/editar.png)
### Pagina eliminar
![Eliminar](https://raw.githubusercontent.com/Chencho34/PruebaCRUD/main/images/eliminar.png)
### Pagina detalles
![Detaller](https://raw.githubusercontent.com/Chencho34/PruebaCRUD/main/images/detalles.png)
