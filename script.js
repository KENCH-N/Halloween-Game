let name, choiceO;

function startGame() {
    alert("Game Has Started");
    name = prompt("What Is Your Name?");
    alert("Welcome " +name+ " to the Haunted All Saints High School!");
    document.getElementById("para1").innerHTML = "You Are At The Entrance Of All Saints";
    choice1();
}

function dead() {
    document.getElementById("death").innerHTML = "YOU ARE DEAD"
    document.getElementById("death").style.font = 500;
}

function choice1() {
    document.getElementById("para2").innerHTML = "Where Do You Want To Go";
    choiceO = prompt("The Basement (A), the Ground Floor (B), the 2nd Floor (C), or the 3rd Floor(D)")
    if (choiceO == "A") {
        document.getElementById("para3").innerHTML = "You Have Arrived In The Basement";
    }
    if (choiceO == "B") {
        document.getElementById("para3").innerHTML = "You Continud On The Ground Floor";
    }
    if (choiceO == "C") {
        document.getElementById("para3").innerHTML = "You Have Arrived On The Second Floor";
    }
    if (choiceO == "D") {
        document.getElementById("para3").innerHTML = "You Have Arrived On The Third Floor";
    }
}

function choice2() {
    let choiceW = prompt("Do you Scream? (A), Fight Him (B), Or Run? (C)");
    if (choiceW == "A") {
        document.getElementById("para8").innerHTML = "You Scream, And He Sees You, He Runs Towards You And Chops You In Half";
        dead();
    }
    if (choiceW == "B") {
        document.getElementById("para8").innerHTML = "You Engage Him In Combat, You Pull Out Your Glock19";
        dead();
    }
}
function basement() {
    document.getElementById("para4").innerHTML = "You Find Human Parts Laying Around Randomly";
    let choiceQ = prompt("What Do You Do? Run Away And Return To The Ground Floor (A), Investigate Further (B), Play With Human Parts (C).");
    if (choiceQ == "A") {
        document.getElementById("para6").innerHTML = "You Pee You Pants And Run Away.";
        choice1();
    }
    if (choiceQ == "B") {
        document.getElementById("para6").innerHTML = "You Walk Further In.";
        document.getElementById("para7").innerHTML = "You See A Man With A Chainsaw Chopping People's Limbs Off Alive";
        choice2();
    }
    if (choiceQ == "C") {
        document.getElementById("para6").innerHTML = "You Get Blood In Your Eye And Die Immediately";
        dead();
        
    }
}


function thirdFloor(){
    document.getElementById("para4").innerHTML= "You Arrive, Noticing Little Of Interest, Until You Hear Voices";
    let choiceY = prompt("What Will You Do Next? Run Away And Return To The Ground Floor (A), Follow The Sound Of Voices (B)");
    }
    if (choiceY == "A"){
        document.getElementById("para6").innerHTML = "You've Reached The Ground Floor Once More. It Has Become Significantly Darker Outside";
    choice1();}

