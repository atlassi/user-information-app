const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
let usrFile = require('./users.json');

app.set('view,', './views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', function(req, res) {

    res.render('index', { user: usrFile })
});
//Route 2
app.get('/route2', function(req, res) {
    res.render('search');
});
//Route Search results
app.post('/SearchResults', function(req, res) {
    for (let i in usrFile) {
        let firstname = usrFile[i].firstname.toLowerCase();
        let lastname = usrFile[i].lastname.toLowerCase();
        let usrInput = req.body.searchField.toLowerCase();
        if (usrInput === firstname || usrInput === lastname) {
            res.render('SearchResults', {
                firstname: usrFile[i].firstname,
                lastname: usrFile[i].lastname,
                email: usrFile[i].email
            });
        }
    };
})


//Route 4 - Read new user via user input and add to JSON file
app.get('/route4', function(req, res) {
    res.render('addUsers');
});



//Route 5 - Add new user via user input 
app.post('/route5', function(req, res) {
    fNameInput = req.body.fNameField;
    lNameInput = req.body.lNameField;
    emailInput = req.body.emailField;

    usrFile.push({
        firstname: fNameInput,
        lastname: lNameInput,
        email: emailInput
    });

    usrFileUpdated = JSON.stringify(usrFile, null, 10)

    fs.writeFile('./users.json', usrFileUpdated);
    res.redirect('/');



})

app.listen(3000, function() {
    console.log(`Listening on port 3000......`)
});