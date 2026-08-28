from flask import Flask, request, render_template
import mysql.connector

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("inicio.html")


@app.route("/institucional")
def institucional():
    return render_template("institucional.html")


@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


@app.route("/paicor")
def paicor():
    return render_template("paicor.html")


@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")

@app.route("/enviar", methods=["POST"])
def enviar():

    nombre = request.form["nombre"]
    correo = request.form["correo"]
    mensaje = request.form["mensaje"]

    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="bd_colegio",
        port=3307
    )

    cursor = conexion.cursor()

    sql = """
    INSERT INTO contacto (Nombre, Correo, Mensaje)
    VALUES (%s,%s,%s)
    """

    cursor.execute(sql, (nombre, correo, mensaje))

    conexion.commit()

    cursor.close()
    conexion.close()

    return render_template("enviado.html")


if __name__ == "__main__":
    app.run(debug=True)


from flask import Flask, render_template, jsonify, request
import mysql.connector

app = Flask(__name__)


# ==========================================
# CONEXIÓN A MYSQL
# ==========================================

def conectar_bd():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="",
        database="paicor_db",
        port=3307
    )


# ==========================================
# PÁGINAS
# ==========================================

@app.route("/")
def inicio():
    return render_template("inicio.html")


@app.route("/institucional")
def institucional():
    return render_template("institucional.html")


@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


@app.route("/paicor")
def paicor():
    return render_template("paicor.html")


@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")


@app.route("/admin")
def admin():
    return render_template("admin.html")


# ==========================================
# OBTENER MENÚS
# ==========================================

@app.route("/obtener_menus")
def obtener_menus():

    try:

        conexion = conectar_bd()

        cursor = conexion.cursor(dictionary=True)

        cursor.execute("""
            SELECT fecha, plato, postre
            FROM menus
            ORDER BY fecha
        """)

        menus = cursor.fetchall()

        cursor.close()
        conexion.close()


        # Convertir fechas a texto YYYY-MM-DD

        for menu in menus:

            if menu["fecha"]:

                menu["fecha"] = menu["fecha"].strftime("%Y-%m-%d")


        return jsonify(menus)


    except Exception as error:

        print("ERROR MYSQL:", error)

        return jsonify({
            "error": str(error)
        }), 500


# ==========================================
# ESTADO PAICOR
# ==========================================

@app.route("/estado_paicor")
def estado_paicor():

    return jsonify({
        "servicio": True,
        "mensaje": "Servicio PAICOR disponible"
    })


# ==========================================
# GUARDAR MENÚ
# ==========================================

@app.route("/guardar_menu", methods=["POST"])
def guardar_menu():

    try:

        fecha = request.form["fecha"]
        plato = request.form["plato"]
        postre = request.form["postre"]

        conexion = conectar_bd()

        cursor = conexion.cursor()

        cursor.execute("""
            INSERT INTO menus (fecha, plato, postre)
            VALUES (%s, %s, %s)
        """, (fecha, plato, postre))

        conexion.commit()

        cursor.close()
        conexion.close()


        # ==========================================
        # MENSAJE DE CONFIRMACIÓN
        # ==========================================

        mensaje = """
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <title>Menú guardado</title>

</head>

<body>

    <h1>✅ Menú guardado correctamente</h1>

    <a href="/admin">
        <button type="button">Cargar otro menú</button>
    </a>

</body>

</html>
"""

        return mensaje


    except Exception as error:

        print("ERROR AL GUARDAR:", error)

        return "Error al guardar el menú: " + str(error), 500


# ==========================================
# INICIAR FLASK
# ==========================================

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    ) 