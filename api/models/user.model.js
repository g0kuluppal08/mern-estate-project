import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    avatar: {
      type: String,
      default:
       'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1095249842.jpg',
    },
  },
  { timestamps: true }
);

const User=mongoose.model("User",userSchema);
export default User;
