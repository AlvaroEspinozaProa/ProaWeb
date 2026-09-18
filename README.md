# ProaWeb

## Descripción
Proyecto de sitio web para un colegio PROA (Programa Avanzado de Educación Secundaria), desarrollado en Python utilizando el framework Flask. El sitio presenta información institucional, proyectos estudiantiles, contacto, y un apartado de administración para la gestión de los menús del servicio PAICOR (Programa de Asistencia Integral Córdoba).

## Características principales
- **Sección Institucional**: Muestra información detallada sobre el colegio, sus instalaciones y las materias de especialidad.
- **Plano Interactivo**: En proceso de desarrollo, permite visualizar un mapa SVG interactivo de la institución con información de cada área (ver `PLAN_INTERACTIVO_DEL_PLANO.md`).
- **Sección Proyectos**: Espacio dedicado a visualizar los proyectos y actividades realizadas por los estudiantes.
- **Módulo PAICOR**: 
  - Vista pública para consultar los menús diarios disponibles.
  - Panel de administración protegido (`/admin`) para que el personal autorizado pueda cargar nuevos menús (fecha, plato y postre).
- **Formulario de Contacto**: Permite a los usuarios enviar mensajes que se almacenan automáticamente en una base de datos MySQL.

## Tecnologías utilizadas
- **Backend**: Python (Flask)
- **Base de Datos**: MySQL (conectores vía `mysql-connector-python`)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Scripts Auxiliares**: PHP (Ubicados en la carpeta `paicor/`)

## Requisitos previos
Para ejecutar este proyecto de forma local, asegúrate de tener instalado:
- Python 3.x
- Servidor MySQL (configurado por defecto en el puerto `3307`).

## Instalación y Configuración

1. **Clonar el repositorio** y navegar a la carpeta del proyecto:
   ```bash
   cd ProaWeb
   ```

2. **Instalar las dependencias** de Python requeridas:
   ```bash
   pip install flask mysql-connector-python
   ```

3. **Configurar las bases de datos** en tu servidor MySQL (Puerto 3307, usuario `root`, sin contraseña por defecto):
   - Crear la base de datos `bd_colegio` y añadir la tabla `contacto`:
     - Columnas sugeridas: `Nombre`, `Correo`, `Mensaje`.
   - Crear la base de datos `paicor_db` y añadir la tabla `menus`:
     - Columnas requeridas: `fecha`, `plato`, `postre`.

4. **Ejecutar la aplicación**:
   ```bash
   python app.py
   ```

5. **Acceder a la web**: Abre tu navegador e ingresa a `http://127.0.0.1:5000/`.

## Estructura del Proyecto

```text
ProaWeb/
├── app.py                      # Archivo principal de rutas y backend de Flask
├── CAMBIOS.md                  # Registro de modificaciones de diseño y mejoras
├── PLAN_INTERACTIVO_DEL_PLANO.md # Propuesta y guía para el desarrollo del mapa SVG
├── templates/                  # Plantillas HTML renderizadas por Flask
│   ├── inicio.html
│   ├── institucional.html
│   ├── admin.html
│   └── ...
├── static/                     # Archivos estáticos
│   ├── style.css, admin.css
│   ├── main.js, paicor.js, admin.js
│   └── (imágenes del sitio)
└── paicor/                     # Scripts backend alternativos/auxiliares en PHP
```
