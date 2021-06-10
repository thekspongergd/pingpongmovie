const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const pingpong_movie = new Schema(
  {
    name: { type: String },
    plot: { type: String },
    director: { type: String },
    status: { type: Boolean },
    yearReleased: { type: Number },
    types: [{ type: String, enum: ["Romance", "Sci-fi", "Horror"] }],
    deleted_at: { type: Date }
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("pingpong_movie", pingpong_movie);