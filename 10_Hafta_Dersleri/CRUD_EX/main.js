const { app, BrowserWindow, Menu, MenuItem , globalShortcut} = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('chat_app.html')
}


app.whenReady().then(() => {
  createWindow()
  globalShortcut.register('Alt+Shift+U', () => {
    console.log('Electron loves global shortcuts!')
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})