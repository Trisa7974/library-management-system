import express from"express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bookRoutes from "./routes/books.js";

const app = express();

app.use(express.json());

// Health check routeer
app.get('/', (req, res) => res.send('Library Backend is running'));

// Book routes
app.use('/books', bookRoutes);

// Connect to MongoDB & start server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in .env');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


