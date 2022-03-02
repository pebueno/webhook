const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.route('/').all(function(req, res) {
    console.log({
        body: req.body,
    })
    res.end();
})


app.listen(3030);
