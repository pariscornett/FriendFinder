//linking to friends.js where our survey data is being held as objects
var friendData = require("../data/friends");
var friends = ""

//routes to html files 
module.exports = function(app) {
    //routes to the API Friends List "page" and displays our friendData (stored in friends.js a JS object) as JSON
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req,res){
        console.log(req.body);
        friends.push(req.body);
        // var userInput = req.body.name;
        // console.log(userInput);
        // res.send(userInput);   
    })
}
