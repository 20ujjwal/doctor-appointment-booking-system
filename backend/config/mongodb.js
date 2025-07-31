// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`$process.env.MONGODB_URI,{curaConnect}`)

// }

// export default connectDB;

import mongoose from "mongoose";
// require("dotenv").config();

const { MONGODB_URI } = process.env;

const connectDB = () => {
  mongoose
    .connect(MONGODB_URI, { useNewUrlparser: true, useUnifiedTopology: true })
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};

export default connectDB;
