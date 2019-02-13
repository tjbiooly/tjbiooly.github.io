#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');

// -------------- serve static folders -------------- //
app.use('/js',express.static(path.join(__dirname,'js')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use('/images',express.static(path.join(__dirname,'images')));
app.use('/files',express.static(path.join(__dirname,'files')));

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 8080 );


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/abouttjbo', function(req, res){
    res.sendFile(__dirname + '/abouttjbo.html');
});

app.get('/schedule', function(req, res){
    res.sendFile(__dirname + '/schedule.html');
});

app.get('/lectures', function(req, res){
    res.sendFile(__dirname + '/lectures.html');
});

app.get('/textbooks', function(req, res){
    res.sendFile(__dirname + '/textbooks.html');
});

app.get('/resources', function(req, res){
    res.sendFile(__dirname + '/resources.html');
});

app.get('/practice', function(req, res){
    res.sendFile(__dirname + '/practice.html');
});

app.get('/:page',function(req,res)
{
    res.sendFile(__dirname + '/error.html');
});


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.'

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
