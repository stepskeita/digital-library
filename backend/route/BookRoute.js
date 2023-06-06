const express = require('express');
const bookrouters = express.Router();
const { BookEntity, User } = require('../Books Entity/bookEntity');

bookrouters.get('/books', async(req, res) => {
    try {
        const books = await BookEntity.find();
        res.status(200).json({ books });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

bookrouters.get('/books/:bookId', async(req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await BookEntity.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
        }
        res.status(200).json({ book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

function isAdmin(req, res, next) {
    const userId = req.user.userId;

    User.findById(userId, (error, user) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error.' });
        }

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Forbidden: Admin access required.' });
        }

        next();
    });
}

bookrouters.post('/books', authenticateToken, isAdmin, async(req, res) => {
    try {
        const { title, authors, description, categories, subcategories, keyword, coverImage } = req.body;
        const newBook = new BookEntity({
            title,
            authors,
            description,
            categories,
            subcategories,
            keyword,
            coverImage
        });

        await newBook.save();
        res.status(201).json({ message: 'Book created successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

bookrouters.put('/books/:bookId', authenticateToken, isAdmin, async(req, res) => {
    const bookId = req.params.bookId;
    try {
        const { title, authors, description, categories, subcategories, keyword, coverImage } = req.body;
        const updatedBook = await BookEntity.findByIdAndUpdate(
            bookId, {
                title,
                authors,
                description,
                categories,
                subcategories,
                keyword,
                coverImage
            }, { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        }

        res.status(200).json({ message: 'Book updated successfully.', book: updatedBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

bookrouters.delete('/books/:bookId', authenticateToken, isAdmin, async(req, res) => {
    const bookId = req.params.bookId;
    try {
        const deletedBook = await BookEntity.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found.' });
        }

        res.status(200).json({ message: 'Book deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = bookrouters;