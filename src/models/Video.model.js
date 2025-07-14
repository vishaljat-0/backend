import { Schema } from "mongoose";
import mongoose from "mongoose ";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true, //cloudinary video url
    },
    thumbnail: {
      type: String,
      required: true, //cloudinary video url
    },
    title: {
      type: String,
      required: true, //cloudinary video url
    },
    duration: {
      type: String,
      required: true, //cloudinary video url
    },
    views:{
        type:Number,
        default: 0,
    },
    ispublished:{
    type : boolean,
      required: true, //cloudinary video url
  }, 
   owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, //cloudinary video url
   }
  },

  { timestamps: true }
);
 videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
