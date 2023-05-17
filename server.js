const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require("./connection");
const blogRoutes = require('./BlogRoutes');
const userRoutes = require('./UserRoutes');
const commentRoutes = require('./CommentRoutes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', [blogRoutes, userRoutes, commentRoutes]);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

