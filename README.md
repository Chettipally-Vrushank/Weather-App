# Weather-App
Simple Weather App
A clean and simple web application built with Node.js and Express that allows users to check the current weather and chance of rain for any city in the world. This project was created as a capstone project to demonstrate proficiency in server-side development, API integration, and frontend templating.

Technologies Used
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript templates), HTML5, CSS3

API Communication: Axios

Data Source: Open-Meteo API (for both Geocoding and Weather data)

Project Structure
The project follows a standard Node.js application structure:
<br>
weather-app/
<br>
├── public/
<br>
│   └── styles/
<br>
│       └── main.css      # All CSS styles
<br>
├── views/
<br>
│   └── index.ejs         # The main (and only) view for the user
<br>
├── index.js              # The main Express server file
<br>
├── package.json          # Project metadata and dependencies
<br>
└── README.md             # You are here!

API Credits
This project would not be possible without the free and open-source Open-Meteo API. It provides high-quality weather and geocoding data without requiring an API key.
