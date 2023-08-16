const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allow Node.js integration in your Vue components
      webSecurity: false
    }
  });

  mainWindow.loadFile('dist/index.html'); // Load your Vue app's HTML file
});