# Propuesta opcional: plano interactivo de la institución

Chicos, viendo el plano que ya hicieron con Planner 5D para la página, se me ocurrió una mejora que puede quedar muy buena: volverlo interactivo.

La idea es que el plano no sea solo una imagen. Cuando una persona pase el mouse por un sector ese lugar se ilumine y muestre una breve información. Por ejemplo: comedor, aulas, cancha, biblioteca, baños o bicicletero.


## Qué van a hacer

Van a conservar la imagen actual del plano (`PLANOS.JPG`) y le van a colocar encima zonas invisibles. Cada zona coincide con una parte de la escuela.

Al pasar o tocar una zona:

- se ilumina suavemente;
- aparece el nombre del lugar;
- se muestra una ficha corta con su explicación.

Por ejemplo, al seleccionar el comedor podría aparecer:

> **Comedor**  
> Espacio destinado al servicio alimentario PAICOR y a los momentos de encuentro.

Para lograrlo solo van a trabajar en estos tres archivos:

| Archivo | Qué harían ahí |
| --- | --- |
| `templates/institucional.html` | Agregar la estructura del plano y las zonas. |
| `static/style.css` | Dar color a las zonas y diseñar la ficha de información. |
| `static/main.js` | Hacer que, al tocar una zona, cambie la información mostrada. |

No hace falta modificar Flask, Python, la base de datos ni PAICOR.

## Cómo dividirse entre los dos

Pueden hacerlo en conjunto, pero una división práctica sería esta:

| Integrante | Tarea principal |
| --- | --- |
| Una persona | Trabajar en `institucional.html` y `style.css`: colocar el plano, las zonas y el diseño. |
| La otra persona | Trabajar en `main.js`: preparar los textos y la acción al hacer clic o tocar una zona. |

Después prueban los dos juntos que cada zona coincida con el lugar correcto del plano y que funcione también desde un celular.

## Orden recomendado

Antes de pedirle código a ChatGPT, piensen entre los dos cómo quieren que sea el plano. Decidan qué lugares vale la pena marcar, qué texto breve tendrá cada uno y qué debería pasar cuando alguien lo toque. Por ejemplo: ¿solo se ilumina?, ¿muestra una ficha debajo?, ¿tendrá un botón que lleve a otra parte de la página? Tener esa idea clara primero hace que los pedidos a ChatGPT sean mejores y evita copiar código que después no les sirve.

Una vez que estén de acuerdo con la idea, sigan este orden:

1. Elijan primero solo cuatro zonas: comedor, cancha, aulas y biblioteca, por ejemplo.
2. Escriban una explicación corta para cada una.
3. Hagan funcionar una sola zona de prueba: el comedor.
4. Cuando esa zona se ilumine y muestre su información, repitan la misma idea con las demás.

El plano original mide **1716 × 916 píxeles**. Si ChatGPT les pregunta por las medidas, pásenle ese dato: ayuda a que las zonas queden bien ubicadas aunque la página se vea en un celular.

## Prompts opcionales para pedir ayuda a ChatGPT

Los prompts de abajo son una ayuda, no el primer paso. Úsenlos recién después de decidir juntos cómo quieren que funcione el plano. La mejor forma de usar ChatGPT gratuito es pedir una parte por vez y probarla antes de seguir. No peguen todo el proyecto: solo el fragmento que estén modificando.

### 1. Para crear una zona de prueba

> Estoy haciendo una página escolar con Flask. En `templates/institucional.html` tengo una imagen llamada `PLANOS.JPG`, de 1716 por 916 píxeles. Quiero ponerle arriba una zona interactiva para el comedor usando SVG. Al pasar el mouse debe iluminarse. No cambies el resto de mi página. Dame solo el HTML que debo agregar dentro del contenedor del plano y explicame dónde pegarlo.

### 2. Para darle estilo

> Tengo una imagen de plano con una zona SVG encima. Necesito CSS simple para que la zona sea transparente normalmente y se vea celeste semitransparente al pasar el mouse, al tocarla o seleccionarla. También quiero una ficha de información debajo del plano. Devolveme solo estilos nuevos para pegar en `static/style.css`. No cambies `body`, `header` ni otros estilos existentes.

### 3. Para mostrar la información al tocar una zona

> En `static/main.js` quiero que al hacer clic o tocar una zona del plano se actualice una ficha con el título y la descripción. Tengo las zonas `comedor`, `cancha`, `aulas` y `biblioteca`. Escribí JavaScript simple, sin librerías, y decime exactamente qué bloque pegar en mi archivo. No reescribas el resto de mi JavaScript.

### 4. Para sumar otra zona

> Ya tengo un plano SVG interactivo funcionando. Quiero agregar una zona llamada “Cancha deportiva”. Este es mi SVG actual: [pegar solo el SVG]. Decime qué debo agregar para marcar la zona y qué texto sumar al JavaScript. No cambies nada más.

### 5. Si se corre en el celular

> Mi SVG interactivo se ve corrido respecto de la imagen en celular. El plano mide 1716 por 916. Este es mi HTML y CSS del plano: [pegar solo esos fragmentos]. Encontrá el problema y devolveme solo las líneas que debo corregir.

## Importante mientras trabajan

Guarden una copia de los tres archivos antes de empezar. Hagan un cambio, pruébenlo y recién después hagan el siguiente. Si algo no funciona, envíen a ChatGPT el error exacto y el fragmento corto relacionado.
