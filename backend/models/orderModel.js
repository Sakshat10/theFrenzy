const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true, min: 0 },
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
      },
    ],
    address: {
      houseNumber: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      pincode: { type: String, required: true, trim: true },
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
      required: true,
    },
    taxAmount: { type: Number, required: true, default: 0, min: 0 },
    shippingCost: { type: Number, required: true, default: 0, min: 0 },
    refundAmount: Number,
    returnRequested: Boolean,
    returnReason: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
