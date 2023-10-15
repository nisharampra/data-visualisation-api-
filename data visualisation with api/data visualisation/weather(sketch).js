let weatherVisualization;

function setup() {
    const canvas = createCanvas(1024, 576); // Create a canvas
    canvas.parent('app'); // Set the canvas parent to 'app' div

    weatherVisualization = new Weather(); // Create a new instance of Weather visualization
    weatherVisualization.setup(); // Call the setup() function to initialize the Weather visualization

    // Call toggleWeather to show/hide the Weather visualization initially
    toggleWeather();
}

function draw() {
    // Add any common drawing functionality here, if needed.
    // This draw() function will be called for all visualizations.
    background(220);
}

// Function to toggle the Weather visualization
function toggleWeather() {
    if (weatherVisualization) {
        if (weatherVisualization.visible) { // Check if the Weather visualization is currently visible
            weatherVisualization.destroy(); // Call the destroy() function to hide it
        } else {
            weatherVisualization.create(); // Call the create() function to show it
        }
    }
}
