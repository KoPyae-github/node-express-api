import express from "express";

import { getUsers, createUser, findUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers); // First Page from /users

// Create Something Completely New
router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

// Patch Request => is used when partially want to modify something
router.patch("/:id", updateUser);

// Put Request => is used to overwrite completely something or chage everything
export default router;