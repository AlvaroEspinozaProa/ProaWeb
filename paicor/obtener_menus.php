<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("bd.php");

$sql = "SELECT fecha, plato, postre FROM menus ORDER BY fecha";

$resultado = $conexion->query($sql);

$menus = [];

if ($resultado) {

    while ($fila = $resultado->fetch_assoc()) {

        $menus[] = $fila;

    }

}

echo json_encode($menus, JSON_UNESCAPED_UNICODE);

$conexion->close();

?>