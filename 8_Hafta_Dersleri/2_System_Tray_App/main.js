const { app, BrowserWindow,Tray, Menu,MenuItem, nativeImage } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon : 'Tray.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}
const menu = new Menu()
menu.append(new MenuItem({
  label: 'Electron',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('Electron rocks!') }
  }]
}))
Menu.setApplicationMenu(menu)

let tray

app.whenReady().then(() => {
  createWindow()
  const iconPath = path.join(__dirname, 'system.png');
  const icon = nativeImage.createFromDataURL('images.png')
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Bir', type: 'checkbox'  },
    { label: "Alert", click:() => this.changeIconColor()},
    { label: 'ikinci', type: 'radio' },
    { label: 'Üçüncü', type: 'radio', checked: true },
    { label: 'Dördüncü', type: 'radio' },
    {label: 'Settings', click: function () {
         console.log("Clicked on settings")
      }},
    {label: 'Quit', type: 'normal', click: () => app.quit()}
  ])

  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

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