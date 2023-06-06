const File = require('fs')
const Mongoose = require('mongoose')
    // Is-A relation between the BookEntity and the BookCategories
    /*
     All the books have title,author,description but their may not be from the same categories
    */
class BookEntity {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
class BookCategories extends BookEntity {
    constructor(title, author, description, categories, subcategories) {
        super(title, author, description);
        this.categories = categories;
        this.subcategories = subcategories;
    }
}
bookcategorie = {
    "bookCategories": [{
            "name": "Science",
            "subCategories": ["Physics", "Chemistry", "Biology", "Agricultural Science"]
        },
        {
            "name": "Commerce",
            "subCategories": ["Accounting", "Business Studies", "Economics"]
        },
        {
            "name": "Arts",
            "subCategories": ["Literature", "Fine Arts", "Music", "Theatre Arts"]
        }
    ]
}

module.exports = Books