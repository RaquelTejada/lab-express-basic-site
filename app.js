const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// hbs.registerPartials(path.join(__dirname, "views/partials"));

require('./db/db-connection')

// app.use(express.static(path.join(__dirname, "/public")));

const Product = require('./models/Product.model')

app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/tienda', (req, res) => {

    Product
        .find()
        .then(allProductsFromDB => {
            console.log('allProductsFromDB')
            res.render('products', { products: allProductsFromDB })
        })
        .catch(err => console.log(err))
})

app.listen(5005, () => console.log('APP LISTENING'))