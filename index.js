var nodeButton = document.querySelector("button");
var nodeOffspringNumber = document.querySelector("input").value;

nodeButton.addEventListener("click", getEyeArrayEventHandler);

function getEyeArrayEventHandler(firstEye, secondEye){
    var eyeArray = [];
    
    var nodeTbody = document.querySelector("tbody");
    var nodeOffspringNumber = parseInt(document.querySelector("input").value);
    //Első szem kiválasztása
    var firstParentEyeSelected = document.querySelector("#firstParentEyeColor").selectedIndex;
    var firstParentEye = document.querySelectorAll(".firstParentEye")[firstParentEyeSelected].value;

    //Második szem kiválasztása
    var secondParentEyeSelected = document.querySelector("#secondParentEyeColor").selectedIndex;
    var secondParentEye = document.querySelectorAll(".secondParentEye")[secondParentEyeSelected].value;

    eyeArray = getEyeArray(firstParentEye, secondParentEye);

    //Itt egy for ciklussal vagy forEach fgv-el feltöltöm a táblázatok sorait.
    nodeTbody.innerHTML = "<tr>" + "<td>Ez egy cucc</td>" + "<td>Ez egy másik cucc</td>" + "</tr>"

    getEyeColor(eyeArray);

    console.log(eyeArray);
    //console.log(nodeOffspringNumber);
    //console.log(nodeTbody);
}

function getEyeArray(firstEye, secondEye){
    var eyeArray = [];

    eyeArray.push(firstEye);
    eyeArray.push(secondEye);

    return eyeArray;
}

function getEyeColor(EyePair){
    var offspringEyeColor = "";
    var offspringEyeColorChances = [];

    if(EyePair[0] == "brown" && EyePair[1] == "brown"){
        for(var i = 0; i < 75; i++){
            offspringEyeColorChances.push("brown");
        }
        for(var i = 0; i < 19; i++){
            offspringEyeColorChances.push("green");
        }
        for(var i = 0; i < 6; i++){
            offspringEyeColorChances.push("blue");
        }
    }
    if(EyePair[0] == "blue" && EyePair[1] == "blue"){
        
        offspringEyeColorChances.push("green");
        
        for(var i = 0; i < 99; i++){
            offspringEyeColorChances.push("blue");
        }
    }
    if(EyePair[0] == "green" && EyePair[1] == "green"){
        for(var i = 0; i < 25; i++){
            offspringEyeColorChances.push("green");
        }
        for(var i = 0; i < 75; i++){
            offspringEyeColorChances.push("blue");
        }
    }
    if(EyePair[0] == "brown" && EyePair[1] == "blue" || EyePair[0] == "blue" && EyePair[1] == "brown"){
        for(var i = 0; i < 50; i++){
            offspringEyeColorChances.push("brown");
        }
        for(var i = 0; i < 50; i++){
            offspringEyeColorChances.push("green");
        }
    }
    if(EyePair[0] == "brown" && EyePair[1] == "green" || EyePair[0] == "green" && EyePair[1] == "brown"){
        for(var i = 0; i < 50; i++){
            offspringEyeColorChances.push("brown");
        }
        for(var i = 0; i < 12; i++){
            offspringEyeColorChances.push("green");
        }
        for(var i = 0; i < 38; i++){
            offspringEyeColorChances.push("blue");
        }
    }
    if(EyePair[0] == "blue" && EyePair[1] == "green" || EyePair[0] == "green" && EyePair[1] == "blue"){
        for(var i = 0; i < 50; i++){
            offspringEyeColorChances.push("green");
        }
        for(var i = 0; i < 50; i++){
            offspringEyeColorChances.push("blue");
        }
    }

    shuffle(offspringEyeColorChances);
    //console.log(offspringEyeColorChances);
    //console.log(offspringEyeColorChances.length);
    offspringEyeColor = offspringEyeColorChances[(Math.random()*99).toFixed()];
    //console.log(offspringEyeColor);
    return offspringEyeColor;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}