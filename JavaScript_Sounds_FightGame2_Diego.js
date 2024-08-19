//My variables
let damage = 8;
let enemy1health = 100;
//Player variables
let cash = 0;
let player1health = 100;
let enemyDamage = 80;
//Health and money function
        setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let healthvariable = document.getElementById("health")
            healthvariable.value = enemy1health;

            if (enemy1health <= 1)
                {
                    enemy1health = 100;
                    let amountgiven = Math.floor(Math.random() * 200 + 1);
                    cash += amountgiven;
                    player1health ++;
                    mySound = new sound("SUI_sound.mp3");
                    mySound.play();
                }
        }, 1);

//Player health function
setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let playerhealthvariable = document.getElementById("playerHealth")
            playerhealthvariable.value = player1health;

            if (player1health <= 1)
                {
                    player1health = 2;
                    let amountgiven = Math.floor(Math.random() * 100 + 1);
                    cash -= amountgiven;
                    alert("YOU LOSE!")
                }
        }, 1);

//Timer set
const timeH = document.querySelector('h1');
let timeSecond = 18;

function endTime()
{
    timeH.innerHTML = 'INCOMING ATTACK!'
    player1health -= enemyDamage;
    timeSecond = 18;
}

var isPlaying = false;
//Inconming enemy damage
function startMatch()
{
    displayTime(timeSecond)

const countdown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(countdown);
        isPlaying = true
        isPlayingg = false
        timeSecond = 18
        mySound = new sound("punch-2.mp3");
                    mySound.play();
    }
    else if (!isPlaying)
    {
        isPlaying = true
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}

//New: Play background music


if  (!isPlaying)
{
    mySound = new sound("muffled-party-music-183774.mp3");
    mySound.play();
    isPlaying = true
}

// prevent the start button from being clicked
document.getElementById("startMatchbutton").disabled = true;
// allow the stop button to be clicked
document.getElementById("stopSound").disabled = false;


}
//Restart the match
function restartMatch()
{
    window.location.reload(); //stop playing music by reloading the page
    player1health = 90
    enemy1health = 100
    timeSecond = 15
    enemyDamage = 80
    startMatch();
}


//New: Added Sound Code


function Suii()
{
    var mySound = new sound("muffled-party-music-183774.mp3")
    mySound.play();
}

// build the constructor to create a sound object
function sound(src)
{
// create a new audio element
    this.sound = document.createElement("audio");
//set the source of the audio element
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

var isPlayingg = false;
// Damage Enemy
function attackEnemy()
        {
            enemy1health -= damage; 
            enemyDamage = 80;

            if  (!isPlayingg)
                {
                    mySound = new sound("punch-95294.mp3");
                    mySound.play();
                    isPlayingg = true
                }
        }

        //Block Incoming damage
function blockEnemy()
        {
            enemyDamage = 0;
            // allow the start button to be clicked
            document.getElementById("startMatchbutton").disabled = false;
            // prevent the stop button from being clicked
            document.getElementById("stopSound").disabled = true;

        }




