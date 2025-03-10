const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien ha accedido al servidor");
  res.send("Bienvenido al servidor ");
});

router.post("/registro", (req, res) => {
  console.log("Nuevo registro");
  res.json({ mensaje: "registro exitoso" });
});

router.post("/login", (req, res) => {
  console.log("intento de login");
  res.json({ mensaje: "inicio de sesion exitoso" });
});

router.post("/contacto", (req, res) => {
  console.log("mensaje de contacto recibido");
  res.json({
    mensaje: "gracias por tu mensaje, responderemos lo antes posible",
  });
});

router.post("/pedido", (req, res) => {
  console.log("nuevo pedido recibido");
  res.json({ mensaje: "pedido creado" });
});

router.post("/suscripcion", (req, res) => {
  console.log("Nueva suscripcion");
  res.json({ mensaje: "Te has suscrito correctamente" });
});

// router.post("/rutaPost", (req, res) => {
//   console.log("Alguien ha accedido a la ruta POST");
//   res.send("hola haciendo pruebas con la ruta POST");
// });

module.exports = router;
