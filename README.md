# 📝 Organizador de Tareas (TodoApp)

![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Persist-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Un organizador de tareas interactivo estilo tablero **Kanban** desarrollado en **Angular 20**. Permite gestionar actividades cotidianas de forma ágil y visual a través de columnas de estado y soporte nativo para **Drag & Drop** (arrastrar y soltar) con persistencia local de datos.

---

## 🚀 Características Principales

*   **Tablero Kanban de 3 Columnas:**
    *   📌 **Pendientes:** Actividades que tienes planificadas pero no has iniciado.
    *   ⚙️ **En Producción:** Tareas que estás realizando activamente en el momento actual.
    *   ✅ **Completadas:** Tareas finalizadas con éxito.
*   **Drag & Drop Fluido:** Movimiento intuitivo y dinámico de tareas entre las diferentes listas utilizando `@angular/cdk/drag-drop`.
*   **Persistencia con LocalStorage:** La aplicación guarda de forma automática y transparente todo el estado en tu navegador web. Si recargas o cierras la pestaña, tus tareas seguirán allí.
*   **Gestión Rápida e Intuitiva:**
    *   Crea tareas al instante presionando la tecla `Enter` o pulsando el botón **Agregar**.
    *   Botón de eliminación individual para cada tarea con mensaje de confirmación interactivo para evitar pérdidas accidentales.
    *   Función **Borrar Todas las Tareas** para vaciar completamente el tablero de una sola vez.
*   **Diseño Moderno y Responsivo:** Diseñado con SCSS para ofrecer una experiencia estética y responsiva tanto en ordenadores de escritorio como en smartphones.

---

## 🛠️ Tecnologías y Librerías

El proyecto hace uso de las siguientes tecnologías modernas en el ecosistema web:

*   **Angular 20.3 (Standalone):** Componentes autónomos modernos que eliminan la necesidad de módulos tradicionales y mejoran el rendimiento.
*   **TypeScript 5.9:** Tipado estático para asegurar la robustez y calidad del código.
*   **Sass (SCSS):** Hojas de estilo modulares utilizando variables, selectores anidados y diseño flexbox.
*   **Angular CDK (Drag & Drop):** Implementación nativa y accesible para el arrastre de elementos en listas conectadas.
*   **FontAwesome 6:** Iconos modernos e intuitivos para los botones interactivos de la interfaz.
*   **Web Storage API (`localStorage`):** Almacenamiento local persistente en formato JSON.

---

## 📂 Estructura Clave del Proyecto

El flujo principal de la aplicación se estructura de la siguiente manera:

```text
todo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── todo/                 # Componente del tablero Kanban
│   │   │       ├── todo.component.html   # Estructura del organizador y listas de drag & drop
│   │   │       ├── todo.component.scss   # Estilos específicos del tablero, tarjetas e inputs
│   │   │       ├── todo.component.spec.ts # Pruebas unitarias del componente
│   │   │       └── todo.component.ts     # Lógica: almacenamiento local, agregar y borrar tareas
│   │   ├── app.config.ts           # Configuración general y providers de Angular
│   │   ├── app.html                # Plantilla base (contiene el tag <app-todo>)
│   │   ├── app.routes.ts           # Definición de rutas del proyecto
│   │   ├── app.scss                # Estilos base del layout contenedor
│   │   └── app.ts                  # Componente raíz de la aplicación
│   ├── index.html                  # Página de entrada del navegador
│   ├── main.ts                     # Archivo de arranque (bootstrap) de la aplicación
│   └── styles.scss                 # Estilos globales y variables de color
```

---

## 💻 Instalación y Ejecución Local

Para poner en marcha esta aplicación en tu propia máquina, sigue las siguientes instrucciones:

### 📋 Requisitos Previos

Debes tener instalado en tu sistema:
*   [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
*   [npm](https://www.npmjs.com/) (Gestor de paquetes, normalmente se instala junto con Node.js)
*   **Angular CLI** (Opcional, se puede instalar globalmente con `npm install -g @angular/cli`)

### 🔧 Instrucciones de Configuración

1.  **Clonar el repositorio o descargar el proyecto:**
    ```bash
    git clone https://github.com/tu-usuario/todo-app.git
    cd todo-app
    ```

2.  **Instalar todas las dependencias del proyecto:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm start
    # O bien
    ng serve
    ```

4.  **Acceder a la aplicación:**
    Abre tu navegador y entra en [http://localhost:4200/](http://localhost:4200/). La aplicación se actualizará automáticamente cada vez que realices y guardes cambios en los archivos fuente.

---

## 🧪 Pruebas y Construcción

### Ejecutar Pruebas Unitarias

La aplicación cuenta con pruebas unitarias configuradas bajo Karma y Jasmine. Para ejecutarlas en modo interactivo:
```bash
npm test
```

### Compilar para Producción

Si deseas preparar la aplicación para subirla a un servidor de hosting, compila el código optimizado ejecutando:
```bash
npm run build
```
Los archivos optimizados y listos para producción se generarán en el directorio `dist/todo-app`.

---

## 🌟 Roadmap / Futuras Mejoras

*   [ ] **Edición de tareas en caliente:** Poder hacer doble clic sobre el texto de una tarea para editarla sin necesidad de borrarla.
*   [ ] **Fechas de vencimiento y etiquetas:** Añadir prioridades (Baja, Media, Alta) y fechas límite a las tareas.
*   [ ] **Múltiples tableros:** Permitir al usuario crear diferentes tableros para organizar distintas áreas de su vida (trabajo, estudios, personal).
*   [ ] **Modo Oscuro / Claro:** Alternancia visual para ajustarse a las preferencias del usuario.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Siéntete libre de utilizarlo, modificarlo y adaptarlo a tus necesidades.
