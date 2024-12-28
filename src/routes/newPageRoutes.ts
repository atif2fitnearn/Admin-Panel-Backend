import { Router } from "express";
import {
  getNewPage,
  createNewPage,
  updateNewPage,
  deleteNewPage,
} from "../controllers/newPageController";

const router = Router();

router.get("/", getNewPage);
router.post("/", createNewPage);
router.put("/:id", updateNewPage);
router.delete("/:id", deleteNewPage);

export default router;
