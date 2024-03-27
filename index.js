const cells = document.querySelectorAll(".cell")
const CheckBtn = document.querySelector("#GoBtn")
const lifes = document.querySelectorAll(".life")
let lives = 4

const arr = 
[ ["write", "pencil", "tool", 
"modern", "ipad", "paper"
,"granny smith", "apple", "gala"],

            ["train", "track", "music", 
                "physics", "field", "anthropology"
        ,"football", "soccer", "goalie"],

        ["fast", "flash", "superhero", 
"red", "card", "soccer"
,"debit", "credit", "cash"],

    ["soft", "pillow", "sleep", 
            "murder", "case", "investigation"
            ,"android", "phone", "apple"],

    ["beans", "coffee", "starbucks", 
            "cold", "water", "hot"
            ,"bag", "tea", "cup"],

    ["hey", "hi", "hello", 
            "bullies", "school", "friends"
            ,"freshman", "junior", "sophmore"],

    ["monster", "cookie", "blue", 
            "grill", "bake", "fry"
            ,"hot", "oven", "mitts"],

        ["princess", "cinderella", "shoe", 
            "plus", "disney", "cruise"
            ,"club house", "mickey", "mouse"],

    ["Amy", "superstore", "Jonah", 
            "popcorn", "snack", "break"
            ,"human beings", "community", "city college"],

           ["dumb", "slow", "speed", 
            "green", "turtle", "crochet"
            ,"wave", "ocean", "beach"]
]

const options = arr[(Math.floor(Math.random() * (arr.length)))];





//cells.forEach(cell => cell.textContent = "hello")

//box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.5);


function StartGame() {
//inital state
//Words pop up left and right columns
CheckBtn.addEventListener("click", BtnPress)
cells.item(0).textContent = options[0]
cells.item(2).textContent = options[2]
cells.item(3).textContent = options[3]
cells.item(5).textContent = options[5]
cells.item(6).textContent = options[6]
cells.item(8).textContent = options[8]

cells.item(1).value = ""
cells.item(4).value = ""
cells.item(7).value = ""




cells.item(1).setAttribute("Maxlength", 14)
cells.item(4).setAttribute("Maxlength", 14)
cells.item(7).setAttribute("Maxlength", 14)
}



function BtnPress() {
// if all three boxes are filled
// check answers
const animation_duration = 800; //ms





if (cells.item(1).value !== "" && cells.item(4).value !== "" && cells.item(7).value !== ""){
    let check = 0
    lives = lives - 1
    document.getElementById("GoBtn").disabled = true; //durability testing

    setTimeout(() => {
        if (cells.item(1).value.toLowerCase() == options[1].toLowerCase()){
        cells.item(1).classList.add("right")
        cells.item(1).disabled = true;
        check = check + 1
    } else {
        cells.item(1).classList.add("wrong")
        setTimeout(() => {cells.item(1).classList.remove("wrong") & (cells.item(1).value = "")}, 2000)
        
    } 
    }, ((2+1)*animation_duration / 2))
    


   setTimeout(() => {
    if (cells.item(4).value.toLowerCase() == options[4].toLowerCase()){
        cells.item(4).classList.add("right")
        cells.item(4).disabled = true;
        check = check +1
    } else {
        cells.item(4).classList.add("wrong")
        setTimeout(() => {cells.item(4).classList.remove("wrong") & (cells.item(4).value = "")}, 2400)
       
    }
    }, ((1+1)*animation_duration / 2))
    


    setTimeout(() => {
    if (cells.item(7).value.toLowerCase() == options[7].toLowerCase()){
        cells.item(7).classList.add("right")
        cells.item(7).disabled = true;
        check = check + 1
    } else {
        cells.item(7).classList.add("wrong")
        setTimeout(() => {cells.item(7).classList.remove("wrong") & (cells.item(7).value = "")}, 2800)
        
        
    }
    }, ((0+1)*animation_duration / 2))

    cells.item(7).classList.add("animated"); //1
    cells.item(7).animationDelay = `${((0)*animation_duration / 2)}ms`;
   

    cells.item(4).classList.add("animated"); //2
    cells.item(4).style.animationDelay = `${((1)*animation_duration / 2)}ms`;

    cells.item(1).classList.add("animated") //3
    cells.item(1).style.animationDelay = `${((2)*animation_duration / 2)}ms`;


    setTimeout(() => {
    cells.item(7).classList.remove("animated");
    cells.item(4).classList.remove("animated");
    cells.item(1).classList.remove("animated");
    }, 1900)

    
   
    


setTimeout(() => {
    if (check == 3 & lives >= 0){
        //setTimeout(() => {alert("YOU WON")},700)

        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
        return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);


        document.getElementById("GoBtn").disabled = true;
        
    } else if (lives == 0){
        setTimeout(() => {alert("YOU LOST")}, 700)
        document.getElementById("GoBtn").disabled = true;
        cells.item(1).disabled = true;
        cells.item(4).disabled = true;
        cells.item(7).disabled = true;
        //lifes.item(lives = lives - 1).classList.add("minus") 
        lifes.item(lives).classList.add("minus")  
    } else {
        setTimeout(() => {document.getElementById("GoBtn").disabled = false}, 2500)//durability test
        lifes.item(lives).classList.add("minus")
        
    }
    
    //document.getElementById("GoBtn").disabled = false;
    }, 1900)

} else {
alert("FILL BOXES")
}
    
    }


StartGame();