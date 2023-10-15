function pieLovers() {
    // Name for the visualization to appear in the menu bar.
    this.name = 'PieLovers';
  
    // Each visualization must have a unique ID with no special characters.
    this.id = 'PieLovers';
  
 let pielikedData = [30, 40, 50, 25]; // data of ppl who love pie
 let category = "grade "; // category
 let img; //var for img

     //preload the image 
    this.preload = function() {
      img = loadImage('data/pie/pie.jpeg');
    
    }
        //drawing for the line
    this.draw = function() {
        background("230");
        textAlign(CENTER);
        textStyle(BOLD);

    textSize(20);
fill(0,0,0);
    text("pie lovers from diffrent grades", 260, 200);


        let maxpieliked = max(pielikedData);
        let imageWidth = 60;
        let imageSpacing = 100;
        let startY = height - 80;
        let x = 100;
  
        let dataPointsX = []; // Array to store x-coordinates of data points
        let dataPointsY = []; // Array to store y-coordinates of data points
  
        for (let i = 0; i < pielikedData.length; i++) {
          let imageHeight = map(pielikedData[i], 0, maxpieliked, 0, 200);
          drawImage(x, startY, imageWidth, imageHeight);
          textAlign(CENTER);
          fill(0);
          text(category + " " + (i + 1), x + imageWidth / 2, startY + 20); // Display the category label below the image
  
          // Store the coordinates of each data point
          dataPointsX.push(x + imageWidth / 2);
          dataPointsY.push(startY - imageHeight);
  
          x += imageSpacing;
        }
  
        // Draw the line connecting the data points
        stroke(0, 0, 0); // Set the line color to red
        strokeWeight(1); // Increase the line thickness
        noFill();
        beginShape();
        for (let i = 0; i < dataPointsX.length; i++) {
          vertex(dataPointsX[i], dataPointsY[i]);
        }
        endShape();
  
        // Draw data labels along the line
        textAlign(LEFT, BOTTOM);
        for (let i = 0; i < dataPointsX.length; i++) {
          text(pielikedData[i], dataPointsX[i] + 5, dataPointsY[i] - 5);
        }
        // Draw a side graph
        stroke(0); // Set the line color to black
        beginShape();
        vertex(width - 50, startY);
        for (let i = 0; i < dataPointsY.length; i++) {
          vertex(width - 50, dataPointsY[i]);
        }
        vertex(width - 50, dataPointsY[dataPointsY.length - 1]);
        endShape();
      }
       // to Draw the image//
      function drawImage(x, y, w, h) {
        image(img, x, y - h, w, h); 
      }
    
}