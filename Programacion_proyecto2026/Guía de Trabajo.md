# Guía de Trabajo - Proa Web:

Hola equipo. Estuve auditando la última actualización de su repositorio, específicamente el archivo app.py y los cambios en la carpeta de templates.

Quiero felicitarlos por el salto técnico que dieron. Haber levantado el servidor con Flask y lograr que el formulario de contacto se conecte y guarde los mensajes reales en la base de datos MySQL (bd_colegio) es un avance espectacular. El código en Python está muy prolijo, directo y bien estructurado.

Ahora tenemos que enfocarnos en cerrar las pestañas que quedaron a medias para que el portal esté 100% terminado. Les dejo cómo vamos a dividir el trabajo para esta etapa:

### Equipo 1: Automatizar el menú PAICOR
Vi que en su archivo main.js dejaron el comentario de la sección PAICOR vacío. Como ya demostraron que manejan Flask muy bien, vamos a resolver esto directamente desde el servidor (Python) en lugar de usar JavaScript.

1. Vayan a su archivo app.py y ubiquen la ruta /paicor.
2. Arriba de todo en el archivo, importen la librería datetime.
3. Adentro de la ruta, armen un diccionario o una lista simple con el menú de la semana (por ejemplo, asociando el lunes a "Milanesas", el martes a "Fideos", etc.).
4. Usen datetime para que el código detecte qué día es, y pasen ese menú al HTML usando la función render_template('paicor.html', comida_hoy=variable).
5. En su archivo paicor.html, solo tienen que usar la sintaxis de Jinja (las dobles llaves {{ comida_hoy }}) en el medio de la pantalla para que el menú aparezca solo.

### Equipo 2: La Vidriera de Proyectos
La ruta de proyectos.html ya la tienen configurada en el backend, pero necesitamos darle contenido visual. Como ustedes están desarrollando la página institucional de la escuela, su deber es mostrar los sistemas que están programando los otros grupos.

1. Abran el archivo proyectos.html.
2. Maqueten una estructura de tarjetas (Cards) reciclando los estilos, colores y bordes que ya vienen usando en style.css para que todo mantenga la misma estética.
3. Agreguen la información de los proyectos de sus compañeros (Banco Next, Future Hub, Proyecto Cooperativa, etc.).
4. Cada tarjeta tiene que tener el título del proyecto, los nombres de los desarrolladores del grupo y una pequeña descripción de qué problema resuelve su software.

### Objetivo de esta etapa
La meta de esta fase es dejar de tener páginas en blanco. Con el formulario de contacto que ya lograron hacer funcionar, si automatizan el comedor y cargan los proyectos del curso, el portal ya queda en calidad de ser presentado oficialmente.

Cualquier error de sintaxis que les tire Python al importar datetime, o si se les desacomodan las tarjetas en el CSS de los proyectos, me avisan y lo destrabamos en la compu.