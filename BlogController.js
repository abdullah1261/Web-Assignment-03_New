const blogModel = require('./Blog');

exports.getBlogs = async (req, res) => {
    const userID = req.params.user;
    try {
        const blogs = await blogModel.find({user:userID});
        res.json({ data: blogs, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.getBlogById = async (req, res) => {
  
    try {
        const blog = await blogModel.find({_id: req.params.id});
        res.json({ data: blog, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.createBlog = async (req, res) => {
    const { title, content, user } = req.body;
    try {
        const blog = await blogModel.create({
            title,
            content,
            user,
        });
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBlog = async (req, res) => {
    const { title, content } = req.body;
    const userID = req.body.user;
    try {
        const blog = await blogModel.findOneAndUpdate({_id: req.params.id, user: userID},{title,content});
        res.json({ data: blog, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.deleteBlog = async (req, res) => {
    const userID = req.body.user;
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted", status: "success" });
    } catch (e) {
        console.log(e);
    }
};