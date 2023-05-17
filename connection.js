const mongoose = require("mongoose");
// require("dotenv").config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.fy24hrb.mongodb.net/blogs_crud?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WebAssignment");
  console.log("db Connected");
}


const connection = mongoose
//   .connect(uri, connectionParams)
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log("Error connecting to the database:\t", err);
//   });

// module.exports = connection;