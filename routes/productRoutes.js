import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController); // end point

router.delete("/delete-product/:pid", deleteProductController); // end point

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filters", productFiltersController); // end point

router.get("/product-count", productCountController); // end point

router.get("/product-list/:page", productListController); // end point

router.get("/search/:keyword", searchProductController); // end point

router.get("/related-product/:pid/:cid", realtedProductController);

router.get("/product-category/:slug", productCategoryController);

router.get("/braintree/token", braintreeTokenController);

router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
