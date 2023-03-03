const {ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
    'comunicacion',{
        registrovalido:(datos)=>ipcRenderer.send('registroValido', datos)
    }
)

 