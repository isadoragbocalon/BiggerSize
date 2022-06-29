import { app, BrowserWindow } from 'electron';

 let browserWindow;

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


const criarBrowserWindow = () => {
  browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    autoHideMenuBar: true,
  });

  browserWindow.loadURL(`file://${__dirname}/components/home/home.html`);

  browserWindow.on('closed', () => {
    browserWindow = null;
    app.exit();
  });
};

app.on('ready', criarBrowserWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (browserWindow === null) {
    criarBrowserWindow();
  }
});
