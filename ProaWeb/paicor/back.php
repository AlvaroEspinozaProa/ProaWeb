
<?php

include("bd.php");


// ==============================
// VERIFICAR CONEXIÓN
// ==============================

if ($conexion->connect_error) {

    die("Error de conexión: " . $conexion->connect_error);

}


// ==============================
// GUARDAR MENÚ
// ==============================

if (isset($_POST["guardar"])) {

    $fecha = $_POST["fecha"];
    $plato = $_POST["plato"];
    $postre = $_POST["postre"];


    // Preparar consulta
    $sql = "INSERT INTO menus (fecha, plato, postre)
            VALUES (?, ?, ?)";


    $stmt = $conexion->prepare($sql);


    if (!$stmt) {

        die("Error al preparar la consulta: " . $conexion->error);

    }


    // Pasar los datos
    $stmt->bind_param("sss", $fecha, $plato, $postre);


    // Ejecutar
    if ($stmt->execute()) {

        echo "<h2>Menú guardado correctamente</h2>";

        echo "<p>Fecha: $fecha</p>";
        echo "<p>Plato: $plato</p>";
        echo "<p>Postre: $postre</p>";

        echo '<br>';
        echo '<a href="http://127.0.0.1:5000/admin">Volver al administrador</a>';

    } else {

        echo "Error al guardar: " . $stmt->error;

    }


    $stmt->close();

}


// ==============================
// CERRAR CONEXIÓN
// ==============================

$conexion->close();



?>


