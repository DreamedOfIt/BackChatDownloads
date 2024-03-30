const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 530,
        height: 730,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + '/icon.png',
        resizable: false,
        title: "Backchat Desktop v2.0.0",
    });

    win.setMenuBarVisibility(false);

    win.loadURL('https://backchat.social');
    win.webContents.on('dom-ready', () => {
        win.webContents.executeJavaScript(`
            const downloadFooter = document.querySelector('download-footer');
            if (downloadFooter) {
                downloadFooter.remove();
            }
        `);
    });
}

app.whenReady().then(createWindow);
