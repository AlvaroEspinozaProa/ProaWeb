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