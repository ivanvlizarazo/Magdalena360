// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module } from "react-360-web";
import PlatoHombreCaimanModule from './src/States/PlatoHombreCaiman'
import AllPlacesModule from './src/Places/AllPlaces'

let r360;
let welcomePanelTag;
let AllPlaces = new AllPlacesModule()
let PlatoHombreCaiman = new PlatoHombreCaimanModule()
let currentModule;

function getIds(object) {
  /**
   * Función que recibe un objeto y retorna los id de este
   * @object {Object}
   * @return {array}
   */
  let array = [];
  Object.entries(object).map((item) => {
    //Se recorre cada uno de los items y si en su nombre contiene la cadena _id se extrae su valor asociado
    if (item[0].includes("_id")) {
      array.push(item[1]);
    }
  });
  return array;
}

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      // para añadir los nuevos módulos, se pueden poner cuantos querramos
      new appModule(),
      new PlatoHombreCaimanModule(),
      new AllPlacesModule()
    ],
    ...options,
  });

  //Se crea una nueva superficie para que no sea semicircular, sino plana, ya que getDefaultSurface es la que viene por defecto y no es plana
  const welcomePanel = new Surface(
    500, //width
    700, //height
    Surface.SurfaceShape.Flat // para poner un panel plano
  );

  welcomePanel.setAngle(0, 0); //se pone la coordenada donde se quiere poner el panel

  welcomePanelTag = r360.renderToSurface(
    r360.createRoot("welcomePanel", {
      /* initial props */
    }),
    welcomePanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("mapa.png"));
  // Backyard.start(r360,[])
}

class appModule extends Module {
  ids = [];
  constructor() {
    super("appModule"); // se genera con una key para qeu luego pueda quedar enlazada la clase u objeto
  }
  start() {
    AllPlaces.start(r360, this.ids); // se inicializa el objeto
    currentModule = AllPlaces.name; // se extrae el nombre del objeto
    this.ids = getIds(AllPlaces); // se extraen los id de los componentes del objeto para borrarlos

    r360.detachRoot(welcomePanelTag);
  }

  resizepanel(width, height, id) {
    if (currentModule === "AllPlacesModule") {
      AllPlaces.resizepanel(width, height, id);
    }
    if (currentModule === "PlatoHombreCaimanModule") {
      PlatoHombreCaiman.resizepanel(width, height, id);
    } 
    
  }

  changeBackGround(id) {
    switch (id) {
      case "Plato":
        PlatoHombreCaiman.start(r360, this.ids);
        currentModule = PlatoHombreCaimanModule.name;
        this.ids = getIds(PlatoHombreCaiman);
        break;
      
        case "back":
          AllPlaces.start(r360, this.ids);
          currentModule = AllPlacesModule.name;
          this.ids = getIds(AllPlaces);
          break;
      
      default:
        break;
    }
  }
}

window.React360 = { init };
