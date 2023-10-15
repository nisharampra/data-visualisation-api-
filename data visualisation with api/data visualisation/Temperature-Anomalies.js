function TemperatureAnomalies() {
  // Name for the visualization to appear in the menu bar.
  this.name = 'Temperature Anomalies';

  // Each visualization must have a unique ID with no special characters.
  this.id = 'temperature_anomalies';

  // Preload the data (optional if you already preloaded it in the main preload function)
//  this.preload = function() {
//    // Preloading the XML file
//    dataCollection = loadXML("data/September Temperature Anomalies/data.xml");
//  };
    this.preload = function() {
  var self = this;
  dataCollection = loadXML("data/September Temperature Anomalies/data.xml");
    .then(response => response.text())
    .then(xmlData => {
      console.log(xmlData); // Check if the XML data is loaded
      dataCollection = new DOMParser().parseFromString(xmlData, "text/xml");
      console.log(dataCollection); // Check if dataCollection is a valid XML object
      // Rest of your code to parse the XML data and set up the visualization
    })
    .catch(error => {
      console.error('Failed to load XML data:', error);
    });
};

  // Set up the visualization
  this.setup = function() {
    createCanvas(windowWidth, windowHeight);
    // Parsing the XML data
    let dataNodes = dataCollection.getChildren("data");
    for (let i = 0; i < dataNodes.length; i++) {
      let yearNode = dataNodes[i].getChild("year");
      let anomalyNode = dataNodes[i].getChild("anomaly");
      years.push(int(yearNode.getContent()));
      anomalies.push(float(anomalyNode.getContent()));
    }

    diagramX = width / 2;
    diagramY = height / 2;
    angleStep = TWO_PI / years.length;
  };

  // Draw the visualization
  this.draw = function() {
    background(240);
    let radius = width / 5 - 150;

    for (let i = 0; i < years.length; i++) {
      let size = map(anomalies[i], -1, 1, 0, 205);
      let pointX = (size + radius) * cos(i * angleStep - HALF_PI) + diagramX;
      let pointY = (size + radius) * sin(i * angleStep - HALF_PI) + diagramY;
      let cirX = radius * cos(i * angleStep - HALF_PI) + diagramX;
      let cirY = radius * sin(i * angleStep - HALF_PI) + diagramY;

      // Draw the line
      stroke("black");
      strokeWeight(0.1);
      line(cirX, cirY, pointX, pointY);

      // Draw data points
      let dataSize;
      let dis = dist(mouseX, mouseY, pointX, pointY);
      if (dis < 5) {
        fill("red");
        dataSize = 10;
        noStroke();
        circle(pointX, pointY, dataSize);

        // Draw the information
        textAlign(CENTER);
        textSize(11);
        fill("black");
        text(years[i], diagramX, diagramY);
        fill('purple')
        rect(diagramX, diagramY + 15 + 30 + 5)
        textSize(25);
        text(anomalies[i].toFixed(2), diagramX, diagramY + 45);
      } else {
        fill('purple')
        dataSize = 3;
        noStroke();
        circle(pointX, pointY, dataSize)
      }
    }

    // Draw the information
    textAlign(CENTER)
    textSize(50);
    text('Temperature Anomalies', width / 2, 50);
  };
}
