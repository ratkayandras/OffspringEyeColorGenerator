var nodeButton = document.querySelector("button");
var nodeOffspringNumber = document.querySelector("input").value;

nodeButton.addEventListener("click", getEyeArrayEventHandler);

function getEyeArrayEventHandler(firstEye, secondEye){
    var eyeJSON = [];
    
    var nodeTbody = document.querySelector("tbody");
    var nodeOffspringNumber = parseInt(document.querySelector("input").value);
    //Első szem kiválasztása
    var firstParentEyeSelected = document.querySelector("#firstParentEyeColor").selectedIndex;
    var firstParentEye = document.querySelectorAll(".firstParentEye")[firstParentEyeSelected].value;

    //Második szem kiválasztása
    var secondParentEyeSelected = document.querySelector("#secondParentEyeColor").selectedIndex;
    var secondParentEye = document.querySelectorAll(".secondParentEye")[secondParentEyeSelected].value;

    eyeJSON = getEyeArray(firstParentEye, secondParentEye);

    //Itt egy for ciklussal vagy forEach fgv-el feltöltöm a táblázatok sorait.
    nodeTbody.innerHTML = "<tr>" + "<td>Ez egy cucc</td>" + "<td>Ez egy másik cucc</td>" + "</tr>"

    console.log(eyeJSON);
    console.log(nodeOffspringNumber);
    console.log(nodeTbody);
}

function getEyeArray(firstEye, secondEye){
    var eyeJSON = [];

    eyeJSON.push(firstEye);
    eyeJSON.push(secondEye);

    return eyeJSON;
}