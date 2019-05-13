const express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
const port = process.env.PORT || 3050;
var {Whiskey} = require('./models/whiskey');
var app = express();

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

app.get('/whiskeys', (req, res) => {
    Whiskey.find().then((whiskeys) => {
        res.status(200).send({whiskeys});
    }).catch((err) => {
        handleError(res, err.message, "Failed to get whiskeys")
    })
});

app.get('/whiskeys/maker/:maker', (req,res) => {
    var maker = req.params.maker;
    Whiskey.find({valmistaja: maker})
    .then((whiskeys) => {
        res.status(200).send({whiskeys});
    }).catch((err) => {
        handleError(res, err.message, "Failed to get whiskeys")
    })
})

app.get('/whiskeys/name/:nimi', (req, res) =>{
    var nimi = req.params.nimi;
    Whiskey.find({nimi:{
        $regex: nimi,
        $options: "i"
    }})
    .then((whiskeys) => {
        res.status(200).send(whiskeys);
    }).catch((err) => {
        handleError(res, err.message, "Failed to get whiskeys")
    })
})


app.get('/whiskeys/country/:maa', (req,res) => {
    var maa = req.params.maa;
    Whiskey.find({valmistusmaa: maa})
    .then((whiskeys) => {
        res.status(200).send(whiskeys);
    }).catch((err) => {
        handleError(res, err.message, "Failed to get whiskeys")
    })
})

app.get('/whiskeys/description/:desc', (req,res) => {
    var desc = req.params.desc;
    Whiskey.find({luonnehdinta:{
        $regex: desc,
        $options: "i"
    }})
    .then((whiskeys) => {
        res.status(200).send(whiskeys);
    }).catch((err) => {
        handleError(res, err.message, "Failed to get whiskeys")
    })
})

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