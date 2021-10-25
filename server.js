const express = require('express');
const app = express();
const port = 5000;


app.use(date = (req, res, next) => {
    let curentDate = new Date().getHours();
    if (curentDate >= 9 && curentDate <= 17) {
        next()
    } else {
        res.status(503).send('Our office is not open now');
    }
})
app.use('/static', express.static(__dirname + '/public'));

app.listen(5000, (err) => {
    if (err) console.log("Sorry!... Our office is not open now");
    else console.log("Welcome to our office");
  });