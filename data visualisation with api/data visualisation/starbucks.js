
function starbucksInSg()
{
    // Name for the visualisation to appear in the menu bar.
    this.name = 'starbucksInSg';

    // Each visualisation must have a unique ID with no special
    // characters.
    this.id = 'starbucksInSg';

    // Preload the data. This function is called automatically by the
    // gallery when a visualisation is added.

    var myMap;
    var canvas;
    var mappa = new Mappa('Leaflet');
    let img;
    // put all map options in a single object
    var options = 
        {
            lat: 1.357107,
            lng: 103.8194992,
            zoom: 11,
            style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        }

    // Property to represent whether data has been loaded.
    this.loaded = false;
    this.preload = function() {
        // this.StarbucksData = loadTable('data/starbucks/starbucks.csv', 'csv', 'header', this.csvLoaded.bind(this));
        this.StarbucksData = loadTable('data.csv', 'csv', 'header', this.csvLoaded.bind(this));

      };
    
    //   this.csvLoaded = function() {
    //     this.loaded = true;
    //   };
    this.csvLoaded = function() {
        this.loaded = true;
        console.log("CSV Data:", this.StarbucksData);
        console.log("Column Names:", this.StarbucksData.columns);
        
        
    };
    
   
    this.setup = function() {
            // Clear the previous content of the stage div
            select('#stage').html('');
            //for text  header
            //first text
            const heading1 = createElement('h2', 'starbucks in singapore');
            heading1.parent('stage');
        
            //second text
            const heading2 = createElement('h3', 'You can zoom to see the location');
            heading2.parent('stage');
        
            // Create the map container
            const mapContainer = createDiv();
            mapContainer.id('map');
            mapContainer.parent('stage');
            L.Marker.prototype.options.icon = L.icon({
              iconUrl: 'lib/leaflet file/images/marker-icon-2x.png',
              iconSize: [32, 32]  // Adjust the size as needed
            });
        
            // Create the Leaflet map
            myMap = L.map('map').setView([options.lat, options.lng], options.zoom);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(myMap);
        
          };
        
          


    // Inside the draw function

          // Define the URL to your custom marker image
          // const customIconUrl = 'lib/leaflet file/images/marker-icon-2x.png';
          this.draw = function() {
            if (this.loaded) {
              for (let i = 0; i < this.StarbucksData.getRowCount(); i++) {
                const location = this.StarbucksData.getRow(i);
                const lat = location.getNum('lat');
                const lng = location.getNum('lng');
        
                // Create a custom marker icon
                const customIcon = L.icon({
                  iconUrl: 'lib/leaflet file/images/marker-icon-2x.png', // Path to your custom marker image
                  iconSize: [32, 32] // Adjust icon size as needed
                });
        
                // Add a marker to the map
                L.marker([lat, lng], { icon: customIcon }).addTo(myMap);
              }
            }
          };
    
    
    this.onMapChange = function(){

        //firstChild is #map_draw
        //lastChild is #map
        //put the #map_draw on top of #map
        select("#stage").elt.firstChild.style.zIndex=2;
        select("#stage").elt.lastChild.style.zIndex=1;
        
        //display the mouse event on #map_draw and pass through the mouse event to the next layer which is #map
        select("#stage").elt.firstChild.style.pointerEvents = "none"; 
        //need to set both #map_draw and #map position to absolute for pointerEvents=none to take effect
        select("#stage").elt.firstChild.style.position = "absolute"; 
        select("#stage").elt.firstChild.style.position = "absolute"; 
        
        clear();
        fill(0);
       
    }
    
    this.mousePressed = function(){
       // select("#stage").elt.lastChild.style.zIndex=1;
       // select("#stage").elt.firstChild.style.zIndex=-1;
    }
    
    this.mouseReleased = function(){
       // select("#stage").elt.firstChild.style.zIndex=1;
       // select("#stage").elt.lastChild.style.zIndex=-1;
    }
    
    this.mouseDragged = function(){
       // select("#stage").elt.lastChild.style.zIndex=1;
       // select("#stage").elt.firstChild.style.zIndex=-1;
    }

    //to destroy the map once clicked to another menue//
    this.destroy = function() {
                // this will clear the map thru div
                myMap.remove();
                select('#stage').html('<div id="app"></div>');
            
                // to create a new map
                canvas = createCanvas(1024, 576);
                canvas.parent('app');
              };

}


