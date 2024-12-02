import { Router } from "express";
import TiendaController from "../controllers/TindaControllers.js";

const tiendaController = new TiendaController();

const tiendaRoutes = Router();

tiendaRoutes.post("/registrar", tiendaController.registrarProducto);
tiendaRoutes.post("/vender", tiendaController.registrarVenta);
tiendaRoutes.get("/listarInventario", tiendaController.listarInventario);

export default tiendaRoutes;
