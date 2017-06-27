const {BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const argv = require('yargs').argv;

require('dotenv').config();
let win;

exports.createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 650,
    minWidth: 800,
    maxWidth: 1050,
    minHeight: 310,
  });
  if (argv.dev === 'true'){
    win.loadURL(process.env.DEV_HOST);
    // Open the DevTools.
    win.webContents.openDevTools();
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }
  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
};