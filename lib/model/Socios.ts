import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const sociosSchema = new Schema(
  {
    correo: {
      type: String,
      required: [true, "Correo es requerido"],
    },
    rut: {
      type: String,
      required: [true, "RUT es requerido"],
    },
  },
  {
    versionKey: false,
  },
);

const Socios = models.Socios || model("Socios", sociosSchema);
export default Socios;
