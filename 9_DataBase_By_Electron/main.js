const { app, BrowserWindow, Menu, MenuItem , globalShortcut,ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })
  win.loadFile('Giris.html')
}
const createWindowIndex = () => {
  // Create the browser window.
  const indexPenceresi = new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  indexPenceresi.loadFile('hoca_table.html')
}


ipcMain.on("indexPenceresiniAc", (event, arg) => {
  createWindowIndex()
}); 

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