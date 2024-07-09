const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!!");
    })
    .catch(err => {
        console.loga("ON NO MONGO ERROR");
        console.log(err);
    })

// const p = new Product({
//     name:'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruits'
// })

// p.save().then(p=>{
//     console.log(p);
// })
// .catch(e =>{
//     console.log(e);
// })

const seedProducts = [{
    name: 'Choco Grapefruit',
    price: 1.99,
    category: 'fruits'
}, {
    name: 'Dark milk',
    price: 2.69,
    category: 'dairy'
}
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })