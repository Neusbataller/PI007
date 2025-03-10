const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien ha accedido al servidor");
  res.send("Bienvenido al servidor ");
});
router.get("/rutaGet", (req, res) => {
  console.log("Alguien ha accedido a la ruta GET");
  res.send("Hola haciendo pruebas con la ruta GET ");
});
router.get("/rutaGetJSON", (req, res) => {
  console.log("Alguien ha accedido a la ruta GET con un JSON");
  res.json({
    saludo: "hola desde un JSON",
  });
});
router.post("/rutaPost", (req, res) => {
  console.log("Alguien ha accedido a la ruta POST");
  res.send("Hola haciendo pruebas con la ruta POST ");
});

router.post("/rutaPOSTconBody", (req, res) => {
  console.log(req.body);
  res.send("Informacion recibida");
});

module.exports = router;

// router.post("/rutaPostconBody", (req, res) => {
//   req.body = "cosas del request";
//   console.log(req);
//   res.json({
//     saludo: "hola desde un JSON",
//   });
// });

// router.get("/", (req, res) => {
//   console.log("Alguien ha accedido al servidor");
//   res.send("Bienvenido al servidor ");
// });
// router.get("/rutaGet", (req, res) => {
//   console.log("Alguien ha accedido a la ruta GET");
//   res.send("Hola haciendo pruebas con la ruta GET ");
// });
// router.get("/rutaGetJSON", (req, res) => {
//   console.log("Alguien ha accedido a la ruta GET con un JSON");
//   res.json({
//     saludo: "hola desde un JSON",
//   });
// });
// router.post("/rutaPost", (req, res) => {
//   console.log("Alguien ha accedido a la ruta POST");
//   res.send("Hola haciendo pruebas con la ruta POST ");
// });

// router.post("/rutaPostconBody", (req, res) => {
//   req.body = "cosas del request";
//   console.log(req);
//   res.json({
//     saludo: "hola desde un JSON",
//   });
// });
// router.post("/rutaPost", (req, res) => {
//   console.log("Alguien ha accedido a la ruta POST");
//   res.send("hola haciendo pruebas con la ruta POST");
// });
