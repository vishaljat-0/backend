import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";
const userschema = new Schema(
  {
    userName: {
      type: string,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: string,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: string, //cloudinary image url
      required: true,
    },
    coverImage: {
      type: string,
      required: true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: string,
      required: [true, "Password is required"],
    },
    refreshTokwn: {
      type: string,
    },
  },
  {
    timestamps: true,
  }
);

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userschema.methods.genrateaccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
      userName: this.userName,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d",
    }
  );
};
userschema.methods.genrateaccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
     
    },
    process.env.REFRESH_TOKEN_EXPIRY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY ,
    }
  );
};

export const User = mongoose.model("User", userschema);
