const commentModel = require('./Comment');

exports.getComments = async (req, res) => {
    const userID = req.body.user;
    const blogID = req.body.blog;
    try {
        const comments = await commentModel.find({user:userID, blog: blogID});
        res.json({ data: blogs, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.getCommentById = async (req, res) => {
    const userID = req.body.user;
    const blogID = req.body.blog;
    try {
        const comment = await commentModel.find({_id: req.params.id, user: userID, blog: blogID});
        res.json({ data: comment, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.createComment = async (req, res) => {
    const { title, content, user, blog } = req.body;
    try {
        const comment = await commentModel.create({
            title,
            content,
            user,
            blog,
        });
        res.json({ data: comment, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateComment = async (req, res) => {
    const { title, content } = req.body;
    const userID = req.body.user;
    const blogID = req.body.blog;
    try {
        const comment = await commentModel.findOneAndUpdate({_id: req.params.id, user: userID, blog: blogID},{title,content});
        res.json({ data: comment, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.deleteComment = async (req, res) => {
    const userID = req.body.user;
    const blogID = req.body.blog;
    try {
        const blog = await commentModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted", status: "success" });
    } catch (e) {
        console.log(e);
    }
};