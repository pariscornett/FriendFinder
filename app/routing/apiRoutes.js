//linking to friends.js where our survey data is being held as objects
var friendData = require("../data/friends");

//routes to html files 
module.exports = function(app) {
    //routes to the API Friends List "page" and displays our friendData (stored in friends.js a JS object) as JSON
   app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
}
