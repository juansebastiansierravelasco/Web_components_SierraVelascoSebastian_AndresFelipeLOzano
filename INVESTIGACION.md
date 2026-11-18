
# Investigación: Web Components, HTML Templates y Frameworks

## Parte 1. Investigación: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTML Templates?

Los Web Components resuelven el problema de la modularidad y la reutilización de código nativo en el desarrollo web, evitando que los estilos o scripts de un componente afecten al resto de la página[cite: 1].

* **Custom Elements:** Permiten crear etiquetas HTML personalizadas y definir su comportamiento mediante clases de JavaScript[cite: 1].
* **Shadow DOM:** Aísla el DOM y los estilos internos de un componente para evitar conflictos globales (encapsulamiento)[cite: 1].
* **HTML Templates:** Permiten definir fragmentos de marcado HTML reutilizables que permanecen latentes e inertes hasta que se instancian[cite: 1].

### 2. ¿En qué se diferencia un <template></template> de un  oculto con display: none?

Un `<template>` no se renderiza visualmente ni sus elementos internos son evaluados o ejecutados por el navegador (las imágenes no se cargan y los scripts no corren) hasta que se clona y se añade al DOM[cite: 1]. Por el contrario, un `<div>` con `display: none` sí es parte activa del DOM, el navegador procesa sus hijos, carga sus recursos y `document.querySelector` lo encuentra de inmediato, mientras que dentro de un template el selector estándar no lo detecta directamente[cite: 1].

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?

La diferencia principal radica en el nivel de accesibilidad desde JavaScript externo[cite: 1]. En modo `"open"`, la propiedad `element.shadowRoot` devuelve el árbol Shadow DOM, permitiendo que scripts externos accedan a él[cite: 1]. En modo `"closed"`, `shadowRoot` devuelve `null`, bloqueando el acceso directo desde fuera del componente, aunque este mecanismo de seguridad es débil ya que puede eludirse fácilmente si se guardan referencias internas en el ámbito del closure[cite: 1].

### 4. ¿Qué es un <slot></slot> y para qué sirve en un componente reutilizable?

Un `<slot>` es un marcador de posición (placeholder) dentro del Shadow DOM de un componente que permite insertar contenido dinámico o texto provisto por el usuario desde el HTML externo[cite: 1]. Sirve para crear componentes altamente flexibles donde la estructura visual se mantiene fija, pero el contenido interno puede variar en cada instancia[cite: 1, 2].

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.

Los Web Components cuentan con soporte nativo completo en todos los navegadores modernos, incluyendo Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge[cite: 1, 2].

* **Fuente:** MDN Web Docs / Web Components[cite: 1, 2].
* **Fecha de consulta:** 17 de noviembre de 2026[cite: 1, 2].

---

## Parte 2. Investigación: frameworks, librerías y Node.js

### 1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework y entorno de ejecución.

* **Estándar del navegador (Ej. Web Components / Custom Elements):** Es una especificación nativa implementada directamente por los navegadores sin requerir librerías externas[cite: 1, 2].
* **Librería (Ej. React):** Es un conjunto de funciones y herramientas enfocadas en una tarea específica (como construir la interfaz de usuario), donde tú controlas el flujo de la aplicación[cite: 1, 2].
* **Framework (Ej. Angular):** Es una estructura rígida y completa que impone arquitectura y reglas estrictas sobre cómo desarrollar toda la aplicación[cite: 1, 2].
* **Entorno de ejecución (Ej. Node.js):** Es un entorno que permite ejecutar código JavaScript fuera del navegador (en el servidor o en tu máquina local)[cite: 1, 2].

### 2. Tabla comparativa

| Criterio                                          | Web Components nativos                                                                   | React / Vue                                                                             | Angular                                                                 |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Tipo (estándar, librería o framework)** | Estándar web nativo[cite: 1, 2]                                                         | Librerías de interfaz de usuario[cite: 1, 2]                                           | Framework completo[cite: 1, 2]                                          |
| **Cómo se crea un componente**             | Mediante clases JS que extienden `HTMLElement` y `shadowRoot`[cite: 1, 2]            | Con funciones/componentes que retornan JSX o sintaxis de plantilla reactiva[cite: 1, 2] | Usando clases decoradas con metadatos (`@Component`)[cite: 1, 2]      |
| **Necesita instalar herramientas (npm)**    | No, funciona de forma nativa en el navegador[cite: 1, 2]                                 | Sí, requiere Node.js y empaquetadores (Vite, Webpack)[cite: 1, 2]                      | Sí, requiere la CLI de Angular y Node.js[cite: 1, 2]                   |
| **Ventajas principales**                    | Sin dependencias, alta compatibilidad a futuro, excelente rendimiento nativo[cite: 1, 2] | Ecosistema gigantesco, gran comunidad y renderizado optimizado[cite: 1, 2]              | Estructura estandarizada y herramientas potentes integradas[cite: 1, 2] |
| **Desventajas principales**                 | Requiere más código repetitivo (boilerplate) para tareas complejas[cite: 1, 2]         | Dependencia constante de actualizaciones y herramientas de compilación[cite: 1, 2]     | Curva de aprendizaje muy pronunciada[cite: 1, 2]                        |

### 3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular? Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?

* **Node.js y npm:** Node.js es un entorno de ejecución basado en el motor V8 de Google que permite ejecutar JavaScript en el servidor[cite: 1, 2]. `npm` es el gestor de paquetes que acompaña a Node.js y se utiliza para descargar, instalar y administrar las dependencias de librerías y frameworks como React, Vue o Angular[cite: 1, 2].
* **Tienda en línea (React y Node.js):** React se ejecuta en el navegador del cliente para renderizar los productos, el carrito de compras y la interfaz visual interactiva[cite: 1, 2]. Node.js se ejecuta en el servidor para gestionar la lógica de backend, procesar pagos, conectarse a la base de datos y atender las solicitudes HTTP[cite: 1, 2].

### 4. Elige la herramienta que usarías en cada caso y justifica en 3 a 5 líneas:

* **a. Un botón de chat que varias empresas pegan en sus propias páginas:**
  Usaría **Web Components nativos**, ya que al ser un estándar del navegador, las empresas pueden integrarlo en cualquier sitio web sin importar si usan React, Angular, Vue o HTML plano, evitando conflictos de estilos CSS gracias al Shadow DOM[cite: 1, 2].
* **b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:**
  Usaría un **Framework (como Angular)**, porque su arquitectura estricta, tipado fuerte (TypeScript) y herramientas integradas permiten que múltiples equipos mantengan un código organizado, escalable y mantenible a gran escala bajo las mismas convenciones[cite: 1, 2].

---

## Fuentes de investigación

1. **MDN Web Docs** - *Web Components*. Disponible en: [https://developer.mozilla.org/](https://developer.mozilla.org/). Fecha de consulta: 17 de noviembre de 2026[cite: 1, 2].
2. **web.dev** - *Custom Elements: v1, reusable web components*. Disponible en: [https://web.dev/](https://web.dev/). Fecha de consulta: 17 de noviembre de 2026[cite: 1, 2].
3. **Node.js Documentation** - *About Node.js*. Disponible en: [https://nodejs.org/docs/](https://nodejs.org/docs/). Fecha de consulta: 17 de noviembre de 2026[cite: 1, 2].
