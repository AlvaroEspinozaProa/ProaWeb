
from flask import Flask, request, render_template
import mysql.connector


app = Flask(__name__)


# Página principal
@app.route("/")
def inicio():
    return render_template("contacto.html")


# Recibir formulario
@app.route("/enviar", methods=["POST"])
def enviar():

    nombre = request.form["nombre"]
    correo = request.form["correo"]
    mensaje = request.form["mensaje"]


    # Conexión a MySQL
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="bd_colegio",
        port=3307
    )


    cursor = conexion.cursor()


    # Insertar datos
    sql = """
    INSERT INTO contacto (Nombre, Correo, Mensaje)
    VALUES (%s,%s,%s)
    """


    valores = (nombre, correo, mensaje)


    cursor.execute(sql, valores)


    conexion.commit()


    cursor.close()
    conexion.close()


    return """
    <h1>Mensaje Enviado</h1>
    <p>Gracias por comunicarse.</p>
    """


if __name__ == "__main__":
    app.run(debug=True)