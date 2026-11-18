# JSON_Payload_Logger_Middleware
# 1. Description
A simple web server created using Node.js and Express.js. It receives JSON data from users submitting feedback forms and logs the incoming JSON payload keys to the console using custom middleware.
# 2. Features
Runs on port 3000.
Uses Express.js framework.
Uses express.json() middleware to parse JSON data.
Custom middleware logs the keys of incoming JSON payloads.
Logs data for every POST request.
Displays a welcome message when the root URL (/) is visited.
Displays 404 Not Found for other routes.
# 3. Technologies Used
Node.js
Express.js
JavaScript

# 5. How to Run
Install Node.js.
Open the project folder in VS Code.
Open the terminal.
Install Express.js using:
6. Open http://localhost:3000/ in your browser.
# 6. Testing the Program
Send a POST request to:
http://localhost:3000/feedback
