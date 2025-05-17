import express from "express";
import { createPost, getAllBooks } from "./book.controllers";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/",createPost)









export const BookRoutes = router;
