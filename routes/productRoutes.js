import { Router } from "express";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { verifyAdmin, verifyUser } from "../middleware/authMiddleware.js";
import {
  createProductValidation,
  updateProductValidation,
} from "../validations/productValidations.js";
import { validate } from "../middleware/validationMiddleware.js";

const productRoutes = Router({ mergeParams: true });

productRoutes.post(
  "/create",
  verifyAdmin,
  validate(createProductValidation),
  addProduct
);

productRoutes.get("/listall", verifyUser, getProducts);
productRoutes.patch(
  "/:id",
  verifyAdmin,
  validate(updateProductValidation),
  updateProduct
);

productRoutes.delete("/:id", verifyAdmin,deleteProduct)
export default productRoutes;
