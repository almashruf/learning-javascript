
//finding maximum score using js function here -> usage of 1d array


function highestScore(scores){
    let max = scores[0];
    for(var x=1; x<scores.length; x++){
        if(max<scores[x]){
            max=scores[x];
        }
    }
    return max;
}

var scores = [21,23,54,44,33,22];
var maxScore= highestScore(scores);

console.log(maxScore)


//2d array example -> 


function highestRun(playerInfo){
    //console.log(playerInfo);
    var highestRun = playerInfo[0][0];
    var highestScore = playerInfo[0][1]
    
    for(var x=1; x<playerInfo.length; x++){

        if(highestScore<playerInfo[x][1])
            {
                highestScore = playerInfo[x][1];
                highestRun = playerInfo[x][0];
            }
        
    }
    return highestRun;
}

var playerInfo = [
    ["rakib",43],
    ["safi",55],
    ["hamid",99],
    ["kamrul",33],
]

var name =highestRun(playerInfo);

console.log(name);