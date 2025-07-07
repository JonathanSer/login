#Login

## Descripción
Este proyecto implementa un sistema de login y registro de usuarios utilizando HTML, CSS y JavaScript puro. Cuenta con validaciones básicas de formularios y una interfaz responsiva con animaciones para mostrar y ocultar formularios.

---

## Documentación del Proyecto Login

### Estructura del Proyecto
- **HTML**: Contiene dos formularios principales: uno para iniciar sesión (login) y otro para registrarse (registro). Ambos están dentro de un contenedor que se muestra y oculta con animaciones CSS.
- **CSS** (`css/estilo.css`): Define el diseño visual, efectos de transición, posicionamiento y estilos modernos usando `backdrop-filter`, sombras, fuentes Google Fonts (Poppins) y efectos hover.
- **JavaScript** (`js/script.js`): Maneja la interacción dinámica para mostrar/ocultar formularios, validar datos de entrada y controlar el flujo del login y registro (incluyendo redirecciones).

### Principales métodos y funcionalidades en JavaScript

- **Control de visibilidad de formularios**
  - `registrarLink.addEventListener('click', ...)`: muestra el formulario de registro.
  - `loginLink.addEventListener('click', ...)`: muestra el formulario de login.
  - `btn.addEventListener('click', ...)`: abre el modal de login.
  - `iconCerrar.addEventListener('click', ...)`: cierra el modal.

- **Validación del Login**
  - Verifica que los campos no estén vacíos.
  - Valida formato correcto del email con expresión regular.
  - La contraseña debe tener al menos 6 caracteres.
  - Compara contra usuario y contraseña predeterminados.
  - Redirige a `dashboard.html` en caso de éxito.

- **Validación del Registro**
  - Campos obligatorios completos.
  - Email válido.
  - Contraseña con mínimo 6 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.
  - Aceptación de términos y condiciones.
  - Muestra alertas para errores y confirma registro exitoso.

### Estilos CSS principales

- **Layout y fondo**: `body` con fondo fijo, centrado con Flexbox, imagen de fondo con `background-size: cover`.
- **Contenedor modal** `.contenido` con fondo translúcido usando `backdrop-filter: blur(30px)`, bordes redondeados, sombra y animaciones para escalar y ajustar altura.
- **Formularios** `.formulario.login` y `.formulario.registro` animados con desplazamiento horizontal.
- **Inputs** con etiquetas flotantes que se mueven al enfocar o validar.
- **Botones** estilizados con efectos hover para mejor interacción (`.btnLogin` y `.btn`).

---
