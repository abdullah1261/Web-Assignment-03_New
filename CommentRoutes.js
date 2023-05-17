const express = require("express");

const {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
} = require("./CommentController");

const router = express.Router();

router.route("/comments").get(getComments);
router.route("/comments/:id").get(getCommentById);
router.route("/comments").post(createComment);
router.route("/comments/:id").put(updateComment);
router.route("/comments/:id").delete(deleteComment);

module.exports = router;
