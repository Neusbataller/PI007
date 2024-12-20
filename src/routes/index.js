const { Router } = require("express");
const router = Router();

router.get("/rutaGet", (req, res) => {
  console.log("hola en la consola de node, desde la 1º ruta GET");
  res.send("hola soy la 1º ruta GET ");
});
router.get("/rutaGetConRouter", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 2º ruta GET en el servidor"
  );
  res.send("hola soy la 2º ruta GET en el servidor");
});

router.get("/rutaGetConRouter3", (req, res) => {
  console.log("hola un saludo desde la nueva ruta");
  res.send("hola bienvenido a la nueva ruta");
});

router.get("/rutaGetConRouter4", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 4º ruta GET en el servidor"
  );
  res.send("hola soy la 4º ruta GET en el servidor");
});
router.get("/rutaGetConRouter5", (req, res) => {
  console.log(
    "hola en la consola de node, desde la 4º ruta GET en el servidor"
  );
  res.send("hola soy la 5º ruta GET en el servidor");
});

module.exports = router;
