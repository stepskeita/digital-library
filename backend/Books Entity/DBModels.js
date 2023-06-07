const mongoose = require('mongoose')
mongoose.disconnect()
require('dotenv/config')
mongoose.set("strictQuery", false);
async function connect_to_db() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("Succefully Connected")
    } catch (error) {
        console.log(error)
    }
}
// Schema for BookEntity
const BookEntitySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String], // Array of strings
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    subcategories: {
        type: [String], // Array of strings
        default: []
    },
    keyword: {
        type: [String], // Array of strings
        required: true
    },
    coverImage: {
        type: String
    }
});
const BookEntity = mongoose.model('BookEntity', BookEntitySchema);
// Schema for User
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    BookEntity,
    User
};
console.log(mongoose.connection.readyState);
connect_to_db()