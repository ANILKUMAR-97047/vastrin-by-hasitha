import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    locality: String,
    landmark: String,
    pincode: String,
    state: String,
    district: String,
    city: String,
    type: {
      type: String,
      enum: ["home", "office"],
      default: "home",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Address ||
  mongoose.model("Address", addressSchema);