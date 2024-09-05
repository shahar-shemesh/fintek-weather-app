# WeatherApp

## Overview

![weather-app](https://github.com/user-attachments/assets/626ff371-3f2b-4c44-a1d7-7c5efe06c8c2)


WeatherApp is a Node.js-based application that provides users with real-time weather information for cities around the world. The application utilizes the WeatherAPI to fetch weather details, and it offers a user-friendly interface with features such as autocomplete city search, IP-based location detection, and comprehensive error handling. It is built using a modern frontend stack with Redux Toolkit for state management, and it is designed to be responsive across a variety of screen sizes, including mobile devices. The server follows an MVC (Model-View-Controller) architecture, making the application easy to maintain and extend.

## Directory Details

- **client/**: Contains the React code for the client-side.
  - **src/**: Source code for the client.
    - **components/**: React components, such as the search input and weather display.
    - **services/**: Services for interacting with the server and Redux Toolkit for state management.
    - **utils/**: Utility functions for frontend operations, such as formatting and validations.
  - **tests/**: Contains unit and integration tests for the client-side components.
  - **public/**: Static files.
  - **Dockerfile**: Dockerfile for building the client application.

- **server/**: Contains the Node.js code for the server-side.
  - **src/**: Source code for the server.
    - **controllers/**: Functions handling requests and interacting with services.
    - **models/**: Data models.
    - **routes/**: API route definitions.
    - **services/**: Services like WeatherAPI integration, IP detection, and timezone conversion.
    - **utils/**: Utility functions for backend operations, such as error handling.

- **.env**: Environment variables, including the WeatherAPI key.
- **package.json**: Project dependencies and scripts.

## Functionality

* **City Autocomplete**: As the user starts typing a city name, an autocomplete feature suggests matching cities, enhancing the user experience.
* **IP-Based Location Detection**: Upon the first launch, the application automatically displays the weather for the user's current location by fetching their IP address and determining their city.
* **Weather Details**: Displays temperature, humidity, wind speed, and weather conditions for the selected city. The information is updated based on the city searched or the user's IP.
* **Timezone Support**: Converts the weather report time to the user's local timezone based on the city searched using Moment.js.
* **Redux Toolkit**: State management is handled using Redux Toolkit, ensuring a scalable and maintainable structure for managing app-wide state.
* **Data Validation**: The application checks for various invalid inputs, such as:
  - **Empty Input**: If the user submits an empty city name, a message is displayed asking for valid input.
  - **Invalid City Name**: If the city entered does not exist, an error message prompts the user to try again.
* **Mobile-Friendly Design**: The application is fully responsive, ensuring compatibility with mobile devices and a wide range of screen sizes.
* **Error Handling**: The application handles errors gracefully, rendering friendly error messages without causing the app to crash.
* **Testing**: Includes unit and integration tests for key client-side components to ensure reliability.
* **MVC Architecture**: The server is structured following the MVC (Model-View-Controller) pattern, allowing for easy maintenance, flexibility in adding new features, and a clear separation of concerns.

## Requirements

### Client-side

1. **Technology**: Developed using React, Redux Toolkit, and Axios for API requests.
2. **Autocomplete**: Uses an autocomplete feature to assist users as they type city names.
3. **UI Design**: Styled using responsive CSS for mobile compatibility and optimized for various screen sizes.
4. **Features**:
   - **Search Bar with Autocomplete**: Users can search for cities, and suggestions are provided in real time.
   - **Weather Display**: Shows current weather details like temperature, humidity, and wind speed.
   - **IP-Based Weather on Initial Load**: When the user first opens the application, it automatically shows the weather for their current location based on their IP address.
   - **State Management**: Manages global state using Redux Toolkit, ensuring seamless state sharing across components.

### Server-side

1. **Technology**: Implemented using Node.js with Axios for API requests and Moment.js for timezone conversion.
2. **Database**: No persistent database is used, but future extensions could include storing user preferences or past weather queries.
3. **MVC Architecture**: Follows the MVC pattern for clean separation between the model (data), view (UI logic), and controller (business logic).
4. **Features**:
   - Fetches weather data using WeatherAPI.
   - Handles timezone conversions using Moment.js to display the correct local time for each city.
   - Performs input validation to handle empty city names or invalid city searches.
   - Uses the user's IP address to fetch the weather for their current location on the initial load.

### Utility Functions

- **getUserIP**: Detects the user's IP address to provide location-based weather information on the initial app load.
- **getWeatherData**: Fetches and processes weather data based on the city input.
- **Timezone Conversion**: Converts times to the user's local timezone using Moment.js and displays them appropriately.

## Installation and Setup

To begin, ensure that Node.js is installed on your system.

Follow these steps:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/shahar-shemesh/fintek-weather-app.git
    ```

2. Install Backend Dependencies: navigate to the `fintek-weather-app/server` directory and install the necessary dependencies:
    ```bash
    cd fintek-weather-app/server
    npm install
    ```
    
3. Install Frontend Dependencies: navigate to the `fintek-weather-app/client` directory and install the necessary dependencies:
    ```bash
    cd fintek-weather-app/client
    npm install
    ```

4. Start both the server and client:
   - Start the server:
   ```bash
    cd fintek-weather-app/server
    npm start
    ```
   
    - Open a new terminal, and start the client application:
   ```bash
    cd fintek-weather-app/client
    npm start
    ```

5. Access the Application:
    - The frontend will be available at `http://localhost:3000`
    - The backend will be available at `http://localhost:4000`

Make sure that both the server and client are running simultaneously.



## Usage

1. Open the application in your browser.
2. Start typing a city name in the search bar, and the autocomplete will suggest matching cities.
3. Select a city, and the weather data for that city will be displayed.
4. If the input is invalid, the application will display an appropriate error message.
5. On the initial load, the weather for the user's current location (based on their IP) will be shown.

## Error Handling

The application includes robust error handling for:
- **Empty Input**: If the user submits an empty city name, the application will display a message prompting the user to enter a valid city name.
- **Invalid City Name**: If the user enters a city that doesn't exist, the application will show an error message like "City not found. Please enter a valid city name."

## Contributing

- Fork the repository and submit a pull request with a description of your changes.
- Follow best practices for commit messages and use branches if necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
