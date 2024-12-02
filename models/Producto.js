
import { DataTypes, Model } from "sequelize";
//import connection from "../connection/connection.js";

class Producto extends Model{}
/*
Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre:{
      type: DataTypes.String,
      allowNull: false,
    }
    ,
    categoria:{
      type: DataTypes.String,
      allowNull: false,
    },
    precio:{
      type: DataTypes.String,
      allowNull: false,
    },
    cantidad:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    modelName: "Producto",
  }
);*/
export default Producto;
