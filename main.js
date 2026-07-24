//PLANOS

let botoncancha = document.getElementById("mostrarcancha");
let texto = document.getElementById("textocancha");

botoncancha.addEventListener("click", function () {
    if (textocancha.innerHTML === "") {
        textocancha.innerHTML = `
            Un amplio espacio destinado a actividades deportivas, recreativas y clases de Educación Física.
            A su alrededor se encuentra un patio verde que fomenta el contacto con la naturaleza.
        `;
        botoncancha.textContent = "Ocultar";
    } else {
        textocancha.innerHTML = "";
        botoncancha.textContent = "Ver más";
    }
});

let botoncomedor = document.getElementById("mostrarcomedor");
let textocomedor = document.getElementById("textocomedor");

botoncomedor.addEventListener("click", function () {
    if (textocomedor.innerHTML === "") {
        textocomedor.innerHTML = `
            Un ambiente cómodo donde los estudiantes disfrutan diariamente del servicio PAICOR.
        `;
        botoncomedor.textContent = "Ocultar";
    } else {
        textocomedor.innerHTML = "";
        botoncomedor.textContent = "Ver más";
    }
});

let botonpreceptoria = document.getElementById("mostrarpreceptoria");
let textopreceptoria = document.getElementById("textopreceptoria");

botonpreceptoria.addEventListener("click", function () {
    if (textopreceptoria.innerHTML === "") {
        textopreceptoria.innerHTML = `
            Espacios de acompañamiento y orientación que brindan apoyo permanente a los estudiantes en su trayectoria escolar.
        `;
        botonpreceptoria.textContent = "Ocultar";
    } else {
        textopreceptoria.innerHTML = "";
        botonpreceptoria.textContent = "Ver más";
    }
});

let botonbaños = document.getElementById("mostrarbaños");
let textobaños = document.getElementById("textobaños");

botonbaños.addEventListener("click", function () {
    if (textobaños.innerHTML === "") {
        textobaños.innerHTML = `
            Sanitarios distribuidos estratégicamente dentro de la institución, brindando comodidad e higiene para toda la comunidad educativa.
        `;
        botonbaños.textContent = "Ocultar";
    } else {
        textobaños.innerHTML = "";
        botonbaños.textContent = "Ver más";
    }
});

let botonbici = document.getElementById("mostrarbici");
let textobici = document.getElementById("textobici");

botonbici.addEventListener("click", function () {
    if (textobici.innerHTML === "") {
        textobici.innerHTML = `
           Sector seguro destinado al estacionamiento de bicicletas, promoviendo el uso de medios de transporte saludables y sustentables.
        `;
        botonbici.textContent = "Ocultar";
    } else {
        textobici.innerHTML = "";
        botonbici.textContent = "Ver más";
    }
});

let botonmastil = document.getElementById("mostrarmastil");
let textomastil = document.getElementById("textomastil");

botonmastil.addEventListener("click", function () {
    if (textomastil.innerHTML === "") {
        textomastil.innerHTML = `
           Un lugar representativo donde se realizan actos escolares y ceremonias que fortalecen los valores patrios y el sentido de pertenencia.
        `;
        botonmastil.textContent = "Ocultar";
    } else {
        textomastil.innerHTML = "";
        botonmastil.textContent = "Ver más";
    }
});

let botonaula = document.getElementById("mostraraula");
let textoaula = document.getElementById("textoaula");

botonaula.addEventListener("click", function () {
    if (textoaula.innerHTML === "") {
        textoaula.innerHTML = `
          La institución cuenta con aulas amplias, cómodas y climatizadas, diseñadas para brindar un ambiente de aprendizaje moderno. Entre ellas se encuentran el <strong>Laboratorio de Informática</strong>, equipado con computadoras para programación y desarrollo de software; el <strong>Laboratorio de Ciencias</strong>, destinado a la realización de experiencias y prácticas experimentales; y el <strong>Laboratorio de Artes</strong>, un espacio pensado para fomentar la creatividad, el diseño y la expresión artística.
       
        `;
        botonaula.textContent = "Ocultar";
    } else {
        textoaula.innerHTML = "";
        botonaula.textContent = "Ver más";
    }
});

let botonbibloteca = document.getElementById("mostrarbibloteca");
let textobibloteca = document.getElementById("textobibloteca");

botonbibloteca.addEventListener("click", function () {
    if (textobibloteca.innerHTML === "") {
        textobibloteca.innerHTML = `
          La biblioteca ofrece un ambiente tranquilo para la lectura, el estudio y la investigación, con material de consulta disponible para los estudiantes. Además, cuenta con un espacio recreativo donde los alumnos pueden disfrutar de juegos de mesa, partidas de ping pong y metegol, promoviendo la integración, la convivencia y el descanso durante los recreos.
       
        `;
        botonbibloteca.textContent = "Ocultar";
    } else {
        textobibloteca.innerHTML = "";
        botonbibloteca.textContent = "Ver más";
    }
});


//MATERIAS TABLA
function crearDesplegable(idBoton, idContenido, contenidoHTML){

    const boton = document.getElementById(idBoton);
    const contenido = document.getElementById(idContenido);

    boton.addEventListener("click", function(){

        if(contenido.innerHTML==""){
            contenido.innerHTML = contenidoHTML;
            boton.textContent="Ocultar";
        }else{
            contenido.innerHTML="";
            boton.textContent="Ver más";
        }

    });

}
//1año
crearDesplegable("mostrar1","contenido1",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Desarrolla habilidades de comunicación en inglés aplicadas a la tecnología.</td>
</tr>

<tr>
<td>Entornos Digitales</td>
<td>Introduce al uso de herramientas digitales.</td>
</tr>

<tr>
<td>Sistemas Operativos</td>
<td>Funcionamiento básico de los sistemas operativos.</td>
</tr>

</table>
`);

//2año
crearDesplegable("mostrar2","contenido2",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Continúa fortaleciendo el inglés técnico.</td>
</tr>

<tr>
<td>Entornos Digitales</td>
<td>Profundiza el manejo de herramientas digitales.</td>
</tr>

<tr>
<td>Sistemas Operativos</td>
<td>Instalación y configuración de sistemas operativos.</td>
</tr>

<tr>
<td>Algoritmos y Programación</td>
<td>Desarrolla el pensamiento lógico mediante algoritmos.</td>
</tr>

</table>
`);


//3año


crearDesplegable("mostrar3","contenido3",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Aplica el inglés en proyectos y documentación técnica.</td>
</tr>

<tr>
<td>Programación I</td>
<td>Introducción a la programación.</td>
</tr>

<tr>
<td>Estructura y Base de Datos</td>
<td>Organización y almacenamiento de datos.</td>
</tr>

</table>
`);
//4año
crearDesplegable("mostrar4","contenido4",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Perfecciona el inglés técnico.</td>
</tr>

<tr>
<td>Programación II</td>
<td>Proyectos de programación más complejos.</td>
</tr>

<tr>
<td>Estructura y Base de Datos</td>
<td>Diseño y administración de bases de datos.</td>
</tr>

<tr>
<td>Diseño de Interfaces</td>
<td>Creación de interfaces modernas y accesibles.</td>
</tr>

<tr>
<td>Club de Ciencias</td>
<td>Investigación y desarrollo de proyectos científicos.</td>
</tr>

</table>
`);
//5año
crearDesplegable("mostrar5","contenido5",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Comunicación técnica y profesional.</td>
</tr>

<tr>
<td>Programación III</td>
<td>Desarrollo de aplicaciones utilizando conceptos avanzados.</td>
</tr>

<tr>
<td>Robótica</td>
<td>Diseño y programación de robots.</td>
</tr>

</table>
`);
//6año
crearDesplegable("mostrar6","contenido6",`
<table>
<tr><th>Materia</th><th>Descripción</th></tr>

<tr>
<td>Taller de Inglés Aplicado</td>
<td>Aplicación del inglés en ámbitos profesionales.</td>
</tr>

<tr>
<td>Programación IV</td>
<td>Desarrollo de proyectos completos de software.</td>
</tr>

<tr>
<td>Testing Digital</td>
<td>Evaluación y aseguramiento de la calidad del software.</td>
</tr>

<tr>
<td>Desarrollo Web</td>
<td>Creación de sitios y aplicaciones web.</td>
</tr>

</table>
`);