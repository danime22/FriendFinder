
var friend = require("../data/friend");

// var match = {
//     friend: null,
//     notMatch: null
// };

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friend);
    });

    app.post("/api/friends", (req, res) => {
        console.log(req.body);
        

        var bestMatch;
        var bestDifference = 100;
    
        for(i = 0; i < friend.length; i++){
            var difference = 0;
            for(j=0; j< friend[i].scores.length; j++){
                difference += Math.abs((friend[i].scores[j] - parseInt(req.body.scores[j])));
            }

            console.log("diff: " + difference);

            if(difference < bestDifference){
                bestDifference = difference;
                bestMatch = friend[i];
                
            } 
        }
        console.log(bestDifference);
        console.log(req.body);
        friend.push(req.body);

        res.json(bestMatch);
        
       
    });

    
}
