/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  
  // Game Item Objects
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  let walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                          // change 'eventType' to the type of event you want to handle
  $(document).on('keyup',handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(keydown) {
    console.log(keydown.which)
    if(keydown.which === KEY.LEFT){
      walker.speedX = -5;
      console.log("left pressed");
    }
    else if(keydown.which === KEY.RIGHT){
       walker.speedX = 5;
      console.log("right pressed");
    }
    else if(keydown.which === KEY.UP){
       walker.speedY = -5;
      console.log("up pressed");
    }
    else if(keydown.which === KEY.DOWN){
       walker.speedY = 5;
      console.log("down pressed");
    }
  }
   function handleKeyUp(keyup){
    console.log(keyup.which)
    if(keyup.which === KEY.LEFT){
      walker.speedX = 0;
      console.log("left pressed");
    }
    else if(keyup.which === KEY.RIGHT){
       walker.speedX = 0;
      console.log("right pressed");
    }
    else if(keyup.which === KEY.UP){
       walker.speedY = 0;
      console.log("up pressed");
    }
    else if(keyup.which === KEY.DOWN){
       walker.speedY = 0;
      console.log("down pressed");
   }
   }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem(){
      walker.x = walker.x + walker.speedX;
      walker.y = walker.y + walker.speedY;
      console.log(walker.x, walker.y);
  }
  function redrawGameItem(){
    $("#walker").css({"left": walker.x, "top": walker.y });
  }
  //attempted to contain the box by its border
  function wallCollision(){
    if (walker.x  < 0 ){
       walker.x -= walker.speedX;
    }
    if (walker.y < 0){
       walker.y -= walker.speedY;
    }
    if (walker.x > $("#board").width()- 55) {
       walker.x -= walker.speedX;
    }
    if (walker.y > $("#board").height()- 55){
       walker.y -= walker.speedY;
    }
  }
}