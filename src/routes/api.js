import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import artikelController from "../controllers/artikel-controller.js";
const userRouter = new  express.Router();
userRouter.use(authMiddleware);
userRouter.post("/api/artikel", artikelController.createArtikel);
userRouter.get("/api/artikel", artikelController.getArtikel);
userRouter.put("/api/artikel/:artikelId", artikelController.updateArtikel);
userRouter.delete("/api/artikel/:artikelId", artikelController.removeArtikel);

export { userRouter }; 