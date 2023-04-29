const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price Must Be Added"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.6
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "Dell", "HP"],
            message: `{VALUE} is not supported`
        },
    },
});


const product = mongoose.model('products', productSchema)

module.exports = product;


// const Schema = mongoose.Schema({
//     username: 'String',
//     password: 'String',
//     email: 'String'
// }, { timestamps: true })

// const Post = mongoose.model('users', Schema);

// module.exports = Post;