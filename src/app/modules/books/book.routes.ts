import express from "express";
import { getAllBooks } from "./book.controllers";

const router = express.Router();

router.get("/", getAllBooks);

export const BookRoutes = router;
