const express = require('express');
const app = express();


app.set('view,', './views');
app.set('view engine', 'pug');


let text = 'Ik hou van programmeren';


let server = app.listen(3000, function() {
	console.log(`Dit is een stukje tekst met een ECM6 variabel ${text}`)

})
