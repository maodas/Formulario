const {app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        height:300,
        width:300
    })
0
    ventana.loadFile('index.html')
}
app.whenReady().then(createWindow)