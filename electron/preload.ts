import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // Définis ici les fonctions sécurisées exposées au rendu
});
