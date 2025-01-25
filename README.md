# Receta Médica con Código QR

Este proyecto permite crear y visualizar recetas médicas en línea mediante un sistema basado en códigos QR. Las farmacias pueden escanear el código QR para acceder a la receta y verificar los detalles de los medicamentos y el paciente.

## Descripción

Este sistema permite generar una receta médica digitalizada utilizando un código QR que contiene toda la información relevante de la receta. Al escanear el código, se muestra la receta médica con los datos del paciente, medicamento prescrito, instrucciones de dosificación y más.

## Cómo Funciona

1. Se genera un código QR que apunta a una URL con los detalles de la receta médica.
2. Cuando el código QR es escaneado, el teléfono abre una página web que muestra todos los detalles de la receta médica.

### Información que se incluye en la receta médica:
- **Paciente**: Nombre, DNI, Fecha de nacimiento.
- **Médico**: Nombre, Número colegiado.
- **Medicamento**: Nombre, dosis y forma de administración.
- **Instrucciones**: Cómo y cuándo tomar el medicamento.

## Uso

1. **Escanear el código QR**: Usa cualquier lector de QR para escanear el código generado.
2. **Ver la receta**: Después de escanear el código, serás redirigido a una página web donde se muestra toda la información de la receta médica.

### URL de ejemplo:
- [https://tuusuario.github.io/receta-medica/](https://tuusuario.github.io/receta-medica/)

## Requisitos

- Tener acceso a un lector de códigos QR.
- Acceso a internet para abrir la página web con la receta.

## Cómo Subir Archivos

1. Sube los archivos `index.html`, `styles.css` y `script.js` a tu repositorio en GitHub.
2. Activa **GitHub Pages** en la configuración del repositorio para obtener una URL pública.
3. Genera el código QR usando la URL proporcionada por GitHub Pages.

## Contribuciones

Si deseas contribuir al proyecto, puedes hacer un **fork** del repositorio y enviar un **pull request** con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
