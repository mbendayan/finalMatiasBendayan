import { Router } from "express";
import Controllers from "../controllers/TindaControllers.js";

const routes = Router();

const controller= new Controllers()

routes.post("/registrar", controller.registrarProducto)
routes.post("/vender", controller.registrarVenta)
routes.get("/listarInventario", controller.listarInventario);

export default routes;
