/**
 * Author: Prakhar Pal(https://github.com/lawki)
 * Usage: serves static assets and handles RESTful requests
 */

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"node_modules","chart.js")));
app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,'public','index.html'));
});

const PORT = 3000;
app.listen(3000,()=>{
	console.log("Started server on ",PORT);
});
