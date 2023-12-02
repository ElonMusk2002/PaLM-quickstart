const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();

const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


// Enable EJS
app.set('view engine', 'ejs');

// Use public folder
app.use(express.static(__dirname + '/public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true })); 

// The route for the form page 
app.get('/', function (req, res) {
  res.render('index');
});


// The route for form POST 
app.post('/generateText', function (req, res) {
  const prompt = req.body.prompt;
  
  client.generateText({ model: MODEL_NAME, prompt: { text: prompt, }, })
    .then((result) => { 
      if (result[0] && result[0].candidates && result[0].candidates[0] && result[0].candidates[0].output) {
        res.render('result', { result: result[0].candidates[0].output });
      } else {
        console.log('No output in response.');
      }
    }).catch((error) => { console.error(error); });
});


app.listen(3000, function () {
  console.log('app is listening on port 3000');
});