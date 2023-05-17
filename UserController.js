const userModel = require('./User');

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ data: users, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.json({ data: user, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await userModel.create({ username, email, password });
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id,{username, email, password});
        res.json({ data: user, status: "success" });
    } catch (e) {
        console.log(e);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted", status: "success" });
    } catch (e) {
        console.log(e);
    }
};