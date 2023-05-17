const express = require("express");

const {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} = require("./BlogController");

const router = express.Router();

router.route("/blogs/").get(getBlogs);
router.route("/blogs/:id").get(getBlogById);
router.route("/blogs/create").post(createBlog);
router.route("/blogs/:id/update").put(updateBlog);
router.route("/blogs/:id/delete").delete(deleteBlog);

module.exports = router;
