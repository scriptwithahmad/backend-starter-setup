import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name required"],
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: [true, "Email already exists"],
      match: [/\S+@\S+\.\S+/, "Wrong Email format"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    otp: {
      value: Number,
      expirationTime: Number,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "inactive",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
