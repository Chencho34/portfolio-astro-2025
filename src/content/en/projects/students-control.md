---
title: "Control de Estudiantes CRUD ingles"
description: "Aplicación web desarrollada con Blazor (.NET 8) para la gestión de estudiantes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un registro de estudiantes, utilizando Entity Framework Core y una base de datos SQL Server."
image: "/images/preview-students-crud.webp"
technologies: ["Net", "SQLServer", "Entity Framework", "Blazor"]
githubUrl: "https://github.com/Chencho34/PruebaCRUD"
featured: true
date: 2025-06-20
lang: 'en'
---

# Descripción General del Proyecto

Aplicación web desarrollada con Blazor (.NET 8) para la gestión de estudiantes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un registro de estudiantes, utilizando Entity Framework Core y una base de datos SQL Server.

## Características

- Listado de estudiantes con paginación y acciones rápidas (editar, ver detalles, eliminar).
- Formulario para registrar nuevos estudiantes con validaciones.
- Edición y eliminación de registros existentes.
- Visualización de detalles completos de cada estudiante.
- Campos gestionados: Nombres, Apellidos, Fecha de Nacimiento, Dirección, Sexo, CURP, Teléfono, Email, Carrera, Modalidad, Descripción, Mascotas, Horario de Comida, entre otros.
- Interfaz moderna usando componentes de Syncfusion Blazor.

## Tecnologías utilizadas

- [Blazor Server](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
- [.NET8](https://dotnet.microsoft.com/es-es/download/dotnet/8.0)
- [Entity Framework Core](https://learn.microsoft.com/es-es/ef/core/)
- [SQL Server](https://www.microsoft.com/es-mx/sql-server/sql-server-downloads)
- [Syncfusion Blazor Components](https://www.syncfusion.com/blazor-components)

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
