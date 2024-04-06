const express = require("express");
const {createUser, deleteUser, updateUser, userDetails, getUsers} = require('../controllers/users-controller');

const router = express.Router();

router.get("/", getUsers);

router.get("/:userId", userDetails);

router.post("/new", createUser);

router.patch("/:userId", updateUser);

router.delete("/:userId", deleteUser);

module.exports = router;
