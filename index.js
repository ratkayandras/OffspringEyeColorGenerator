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

    console.log(createPairsArray(populationArray));

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
        var tempArray = [];
        tempArray.push(array[i], array[i+1]);
        pairedArray.push(tempArray);
    }
    return pairedArray;
}