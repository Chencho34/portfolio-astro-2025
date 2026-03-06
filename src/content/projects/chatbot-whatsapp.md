---
title: "Chatbot - WhatsApp"
description: "chatbot inteligente integrado con WhatsApp que automatiza el proceso de cotización para servicios arquitectónicos. Desarrollado con TypeScript, Express y Twilio, permite que los clientes soliciten presupuestos estimados de proyectos de remodelación de manera conversacional, sin necesidad de formularios complejos"
technologies: ["Twilio", "Node", "WhatsApp"]
image: "/images/chatbot-whatsapp.webp"
githubUrl: "https://github.com/Chencho34/disney-plus-clone-app"
# date: 2023-03-12
---

# Descripción General:

ArquiBot es un chatbot inteligente integrado con WhatsApp que automatiza el proceso de cotización para servicios arquitectónicos. Desarrollado con TypeScript, Express y Twilio, permite que los clientes soliciten presupuestos estimados de proyectos de remodelación de manera conversacional, sin necesidad de formularios complejos.

## Características Principales:

* Integración WhatsApp: Comunicación directa a través de WhatsApp usando la API de Twilio, permitiendo que los clientes interactúen en la plataforma que ya usan.
* Cotizador Inteligente: Sistema de flujo conversacional de múltiples pasos que guía al usuario a través del proceso:
* Selección del tipo de trabajo (Habitación, Baño, Fachada)
* Entrada de medidas en metros cuadrados
* Cálculo automático de presupuesto estimado
* Opción para agendar consulta con arquitecto
* Cálculo Dinámico de Precios: Algoritmo que calcula estimados basados en precio por m² con margen adicional automático.
* Respuestas Contextuales: El bot entiende diferentes variaciones de entrada del usuario y proporciona respuestas relevantes.
* Plantillas de Mensajes Twilio: Soporte para mensajes con plantillas personalizadas con variables dinámicas.
* Arquitectura RESTful: API express bien estructurada con rutas organizadas y controladores separados.
* Logging y Manejo de Errores: Sistema de logs detallado con Morgan para debugging y manejo robusto de excepciones.

## Stack Tecnológico:

* **Backend:** Node.js con TypeScript, Express 5.x
* **Integraciones:** Twilio WhatsApp API
* **Desarrollo:** ESM modules, tsx para hot-reload
* **Code Quality:** TypeScript strict mode, ts-standard (ESLint)

