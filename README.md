Install:

Add 
```js
  "ember-node-server": "*"
```
to your package.json file.


Usage: 

In Ember.js:
```js
App.Router.reopen({
  location: 'auto'
});

App.Router.map(function() {
    [your routes]
});
```
To call the server create a server.js file in your app route and paste these lines:
```js
var server = require('ember-node-server');
server({
    port: process.env.PORT || 5000
   
});

```
Then run with "node server.js"