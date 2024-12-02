import TiendaService from "../services/Service.js";


class TiendaController {
  tiendaService = new TiendaService();

  registrarProducto = (req, res) => {
    try {
      const {  nombre, categoria,precio,cantidad  } = req.body;

      const orders = this.tiendaService.registrarProducto( nombre, categoria,precio,cantidad );
      res.status(200).send({ success: true, message: orders });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  registrarVenta = (req, res) => {
    try {
      const { id,cantidad  } = req.body;
      const orders =  this.tiendaService.registrarVenta( id,cantidad );
      res.status(200).send({ success: true, message: orders });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  listarInventario = (req, res) => {
    try {
      const orders =  this.tiendaService.listarInventario();
      res.status(200).send({ success: true, message: orders });
    } catch (error) {
      res.status(400).send({
        success: false,
        errorMsg: error.message,
      });
    }
  };
}
export default TiendaController;
