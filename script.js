let name, choiceO, choiceQ, choice;

function clear() {
    document.getElementById("para1").innerHTML = "";
    document.getElementById("para2").innerHTML = "";
    document.getElementById("para3").innerHTML = "";
    document.getElementById("para4").innerHTML = "";
    document.getElementById("para5").innerHTML = "";
}
function startGame() {
    alert("Game Has Started");
    name = prompt("What Is Your Name?");
    alert("Welcome " +name+ " to the Haunted All Saints High School!");
    document.getElementById("para1").innerHTML = "You Are At The Entrance Of All Saints";
    document.getElementById("button1").style.display = "inline";
    document.getElementById("button1").innerHTML = "Click To Choose";
    document.getElementById("button1").setAttribute("onclick", "choice1()");
}


function dead() {
    document.getElementById("death").innerHTML = "YOU ARE DEAD, Refresh Page To Play Again";
    document.getElementById("death").style.fontSize = "50px";
}

function choice1() {
    choiceO = prompt("The Basement (A), the Ground Floor (B), the 2nd Floor (C), or the 3rd Floor(D)")
    if (choiceO == "A") {
        document.getElementById("para1").innerHTML = "You Have Arrived In The Basement";
        basement();
    }
    if (choiceO == "B") {
        document.getElementById("para1").innerHTML = "You Continud On The Ground Floor";
        groundFloor();
    }
    if (choiceO == "C") {
        document.getElementById("para1").innerHTML = "You Have Arrived On The Second Floor";
        secondFloor();
    }
    if (choiceO == "D") {
        document.getElementById("para1").innerHTML = "You Have Arrived On The Third Floor";
        thirdFloor();
    }
}

function choice2() {
    let choiceW = prompt("Do you Scream? (A), Fight Him (B), Or Run? (C)");
    if (choiceW == "A") {
        document.getElementById("para5").innerHTML = "You Scream, And He Sees You, He Runs Towards You And Chops You In Half";
        dead();
    }
    if (choiceW == "B") {
        document.getElementById("para5").innerHTML = "You Engage Him In Combat, You Pull Out Your Glock-19 And Shoot Him, He Dies, But The Bullet Richochets And Hits You";
        dead();
    }
    if (choiceW == "C") {
        document.getElementById("para5").innerHTML = "You Run Too Loudly And Fall, You Crack Your Head And Die";
        dead();
    }
}

function choice3() {
    let choiceQ = prompt("What Do You Do? Run Away And Return To The Ground Floor (A), Investigate Further (B), Play With Human Parts (C).");
    if (choiceQ == "A") {
        document.getElementById("para3").innerHTML = "You Pee You Pants And Run Away.";
        choice1();
    }
    if (choiceQ == "B") {
        document.getElementById("para3").innerHTML = "You Walk Further In.";
        document.getElementById("para4").innerHTML = "You See A Man With A Chainsaw Chopping People's Limbs Off Alive";
        choice2();
    }
    if (choiceQ == "C") {
        document.getElementById("para3").innerHTML = "You Get Blood In Your Eye And Die Immediately";
        dead();
        
    }
}
function basement() {
    document.getElementById("para2").innerHTML = "You Find Human Parts Laying Around Randomly";
    document.getElementById("button1").style.display = "inline";
    document.getElementById("button1").innerHTML = "Click To Choose";
    document.getElementById("button1").setAttribute("onclick", "choice3()");
}

function choice4() {
    let choiceE = prompt("Do You Try To Talk To The Student (A), Shoot Him WIth Your Glock-19 (B), Or Walk Away (C)");
    if (choiceE == "A") {
        document.getElementById("para3").innerHTML = "You Try To Talk To Him But He is Deaf, You Get Annoyed And Shoot Him Anyways.";
        document.getElementById("para4").innerHTML = "You Decide It's Too Scary and Leave, Upon Leaving Cult Members Jump You";
        dead();
    }
    if (choiceE == "B") {
        document.getElementById("para3").innerHTML = "You Peak Him and Shoot Him Thrice. He Dies. He Turns Into A Zombie And Bites You.";
        dead();
    }
    if (choiceE == "C") {
        document.getElementById("para3").innerHTML = "You Walk Away And Sees That Another Student Has Entered The Building, This One Shoots You";
        dead();
    }
}
function groundFloor() {
    document.getElementById("para2").innerHTML = "You Wander The Ground Floor, You Hear The Sound Of Another Student.";
    document.getElementById("button1").style.display = "inline";
    document.getElementById("button1").innerHTML = "Click To Choose";
    document.getElementById("button1").setAttribute("onclick", "choice4()");
}

function choice5() {
    let choiceY = prompt("What Will You Do Next? Run Away And Return To The Ground Floor (A), Follow The Sound Of Voices (B)");
    if (choiceY == "A"){
        document.getElementById("para3").innerHTML = "You've Reached The Ground Floor Once More. It Has Become Significantly Darker Outside";
        document.getElementById("button1").style.display = "inline";
        document.getElementById("button1").innerHTML = "Click To Choose";
        document.getElementById("button1").setAttribute("onclick", "choice1()");
    }
    if (choiceY == "B"){
        document.getElementById("para3").innerHTML = "You Walk In Circles For What Feels Like Hours, Until You Realise The Voices Are On The Roof";
        document.getElementById("para4").innerHTML = "You Climb The Stairwell Ladder Onto The Roof, Seeing A Circle Of Cloaked Figures";
        document.getElementById("button1").style.display = "inline";
        document.getElementById("button1").innerHTML = "Click To Choose";
        document.getElementById("button1").setAttribute("onclick", "choiceR()");
    }
}
function thirdFloor(){
    document.getElementById("para2").innerHTML= "You Arrive, Noticing Little Of Interest, Until You Hear Voices";
    document.getElementById("button1").style.display = "inline";
    document.getElementById("button1").innerHTML = "Click To Choose";
    document.getElementById("button1").setAttribute("onclick", "choice5()");
}

function choiceR(){
    let choiceM = prompt("Do You Freeze (A), Jump (B), Call Out(C)")
    if (choiceM == "A"){
        document.getElementById("para5").innerHTML = "You Feel Dizzy And Suddenly Black Out";
    dead();
    }
    if (choiceM == "B"){
        document.getElementById("para5").innerHTML = "You Jump, Closing Your Eyes And Bracing For Impact";
        Math.random
    }
    if (choiceM == "C"){
        document.getElementById("para5").innerHTML = "Their Red Eyes Turn To Look At You. You Feel Dizzy And Suddenly Black Out";
        dead();
    }
} 

function secondFloor(){
    document.getElementById("para2").innerHTML ="The Door Is Barred, And Will Not Open"
    document.getElementById("button1").style.display = "inline";
    document.getElementById("button1").innerHTML = "Click To Choose";
    document.getElementById("button1").setAttribute("onclick", "choice1()");
}
