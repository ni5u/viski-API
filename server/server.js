const express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
const port = process.env.PORT || 3050;
var {Whiskey} = require('./models/whiskey');
var app = express();

app.use(bodyParser.json());

app.get('/whiskeys', (req, res) => {
    Whiskey.find().then((whiskeys) => {
        res.send({whiskeys});
    }, (err) => {
        res.status(500).send(err);
    });
});

/*app.post('/whiskeys', (req, res) => {
    
    for(var i =0 ; i < req.body.viskit.length; i++){
        var whisky = new Whiskey({
            nimi: req.body.viskit[i].Nimi,
            valmistaja: req.body.viskit[i].Valmistaja,
            pullokoko: req.body.viskit[i].Pullokoko,
            hinta: req.body.viskit[i].Hinta,
            valmistusmaa: req.body.viskit[i].Valmistusmaa,
            luonnehdinta: req.body.viskit[i].Luonnehdinta,
            prosentit: req.body.viskit[i].Prosentit
        })
        whisky.save();
    }
    
    res.send("DONE");
});
*/
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });