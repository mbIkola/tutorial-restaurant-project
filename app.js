const app = require('express')();
const path = require('path');

const faker = require('faker/locale/uk');


// set the view engine to ejs
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

    var products = [];
    for ( var i=0; i<10; i++) {
        var product = {
            image : faker.image.food(),
            title: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            price: Math.random()*100,
            sku : Math.random()
        };
        products.push(product);
    }

    response.render('index', { "products": products });
});



app.listen(3000, () => console.log('Example app listening on port http://localhost:3000/ !'));
