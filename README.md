# React VNC Web App

This is a React web application that allows you to connect to a VNC server and view its content within the browser window. You can use this app to remotely access and control a VNC server.

## Installation

Before running the application, make sure you have Node.js and npm installed on your system. Follow these steps to set up and run the app:

1. Clone the repository:

   ```bash
   git clone https://github.com/ismaeleBo/rpi-vnc.git
   cd rpi-vnc
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the VNC server URL:
   - Open the `.env` file and set the `REACT_APP_VNC_URL` variable to the URL of your VNC server.

4. Start the application:

   ```bash
   npm start
   ```

The React VNC Web App will run locally, and you can access it in your browser at `http://localhost:3000`.

## Usage

1. Upon launching the app, you will be presented with the main screen.

2. Enter the VNC server password in the password input field.

3. Click the "Connect" button to establish a connection to the VNC server.

4. If the connection is successful, you will see the VNC server content displayed within the browser window.

5. You can use the VNC server as if it were running directly on your computer.

6. To disconnect from the VNC server, click the "Disconnect" button.

## Features

- **Connection Modal**: If you attempt to connect without entering a password, a connection modal will prompt you to enter the password.

- **Error Handling**: If there are connection errors or invalid credentials, an error message will be displayed, allowing you to retry the connection.

- **Security**: The app ensures secure VNC connections by using the provided password.

- **Responsive**: The VNC content is displayed within the browser window and scales to fit the viewport.

## Customization

You can customize the appearance and behavior of the app by modifying the React components and styles in the code provided in `App.js` and `App.css`.

## Contributions

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a branch for your work:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your code changes and improvements.
4. Commit your changes with clear descriptions:

   ```bash
   git commit -m "Added new features"
   ```

5. Push your changes to your fork:

   ```bash
   git push origin feature/new-feature
   ```

6. Open a pull request on the main repository.

## Bug Reporting

If you encounter any bugs while using the app or have suggestions for improvements, please open an issue on GitHub with detailed information about the problem.

## License

This React VNC Web App is open-source and distributed under the MIT License. See the [LICENSE] file for more details.

Enjoy using the React VNC Web App to remotely access and control your VNC servers from your browser!
