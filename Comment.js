const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    content: "String",
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true},
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", schema);
module.exports = Comment;