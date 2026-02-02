import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByDetail, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserByDetail)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router