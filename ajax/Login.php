<?php
require_once 'vendor/autoload.php';
$servername = "localhost:3306";
$username = "root";
$passworddb = "root";
$database = "clasesdaw";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $passworddb);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


if (isset($_REQUEST['op'])) {
    $op = $_REQUEST['op'];
} else {
    $op = null;
}
if (isset($_REQUEST['nombre'])) {
    $nombre = $_REQUEST['nombre'];
} else {
    $nombre = null;
}
if (isset($_REQUEST['pass'])) {
    $password = $_REQUEST['pass'];
} else {
    $password = null;
}

$format = new DateTime();
$fecha = $format->format('Y-m-d H:m:s');

switch ($op) {
    case "registrar":
        try {
            
            $stmt = $conn->prepare("UPDATE LOGIN_PHP SET FECHA_LOGIN = ? WHERE NOMBRE = ? AND PASSWORD = ?");
            $stmt->bindParam(1, $fecha);
            $stmt->bindParam(2, $nombre);
            $stmt->bindParam(3, $password);
            $filasUpdate = $stmt->execute();
            echo $filasUpdate;

            if ($filasUpdate < 0) {
                $stmt = $db->prepare("INSERT INTO LOGIN_PHP (NOMBRE,PASSWORD,FECHA_LOGIN) VALUES (?,?,?)");
                $stmt->bindParam(1, $nombre);
                $stmt->bindParam(2, $password);
                $stmt->bindParam(3, $fecha);
                $insert = $stmt->execute();
                if ($insert == 0) {
                    echo "no insert";
                } else {
                    echo "correcto I";
                }
            } else {
                echo "correcto U";
                $stmt = $conn->prepare("UPDATE USERS SET ACTIVO = 1 WHERE NOMBRE = ?");
                $stmt->bindParam(1, $nombre);
                $stmt->execute();
            }
        } catch (Exception $ex) {
            echo $ex->Message();
        }
///
        break;
}
$stmt = null;

$conn = null;
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form action="login.php?op" method="get">
            <h1>registrar</h1>
            nombre<input type="text" id="nombre" name="nombre"/>
            contraseña<input type="text" id="pass" name="pass"/>
            <button value="registrar" name="op">Registrar</button>
        </form>

    </body>
</html>
