class Tienda {
  productos = [];
  ventas = [];

  registrarProducto = (producto) => {

    const prod = {
      id: this.productos.length +1,
      nombre:producto.nombre,
      categoria:producto.categoria,
      precio:producto.precio,
      cantidad:producto.cantidad
    }
    this.productos.push(prod);
    return "ok"
  };
  venderProducto = (venta) => {
    this.ventas.push(venta);
    this.productos.forEach(prod=>{
      if (prod.id === venta.id ){
        prod.cantidad -= venta.cantidad;
      }
    })
    return "ok"
  };
  sePuedeVender(id,cantidad){
    const venta = this.productos.filter(prod=>prod.id === id && cantidad >=prod.cantidad);
    return venta.length > 0;
  }
  listarInventario(){
    return this.productos;
  }
}


export default Tienda;
