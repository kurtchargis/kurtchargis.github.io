// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  //applyFilter(reddify);
  //applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  //applyFilterNoBackground(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  for(let row = 0; row < image.length; row++){
    for(let col = 0; col < image[row].length; col++){
      //console.log(image[row][col]);
      let pixel = image[row][col];
      let pixelArray = rgbStringToArray(pixel);
      
      //this is where I'll modify the color values later
      filterFunction(pixelArray);
      console.log(image[row][col]);
      console.log("pixel:", pixel); //debugging line
      console.log("pixelArray:", pixelArray); //debugging line
      let updatedPixel = rgbArrayToString(pixelArray); // keep
      console.log("updatedPixel:", updatedPixel);//debugging line
      image[row][col] = updatedPixel; //don't comment this like you did earlier
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  let backgroundColor = image[0][0];
  for(let row = 0; row < image.length; row++){
    for(let col = 0; col < image[row].length; col++){
      //console.log(image[row][col]);
      
      let pixel = image[row][col];
      let pixelArray = rgbStringToArray(pixel);

      //console.log("Background Color:", backgroundColor);
      //console.log("Current Pixel:", pixel);
      if(pixel !== backgroundColor){
        //this is where I'll modify the color values later
        filterFunction(pixelArray);
        let updatedPixel = rgbArrayToString(pixelArray); // keep
        image[row][col] = updatedPixel;
      }
       
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num){
   return num > 255 ? 255: num < 0 ? 0 : num;
   
  }
 /* console.log(keepInBounds(-10)); // Should return 0
console.log(keepInBounds(260)); // Should return 255
console.log(keepInBounds(128)); // Should return 128*/

// TODO 4: Create reddify filter function
function reddify(pixArray)
{
  pixArray[RED] = 200;
 
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixArray){
  pixArray[BLUE] -= 50;
  pixArray[BLUE] = keepInBounds(pixArray[BLUE]);
}
function increaseGreenByBlue(pixArray){
  //console.log("Before:", pixArray); // Debugging line
  pixArray[GREEN] += pixArray[BLUE];
  pixArray[GREEN] = keepInBounds(pixArray[GREEN]);
 // console.log("After:", pixArray); // Debugging line
}

// CHALLENGE code goes below here
