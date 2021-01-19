const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const fetch = require('node-fetch')
require('dotenv').config()

app.listen(port, () => {
    console.log(`Starting server at ${port}`)})

app.get("/", (req, res) => {
    var result="";
        fetch('https://api.tiqets.com/v2/products?lang=pt&currency=GBP&page_size=200&page=1&city_id=67458', {
        headers: { 'Content-Type': 'application/json',
        'Authorization': process.env.API_KEY,
                }
    }).then(res => res.text()
    )
    .then(json => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(json)}
    );
});