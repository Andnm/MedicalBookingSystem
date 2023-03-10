const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookedServiceSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"User"
    },
    doctor_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    date: Date,
    slot_time: Number,
    // room: String,
    services: [
      {
        service_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: Number,
      },
    ],
    total_price: Number,
    drugbill_id: Schema.Types.ObjectId,
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BookedService", BookedServiceSchema);
