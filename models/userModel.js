import mongoose from "mongoose";

//  defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types, and the relationships between these entities.

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // new user created then created time add
);

export default mongoose.model("users", userSchema);
