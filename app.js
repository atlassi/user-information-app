const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
let usrFile = require('./users.json');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view,', './views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }))

// Match input with the JSON file or re-render the index if not found.
app.get('/', function(req, res) {

    if (req.query.usrInput) {
        let usrInput = req.query.usrInput;
        for (i in usrFile) {
            let firstname = usrFile[i].firstname.toLowerCase();
            let lastname = usrFile[i].lastname.toLowerCase();
            let usrInput = req.query.usrInput.toLowerCase();

            if (usrInput === firstname || usrInput === lastname) {
                res.send({
                    fName: usrFile[i].firstname,
                    lName: usrFile[i].lastname
                })

            }
        }
    } else {
        res.render('index');
    }
})




app.listen(3000, function() {
    console.log('Server listening on port 3000..')
})