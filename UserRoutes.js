const express = require("express");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("./UserController");

const router = express.Router();

router.route("/users").get(getUsers);
router.route("/users/:id").get(getUserById);
router.route("/users").post(createUser);
router.route("/users/:id").put(updateUser);
router.route("/users/:id").delete(deleteUser);

module.exports = router;
