const {app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        height:300,
        width:300
    })

    ventana.loadFile('index.htaml')
}
app.whenReady().then(createWindow)