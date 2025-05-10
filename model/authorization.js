const mongoose = require("mongoose");

const authorizationSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    profile_image: { type: String, default: null },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "authorizationModel",
  authorizationSchema,
  "authorizationModel"
);
