var nodeButton = document.querySelectorAll("button");
var nodeOffspringNumber = document.querySelector("input").value;
var nodeDiv = document.querySelectorAll(".container");

nodeButton[0].addEventListener("click", getEyeArrayEventHandler);
nodeButton[1].addEventListener("click", statisticsEventHandler);

/*nodeButton[2].addEventListener("click", function(){
    nodeDiv[4].style.display = "none";
    nodeDiv[3].style.display = "block";
});
nodeButton[3].addEventListener("click", function(){
    nodeDiv[4].style.display = "block";
    nodeDiv[3].style.display = "none";
});*/

var offspringEyeColors = [];
var brownEyes = [];
var greenEyes = [];
var blueEyes = [];

function getEyeArrayEventHandler(firstEye, secondEye){
    var eyeArray = [];
    
    var nodeTbody = document.querySelectorAll("tbody");
    var nodeOffspringNumber = parseInt(document.querySelector("input").value);
    //Első szem kiválasztása
    var firstParentEyeSelected = document.querySelector("#firstParentEyeColor").selectedIndex;
    var firstParentEye = document.querySelectorAll(".firstParentEye")[firstParentEyeSelected].value;

    //Második szem kiválasztása
    var secondParentEyeSelected = document.querySelector("#secondParentEyeColor").selectedIndex;
    var secondParentEye = document.querySelectorAll(".secondParentEye")[secondParentEyeSelected].value;

    eyeArray = getEyeArray(firstParentEye, secondParentEye);

    var currentOffspringEyeColor;
    var offspringCounter = 1;
    var s = "";
    var nodeThead = document.querySelectorAll("thead");
    var nodeTfoot = document.querySelectorAll("tfoot");

    nodeThead[0].innerHTML = "<tr>" + "<th>Utód</th>" 
                                    + "<th>Szemszín</th>" 
                                    + "</tr>";

    nodeTfoot[0].innerHTML = "<tr>" + "<td colspan='2'>" 
                                    + "<small>Minden jog fenntartva &copy;</small>" 
                                    + "</td>" 
                                    + "</tr>";

    for(var i = 0; i < nodeOffspringNumber; i++){
        //offspringEyeColors.push(getEyeColor(eyeArray));
        currentOffspringEyeColor = getEyeColor(eyeArray);
        s += "<tr>";
        s += "<td>";
        s += "<div class=imgContainer>" + "<img src='Images/baby.ico'>" 
                                        + "</div>" 
                                        + " " 
                                        + "Utód " 
                                        + offspringCounter;
        s += "</td>";
        s += "<td>";
        if(currentOffspringEyeColor == "brown"){
            s += "<div class=imgContainer>" + "<img src='Images/browneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + currentOffspringEyeColor;

        }else if(currentOffspringEyeColor == "blue"){
            s += "<div class=imgContainer>" + "<img src='Images/blueeye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + currentOffspringEyeColor;

        }else if(currentOffspringEyeColor == "green"){
            s += "<div class=imgContainer>" + "<img src='Images/greeneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + currentOffspringEyeColor;
        }
        s += "</td>";
        s += "</tr>";
        offspringEyeColors.push(currentOffspringEyeColor);
        offspringCounter++;
    }

    //Itt egy for ciklussal vagy forEach fgv-el feltöltöm a táblázatok sorait.
    nodeTbody[0].innerHTML = s;

    nodeButton[1].style.display = "block";
    nodeButton[0].disabled = "true";
    //console.log(eyeArray);
    //console.log(offspringEyeColors);
    //console.log(nodeOffspringNumber);
    //console.log(nodeTbody);
}

function statisticsEventHandler(){
    

    var brownProportion = 0;
    var greenProportion = 0;
    var blueProportion = 0;
    

    for(var i = 0; i < offspringEyeColors.length; i++){
        if(offspringEyeColors[i] == "brown"){
            brownEyes.push(offspringEyeColors[i]);
        }
        else if(offspringEyeColors[i] == "green"){
            greenEyes.push(offspringEyeColors[i]);
        }
        else{
            blueEyes.push(offspringEyeColors[i]);
        }
    }

    brownProportion = Math.floor((brownEyes.length / offspringEyeColors.length) * 100) + " %";
    greenProportion = Math.floor((greenEyes.length / offspringEyeColors.length) * 100) + " %";
    blueProportion = Math.floor((blueEyes.length / offspringEyeColors.length) * 100) + " %";
/*
    console.log(brownEyes);
    console.log(blueEyes);
    console.log(greenEyes);

    console.log(brownProportion);
    console.log(greenProportion);
    console.log(blueProportion);
*/
    var nodeThead = document.querySelectorAll("thead");
    var nodeTfoot = document.querySelectorAll("tfoot");
    var nodeTbody = document.querySelectorAll("tbody");

    nodeThead[1].innerHTML = "<tr>" + "<th>Barna szem</th>" 
                                    + "<th>Zöld szem</th>" 
                                    + "<th>Kék szem</th>" 
                                    + "</tr>";

    nodeTfoot[1].innerHTML = "<tr>" + "<td colspan='3'>" 
                                    + "<small>Minden jog fenntartva &copy;</small>" 
                                    + "</td>" 
                                    + "</tr>";

    nodeTbody[1].innerHTML = "<tr>" + "<th>" + brownProportion + "</th>" 
                                    + "<th>" + greenProportion + "</th>" 
                                    + "<th>" + blueProportion + "</th>" 
                                    + "</tr>";

    //PieChart
    nodeDiv[3].style.display = "block";
    generateChart();
    nodeButton[1].disabled = "true";
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

function generateChart() {
    CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#521515",
                "#008000",
                "#000099"                
                ]);
	var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Szemszínek aránya",
			fontFamily: "arial black"
        },
        colorSet: "greenShades",
                animationEnabled: true,
		legend: {
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		theme: "theme2",
		data: [
		{        
			type: "pie",
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "MistyRose",       
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			toolTipContent: "{name}: {y}%",
			showInLegend: true,
			indexLabel: "#percent%", 
			dataPoints: [
				{  y: Math.floor((brownEyes.length / offspringEyeColors.length) * 100), name: "Barnaszeműek aránya", legendMarkerType: "triangle"},
				{  y: Math.floor((greenEyes.length / offspringEyeColors.length) * 100), name: "Zöldszeműek aránya", legendMarkerType: "square"},
				{  y: Math.floor((blueEyes.length / offspringEyeColors.length) * 100), name: "Kékszeműek aránya", legendMarkerType: "circle"}
			]
		}
		]
	});
    chart.render();
    }

//TÁRSADALOM Generátor

nodeButton[2].addEventListener("click", generatePopulationEventHandler);

function generatePopulationEventHandler(){

    var peopleNumber1 = parseInt(document.querySelector("#peopleBrownNum").value);
    var peopleNumber2 = parseInt(document.querySelector("#peopleBlueNum").value);
    var peopleNumber3 = parseInt(document.querySelector("#peopleGreenNum").value);
    var averageOffspringNum = parseInt(document.querySelector("#averageOffspringNum").value);
    var generationNum = parseInt(document.querySelector("#generationNum").value);

    var brownEyedPeople = [];
    var blueEyedPeople = [];
    var greenEyedPeople = [];
    var populationArray = [];
    var population = 0;

    //console.log(peopleNumber);

    brownEyedPeople = getBrownArray(peopleNumber1);
    blueEyedPeople = getBlueArray(peopleNumber2);
    greenEyedPeople = getGreenArray(peopleNumber3);

    population = brownEyedPeople.length + blueEyedPeople.length + greenEyedPeople.length;

    //console.log(population);

    populationArray = shuffle(createPopulationArray(brownEyedPeople, blueEyedPeople, greenEyedPeople));

    //console.log(populationArray);

    //console.log(createPairsArray(populationArray));

    var ObjContainerArray = createPairsArray(populationArray)

    var familiesArray = createOffspringsInObjects(ObjContainerArray, averageOffspringNum, generationNum);

    console.log(familiesArray);
    //console.log(familiesArray.length);

    var nodeThead = document.querySelectorAll("thead");
    var nodeTfoot = document.querySelectorAll("tfoot");
    var nodeTbody = document.querySelectorAll("tbody");

    nodeThead[2].innerHTML = "<tr>" + "<th>Családok</th>"  
                                    + "</tr>";

    nodeTfoot[2].innerHTML = "<tr>" + "<td colspan='2'>" 
                                    + "<small>Minden jog fenntartva &copy;</small>" 
                                    + "</td>" 
                                    + "</tr>";

    var s = "";
    var ancientCounter = 1;
    var generationCounter = 1;

        for(var i = 0; i < familiesArray.length; i++){       
        s += "<tr>";
        s += "<td>" + "Ősök " + ancientCounter + "</td>"
        if(familiesArray[i].parent1 == "brown"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/browneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent1;
                                            + "</td>"

        }else if(familiesArray[i].parent1 == "blue"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/blueeye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent1;
                                            + "</td>"

        }else if(familiesArray[i].parent1 == "green"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/greeneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent1;
                                            + "</td>"
        }
        
        if(familiesArray[i].parent2 == "brown"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/browneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent2;
                                            + "</td>"

        }else if(familiesArray[i].parent2 == "blue"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/blueeye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent2;
                                            + "</td>"

        }else if(familiesArray[i].parent2 == "green"){
            s += "<td>" + "<div class=imgContainer>" + "<img src='Images/greeneye.png'>" 
                                            + "</div>" 
                                            + " " 
                                            + familiesArray[i].parent2;
                                            + "</td>"
        }                            
        s += "</tr>";
        
        
        // Ezzel lehet majd jól feltölteni a sorokat az utódgenerációkkal he!!!
        for(var o = 0; o < Object.keys(familiesArray[i]).length - 2; o++){
            //var x = Object.keys(familiesArray[o])[o + 2];

            s += "<tr>";
            s += "<td>" + "Generáció " + generationCounter + "</td>"
            //Lehetséges problémás rész
            
            s += "<td colspan='2'>";

            for(var t = 0; t < familiesArray[i][Object.keys(familiesArray[o])[o + 2]].length; t++){
                if(familiesArray[i][Object.keys(familiesArray[o])[o + 2]][t] == "brown"){

                    s += "<div class=imgContainer>" + "<img src='Images/browneye.png'>" + "</div>";

                }
                else if(familiesArray[i][Object.keys(familiesArray[o])[o + 2]][t] == "green"){

                    s += "<div class=imgContainer>" + "<img src='Images/greeneye.png'>" + "</div>";

                }else{

                    s += "<div class=imgContainer>" + "<img src='Images/blueeye.png'>" + "</div>";
                }
            }

            s += "</td>";
            
            //Lehetséges probémás rész vége!!!

            
            //s += "<td>" + familiesArray[i][Object.keys(familiesArray[o])[o + 2]] + "</td>"
            s += "</tr>";
            
            generationCounter++;
            //console.log(Object.keys(familiesArray[i])[i + 2]);
            //console.log(x);
            //console.log(familiesArray[o].x);
            //console.log(familiesArray[o].hasOwnProperty("name"));
            //console.log(familiesArray[i][Object.keys(familiesArray[o])[o + 2]].length);
        }
        
        ancientCounter++;
        generationCounter = 1;
    }

    //Itt egy for ciklussal vagy forEach fgv-el feltöltöm a táblázatok sorait.
    nodeTbody[2].innerHTML = s;

    //console.log(generationController(familiesArray));

    /*A populationArray elemei tömbök, melyek a később kialakuló családobjektumok szülei lesznek
    A családobjektumoknak tetszőleges számú utódja lehet, ami szint szintén azokba az objektumokba
    kell tenni. Lesz olyan input elem, ahol meg lehet adni az átlagos gyerekszámot. Erre majd rosszabb esetben
    az lesz a megoldás, hogy minden családobjektumnak annyi utódja lesz, amekkora az a szám. A menőbb az lenne, ha
    csinálnék egy fgv-t ami min 0 és max megadottszám + 2-3 között olyan számot genereál melynek a végén az átlaga
    a megadott szám lesz.*/
}

function getBrownArray(arrayLength){
    var brownArray = [];
    for(var i = 0; i < arrayLength; i++){
        brownArray.push("brown");
    }
    return brownArray;
}

function getBlueArray(arrayLength){
    var blueArray = [];
    for(var i = 0; i < arrayLength; i++){
        blueArray.push("blue");
    }
    return blueArray;
}

function getGreenArray(arrayLength){
    var greenArray = [];
    for(var i = 0; i < arrayLength; i++){
        greenArray.push("green");
    }
    return greenArray;
}

function createPopulationArray(array1, array2, array3){
    var populationArray = [];

    for(var i = 0; i < array1.length; i++){
        populationArray.push(array1[i]);
    }

    for(var i = 0; i < array2.length; i++){
        populationArray.push(array2[i]);
    }

    for(var i = 0; i < array3.length; i++){
        populationArray.push(array3[i]);
    }

    return populationArray;
}

function createPairsArray(array){
    var pairedArray = [];

    if(array.length % 2 == 1){
        array.pop();
    }

    //párokat csinál az Array-ból
    for(i = 0; i < array.length; i+=2){
        var tempObj = {};
        tempObj.parent1 = array[i];
        tempObj.parent2 = array[i+1];
        pairedArray.push(tempObj);
    }
    return pairedArray;
}

function createOffspringsInObjects(ObjContainerArray, averageOffspringNumber, generationNumber){

    var familiesArray = [];
  
        for(var i = 0; i < ObjContainerArray.length; i++){
            tempEyePairArray = [];
            tempEyePairArray.push(ObjContainerArray[i].parent1);
            tempEyePairArray.push(ObjContainerArray[i].parent2);
            var gencounter = 0;
            //console.log(tempEyePairArray);
            
            for(var g = 0; g < generationNumber; g++){

                if(tempEyePairArray % 2 == 1){
                    tempEyePairArray.pop();
                }

                //tempEyePairArray = createPairsArray(tempEyePairArray);
                //console.log(createPairsArray(tempEyePairArray).length);
                //console.log(createPairsArray(tempEyePairArray));
                var offsprings = [];
                var objKey = "offspringGen" + g;

                //for(var k = 0; k < tempEyePairArray.length; k++){
                    for(var j = 0; j < averageOffspringNumber + gencounter; j++){ 
                    offsprings.push(getEyeColor(tempEyePairArray));
                    }
                    //ObjContainerArray[i][objKey] = offsprings;
               // }
                ObjContainerArray[i][objKey] = offsprings;
                //console.log(offsprings);
               
                //console.log(ObjContainerArray[i]);
                tempEyePairArray = shuffle(offsprings);
                //console.log(tempEyePairArray);
                gencounter++;
                gencounter *= averageOffspringNumber;
            }
            familiesArray.push(ObjContainerArray[i]);
            
        }
     return familiesArray;
     //console.log(familiesArray);
     console.log(Object.keys(familiesArray[0]).length);
}

/*
function generationController(familiesArray) {

}
*/