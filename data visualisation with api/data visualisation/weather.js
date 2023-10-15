
// function Weather() {
//   // Name for the visualization to appear in the menu bar.
//   this.name = 'Weather';

//   // Each visualization must have a unique ID with no special characters.
//   this.id = 'weather';

//   const apiKey = '431463e185f4a028f95c9adfcedb055a'; //OpenWeatherMap API key
//   let weatherMap;
//   let weatherMarker;

//   this.setup = function() {
//       createCanvas(2000, 1000);

//       // Create the map
//       const mapElement = document.getElementById('map');
//       weatherMap = L.map(mapElement).setView([20, 40], 1.49);

//       // Add a map tile layer (you can choose a different provider if you prefer)
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(weatherMap);

//       // Register the click event on the map to get weather data for clicked location
//       weatherMap.on('click', onMapClick);
//   };

//   function onMapClick(e) {
//       const lat = e.latlng.lat;
//       const lon = e.latlng.lng;
//       getWeatherData(lat, lon);
//   }

//   function getWeatherData(lat, lon) {
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&callback=gotWeatherData`;
//       httpGet(url, 'jsonp', false, gotWeatherData, gotWeatherDataError);
//   }

//     // Move the gotWeatherData function to the global scope
//   window.gotWeatherData = function(data) {
//       const temperature = data.main.temp;
//       const weatherDescription = data.weather[0].description;

//       // Display the weather information for the selected location
//       const weatherText = `Current weather: ${weatherDescription}, Temperature: ${temperature}°C`;
//       const weatherElement = document.getElementById('weather-info');
//       weatherElement.textContent = weatherText;

//       // Remove the existing marker if it exists
//       if (weatherMarker) {
//           weatherMap.removeLayer(weatherMarker);
//       }

//       // Add a marker on the map with the weather information
//       const lat = data.coord.lat;
//       const lon = data.coord.lon;
//       weatherMarker = L.marker([lat, lon]).addTo(weatherMap).bindPopup(weatherText);
//   };

//   // Move the gotWeatherDataError function to the global scope
//   window.gotWeatherDataError = function(error) {
//       console.error('Weather data request failed:', error);
//   };

//   this.draw = function() {
//       // Add any drawing functionality here, if needed.
//   };



// this.destroy = function() {
//     // Remove the canvas element from the DOM
//     const map= document.getElementById('map');
//     map.remove();
// };
// }


// }


//   431463e185f4a028f95c9adfcedb055a
// function Weather() {
//     // Name for the visualization to appear in the menu bar.
//     this.name = 'Weather';

//     // Each visualization must have a unique ID with no special characters.
//     this.id = 'weather';

//     // Preload the data. This function is called automatically by the gallery when a visualization is added.
//     this.preload = function() {};

//     var myMap;
//     var canvas;

//     var options = {
//       lat: 0,
//       lng: 0,
//       zoom: 4,
//     };

//     this.loaded = false;

//     this.setup = function() {
//       select('#stage').html("<div id='map'></div>");
//       canvas = createCanvas(1024, 576);
//       canvas.parent('map');

//       myMap = L.map('map').setView([options.lat, options.lng], options.zoom);
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(myMap);

//       myMap.on('click', this.onMapClick);
//       this.onMapChange();
//     };

//     this.destroy = function() {
//       select('#stage').html('<div id="map"></div>');
//       remove();
//     };

//     this.draw = function() {
//       // Draw the weather information on the map (if available)
//       if (this.loaded) {
//         // Draw something on the canvas (if needed)
//       }
//     };

//     this.onMapChange = function() {
//       clear();
//       fill(0);
//       // Draw something on the canvas (if needed)
//     };

//     this.onMapClick = function(e) {
//       const lat = e.latlng.lat;
//       const lon = e.latlng.lng;
//       this.getWeatherData(lat, lon);
//     };

//     this.getWeatherData = function(lat, lon) {
//       const apiKey = ' 431463e185f4a028f95c9adfcedb055a';
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           const temperature = data.main.temp;
//           const weatherDescription = data.weather[0].description;

//           // Create a weather icon based on the weather description
//           const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//           const weatherIcon = L.divIcon({
//             className: 'weather-icon',
//             html: `<img src="${weatherIconUrl}" alt="Weather Icon" width="50" height="50"><div>${weatherDescription}, Temperature: ${temperature}°C</div>`,
//             iconSize: [50, 70],
//           });

//           // Add the weather icon to the map at the clicked location
//           L.marker([lat, lon], { icon: weatherIcon }).addTo(myMap);
//         })
//         .catch((error) => console.error('Weather data request failed:', error));
//     };
//   }


// function Weather() {
//     // Name for the visualization to appear in the menu bar.
//     this.name = 'Weather';
  
//     // Each visualization must have a unique ID with no special characters.
//     this.id = 'weather';
  
//     // Preload the data. This function is called automatically by the gallery when a visualization is added.
//     this.preload = function() {};
  
//     var myMap;
//     var canvas;
  
//     var options = {
//       lat: 0,
//       lng: 0,
//       zoom: 4,
//     };
  
//     this.loaded = false;
  
//     this.setup = function() {
//       select('#stage').html("<div id='map'></div>");
//       canvas = createCanvas(1024, 576);
//       canvas.parent('map');
  
//       myMap = L.map('map').setView([options.lat, options.lng], options.zoom);
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(myMap);
  
//       myMap.on('click', (e) => this.onMapClick(e));
//       this.onMapChange();
//     };
  
//     this.destroy = function() {
//       select('#stage').html('<div id="map"></div>');
//       remove();
//     };
  
//     this.draw = function() {
//       // Draw the weather information on the map (if available)
//       if (this.loaded) {
//         // Draw something on the canvas (if needed)
//       }
//     };
  
//     this.onMapChange = function() {
//       clear();
//       fill(0);
//       // Draw something on the canvas (if needed)
//     };
  
//     this.onMapClick = function(e) {
//       const lat = e.latlng.lat;
//       const lon = e.latlng.lng;
//       this.getWeatherData(lat, lon);
//     };
  
//     this.getWeatherData = function(lat, lon) {
//       const apiKey = '431463e185f4a028f95c9adfcedb055a';
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           const temperature = data.main.temp;
//           const weatherDescription = data.weather[0].description;
  
//           // Create a weather icon based on the weather description
//           const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//           const weatherIcon = L.divIcon({
//             className: 'weather-icon',
//             html: `<img src="${weatherIconUrl}" alt="Weather Icon" width="50" height="50"><div>${weatherDescription}, Temperature: ${temperature}°C</div>`,
//             iconSize: [50, 70],
//           });
  
//           // Add the weather icon to the map at the clicked location
//           L.marker([lat, lon], { icon: weatherIcon }).addTo(myMap);
//         })
//         .catch((error) => console.error('Weather data request failed:', error));
//     };
//   }
  
  
// function Weather() {
//     // Name for the visualization to appear in the menu bar.
//     this.name = 'Weather';
  
//     // Each visualization must have a unique ID with no special characters.
//     this.id = 'weather';
  
//     // Preload the data. This function is called automatically by the gallery when a visualization is added.
//     this.preload = function() {};
  
//     var myMap;
//     var canvas;
//     var previousMarker = null;
  
//     var options = {
//       lat: 1,
//       lng: 35,
//       zoom: 1.3,
//     };
  
//     this.loaded = false;
  
//     this.setup = function() {
      
//       select('#stage').html("<div id='map'></div>");
//       canvas = createCanvas(1024, 576);
//       canvas.parent('map');
  
//       myMap = L.map('map').setView([options.lat, options.lng], options.zoom);
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(myMap);
  
//       myMap.on('click', (e) => this.onMapClick(e));
//       this.onMapChange();
//     };
  
//     this.destroy = function() {
//       select('#stage').html('<div id="map"></div>');
//       remove();
//     };
  
//     this.draw = function() {
//       // Draw the weather information on the map (if available)
//       if (this.loaded) {
//         // Draw something on the canvas (if needed)
//       }
//     };
  
//     this.onMapChange = function() {
//       clear();
//       fill(0);
//       // Draw something on the canvas (if needed)
//     };
  
//     this.onMapClick = function(e) {
//       const lat = e.latlng.lat;
//       const lon = e.latlng.lng;
  
//       // Remove the previous marker (if exists)
//       if (previousMarker) {
//         myMap.removeLayer(previousMarker);
//       }
  
//       this.getWeatherData(lat, lon, (weatherData) => {
//         const temperature = weatherData.main.temp;
//         const weatherDescription = weatherData.weather[0].description;
  
//         // Create a weather icon based on the weather description
//         const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
//         const weatherIcon = L.divIcon({
//           className: 'weather-icon',
//           html: `<img src="${weatherIconUrl}" alt="Weather Icon" width="50" height="50"><div>${weatherDescription}, Temperature: ${temperature}°C</div>`,
//           iconSize: [50, 70],
//         });
  
//         // Add the weather icon to the map at the clicked location
//         previousMarker = L.marker([lat, lon], { icon: weatherIcon }).addTo(myMap);
//       });
//     };
  
//     this.getWeatherData = function(lat, lon, callback) {
//       const apiKey = '431463e185f4a028f95c9adfcedb055a';
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           callback(data); // Pass the weather data to the callback function
//         })
//         .catch((error) => console.error('Weather data request failed:', error));
//     };
//     this.destroy = function() {
//         // Clear the map div and remove the Leaflet map
//         myMap.remove();
//         select('#stage').html('<div id="app"></div>');
      
//         // Recreate a new canvas for the other app
//         canvas = createCanvas(1024, 576);
//         canvas.parent('app');
//       };
      
//   }
  
/////

function Weather() {
  // Name for the visualization to appear in the menu bar.
  this.name = 'Weather';

  // Each visualization must have a unique ID with no special characters.
  this.id = 'weather';

  // Preload the data. This function is called automatically by the gallery when a visualization is added.
  this.preload = function() {};

  var myMap;
  var canvas;
  var previousMarker = null;

  var options = {
    lat: 1,
    lng: 35,
    zoom: 1.3,
  };

  this.loaded = false;

  this.setup = function() {
    // Clear the previous content of the stage div
    select('#stage').html('');
    //for text  header
    //first text
    const heading1 = createElement('h2', 'Weather Visualization');
    heading1.parent('stage');

    //second text
    const heading2 = createElement('h3', 'Click on the map to view weather information');
    heading2.parent('stage');

    // Create the map container
    const mapContainer = createDiv();
    mapContainer.id('map');
    mapContainer.parent('stage');

    // Create the Leaflet map
    myMap = L.map('map').setView([options.lat, options.lng], options.zoom);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(myMap);

    // Set up map event listeners
    myMap.on('click', (e) => this.onMapClick(e));
    this.onMapChange();
  };

  this.destroy = function() {
    // Clear the map div and remove the Leaflet map
    myMap.remove();
    select('#stage').html('<div id="app"></div>');

    // Recreate a new canvas for the other app
    canvas = createCanvas(1024, 576);
    canvas.parent('app');
  };

  this.draw = function() {
    // Draw the weather information on the map (if available)
    if (this.loaded) {
      // Draw something on the canvas (if needed)
    }
  };

  this.onMapChange = function() {
    clear();
    fill(0);
    // Draw something on the canvas (if needed)
  };

  this.onMapClick = function(e) {
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;

    // Remove the previous marker (if exists)
    if (previousMarker) {
      myMap.removeLayer(previousMarker);
    }

    this.getWeatherData(lat, lon, (weatherData) => {
      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;

      // Create a weather icon based on the weather description
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      const weatherIcon = L.divIcon({
        className: 'weather-icon',
        html: `<img src="${weatherIconUrl}" alt="Weather Icon" width="50" height="50"><div>${weatherDescription}, Temperature: ${temperature}°C</div>`,
        iconSize: [50, 70],
      });

      // Add the weather icon to the map at the clicked location
      previousMarker = L.marker([lat, lon], { icon: weatherIcon }).addTo(myMap);
    });
  };

  this.getWeatherData = function(lat, lon, callback) {
    const apiKey = '431463e185f4a028f95c9adfcedb055a';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        callback(data); // Pass the weather data to the callback function
      })
      .catch((error) => console.error('Weather data request failed:', error));
  };
}






