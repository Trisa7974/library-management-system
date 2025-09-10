
import {model,Schema} from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true, index: true },
  author: { type: String, required: true, trim: true, index: true },
  isbn: { type: String, unique: true, sparse: true, trim: true },
  publishedDate: { type: Date },
  copiesAvailable: { type: Number, default: 1 },
  summary: { type: String }
}, { timestamps: true }); // createdAt & updatedAt

const Book =model("Book", bookSchema);
export default Book;