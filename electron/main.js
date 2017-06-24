const {app, Menu, Tray, remote} = require('electron');

const MONITORING_INTERVAL = 10 * 3600 * 1000;

let tray = null;

const mainWindow = require('./mainWindow');

require('electron-reload')(__dirname);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  let isMonitoring = false;
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Start Monitoring', type: 'checkbox', click: () => {
      isMonitoring = !isMonitoring;
      contextMenu.items[0].checked = isMonitoring;
      console.log(mainWindow.getWeb());
    }},
    {type: 'separator'},
    {label: 'Exit', click: () => {
      app.quit();
    }},
  ]);
  tray = new Tray('tray-icon.png');
  tray.setToolTip('Ticket Checker');
  tray.setContextMenu(contextMenu);
  mainWindow.createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    mainWindow.createWindow()
  }
});
