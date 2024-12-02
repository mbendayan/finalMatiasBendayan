import Producto from "../models/Producto.js";
import Tienda from "../models/Tienda.js";

class Service {
  tienda = new Tienda();
  validCategory = ["estrategia", "rol", "cartas", "familiar"];
  errorMsg = "Los datos ingresados no son válidos"
  registrarProducto = (nombre, categoria,precio,cantidad) => {
    try {
      if(!this.validCategory.includes(categoria)) throw new Error(this.errorMsg);
      if(precio <= 0 || cantidad <= 0 ) throw new Error(this.errorMsg);
      if(typeof nombre !== 'string')throw new Error(this.errorMsg);
      const data = this.tienda.registrarProducto( {
        nombre:nombre,
        categoria:categoria,
        precio:precio,
        cantidad:cantidad
      });
      return data;
    } catch (error) {
      throw error;
    }
  };


  registrarVenta = (id, cantidad) => {
    try {
      if(id <= 0 ){
        throw new Error(this.errorMsg);
      }
      if(this.tienda.sePuedeVender(id,cantidad)){
        throw new Error(this.errorMsg);
      }

      const data = this.tienda.venderProducto( {
        id,cantidad
      });

      return data;
    } catch (error) {
      throw error;
    }
  };


  listarInventario= () => {
    try {
      return this.tienda.listarInventario( );
    } catch (error) {
      throw error;
    }
  };

}

export default Service;
