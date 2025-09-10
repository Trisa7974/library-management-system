import express from "express";
const router = express.Router(); 
import Book from "../models/Book.js";


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put('/:id',async (req,res) => {
  try{
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new : true});
    

    if(!updatedbook){
      return res.send(404).json({message : "Book not found"});
    }
    res.send(updatedBook);
  }catch(error){
    res.status(400).json({message   : error.message});
  }
} );

export default router;
