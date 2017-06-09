const {BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

exports.createWindow = () => {
  win = new BrowserWindow({
      width: 500,
      height: 650,
      minWidth: 350,
      maxWidth: 650,
      minHeight: 310,
    });
    // Open the DevTools.
    win.webContents.openDevTools();

    win.loadURL(`file://${__dirname}/renderer/main.html`);

    // Emitted when the window is closed.
    win.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
    })
};