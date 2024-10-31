let name, choiceO;

function startGame() {
    alert("Game Has Started");
    name = prompt("What Is Your Name?");
    alert("Welcome " +name+ " to the Haunted All Saints High School!");
    document.getElementById("para1").innerHTML = "You Are At The Entrance Of All Saints";
    choice1();
}

function dead() {
    document.getElementById("death").innerHTML = "YOU ARE DEAD, Refresh Page To Play Again";
    document.getElementById("death").style.fontSize = "50px";
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
        document.getElementById("para8").innerHTML = "You Engage Him In Combat, You Pull Out Your Glock-19 And Shoot Him, He Dies, But The Bullet Richochets And Hits You";
        dead();
    }
    if (choiceW == "C") {
        document.getElementById("para8").innerHTML = "You Run Too Loudly And Fall, You Crack Your Head And Die";
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

function groundFloor() {
    document.getElementById("para4").innerHTML = "You Wander The Ground Floor, You Hear The Sound Of Another Student.";
    let choiceE = prompt("Do You Try To Talk To The Student (A), Shoot Him WIth Your Glock-19 (B), Or Walk Away (C)");
    if (choiceE == "A") {
        document.getElementById("para5").innerHTML = "You Try To Talk To Him But He is Deaf, You Get Annoyed And Shoot Him Anyways.";
        document.getElementById("para6").innerHTML = "You Decide It's Too Scary and Leave, Upon Leaving Cult Members Jump You";
        dead();
    }
    if (choiceE == "B") {
        document.getElementById("para5").innerHTML = "You Peak Him and Shoot Him Thrice. He Dies. He Turns Into A Zombie And Bites You.";
        dead();
    }
    if (choiceE == "C") {
        document.getElementById("para5").innerHTML = "You Walk Away And Sees That Another Student Has Entered The Building, This One Shoots You";
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

