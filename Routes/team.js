import express from "express";
import { register } from "./../Controllers/teamRegi.js";

const router = express.Router();

router.post("/register", register);

export default router;