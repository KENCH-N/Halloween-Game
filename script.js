let name, choiceO;

function startGame() {
    alert("Game Has Started");
    name = prompt("What Is Your Name?");
    alert("Welcome " +name+ " to the Haunted All Saints High School!");
    document.getElementById("para1").innerHTML = "You Are At The Entrance Of All Saints";
    choice1();
}

function choice1() {
    document.getElementById("para2").innerHTML = "Where Do You Want To Go";
    choiceO = prompt
}
