
var buttonColours = ["red", "blue", "green" , "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var i=1;
var level;
if(i==1){
  start();
}
function start(){
$(document).on("keypress",function(event){
   level=0;
if(i==1){

    nextSequence();}


  i++;
})}

$(".button").on("click", function(){

var currentColour=  $(this).attr("id");

  var playsound = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  playsound.play();
  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  var currentLevel=userClickedPattern.length-1;
  checkAnswer(currentLevel);
  animatePress(userChosenColour);

});
function checkAnswer(currentLevel){
  if(JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern)){
    //console.log("success");
    setTimeout(function () {
      userClickedPattern.splice(0, userClickedPattern.length);
     nextSequence();
   }, 1000);
  }else{
    if(userClickedPattern.length==gamePattern.length){
  //  console.log("wrong");

    var audio1 = new Audio("sounds/" + "wrong" + ".mp3");
    audio1.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 500);


startOver();
  }
}
}

function nextSequence() {
level++;
  $("h1").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);

var randomchoosenColour=buttonColours[randomNumber];

gamePattern.push(randomchoosenColour);

$("#" +randomchoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomchoosenColour + ".mp3");
  audio.play();

}


function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function startOver(){
  level=0;
//  $(document).on("keypress",function(event){



    //  $("h1").text("Press A Key to Start");
      gamePattern.splice(0, gamePattern.length);
userClickedPattern.splice(0, userClickedPattern.length);
      i=1;

start();
  //})


}
