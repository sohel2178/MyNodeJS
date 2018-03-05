var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Add Middle Ware
/*var logger = function(req,res,next){
	console.log("Logging.....");
	next();
}

app.use(logger);*/

//View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// Body Parser Middle Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Get Static Path
app.use(express.static(path.join(__dirname,'public')));





app.get('/',function(request,response){
	//response.send("Hello");
	response.render('index');
});

// We can Also Parse Json Object. Demo Below

/*var person = [
	{name:"Sohel",
	email:"sohel.ahmed2178@gmail.com",
	age:33
	},
	{name:"Shaki",
	email:"shakil.ahmed2178@gmail.com",
	age:33
	},
	{name:"Rabeya",
	email:"rabeya.ahmed2178@gmail.com",
	age:33
	}
]


app.get('/',function(request,response){
	response.json(person);
});*/

app.listen(8000,function(){
	console.log("Server Started on Port 3000");
});