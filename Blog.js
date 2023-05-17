const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: "String",
    content: "String",
    
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", schema);
module.exports = Blog;