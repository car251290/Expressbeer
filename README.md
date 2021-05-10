# expressbeer
A WEB PAGE OF BEER YES BEER 
A JavaScript project to use the RestAPIsAnd displey information about beers, using a search for the name of the beer and display name and id of the beers
using icons of the beer and for the web pages I use the HTML & CSS

## MVC model

There are a lot of software architectures out there, but Model View Controller is the most popular and widely used. It reduces the code complexity and makes the software easily understandable.

Will get post update delate.

## Introduction
 Build a REST API to manage beers with Node.js and Express. installed node.js, that is an experience in JavaScript, and some basic knowledge of HTML and Bootstrap.
 I will use a simple JavaScript array to store our data instead.
 
 ## This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred on a catch.

This does not handle multipart bodies, due to their complex and typically large nature. For multipart bodies, you may be interested in the following modules:

## JSON body parser
Raw body parser
Text body parser
URL-encoded form body parser
Other body parsers you might be interested in:

## API
var bodyParser = require('body-parser')
The bodyParser object exposes various factories to create middlewares. All middlewares will populate the req.body property with the parsed body when the Content-Type request header matches the type option, or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.

The various errors returned by this module are described in the errors section.

## bodyParser.json([options])
Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

## HTTP Request Types
There are a few types of HTTP methods that I know before build a REST API. These are the methods that correspond to the CRUD tasks:
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
Learn about the anatomy of an HTTP transaction in Node.js.

### POST: Used to submit data, typically used to create new entities or edit already existing entities
### GET: Used to request data from the server, typically used to read data
### PUT: Used to completely replace the resource with the submitted resource, typically used to update data
### DELETE: Used to delete an entity from the server

Note: Notice that you can use either POST or PUT to edit stored data. choose whether you even want to use PUT since it can be omitted fully. Though, stay consistent with the HTTP verbs you use. I am  using POST for an update, "I don't use the PUT method at all".

## technologies 
node.js 
express.js
HTML & CSS
body-parser



