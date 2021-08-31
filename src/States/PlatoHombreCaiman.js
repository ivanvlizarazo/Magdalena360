import { Surface, Module } from "react-360-web";


export default class PlatoHombreCaimanModule extends Module {
  back;
  back_id;

  constructor() {
    super("PlatoHombreCaimanModule"); // se genera con una key para qeu luego pueda quedar enlazada la clase u objeto
  }
  start(r360, detachComponents) {
    //para añadir o quitar cosas
    this.back = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.back.setAngle(0, 0); //se pone la coordenada donde se quiere poner el panel

    this.back_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "back",
        text: "Volver al inicio",
        marker:'15'
      }),

      this.back
    );

    for(const component of detachComponents){
        r360.detachRoot(component);
      }

    r360.compositor.setBackground(r360.getAssetURL("plato_hombre_caiman.jpg"));
  }

  resizepanel(width, height, id) {

    console.log('back: ',id)
    switch (id) {
      case "back":
        this.back.resize(width, height);
        break;
     
      default:
        this.back.resize(width, height);
        
        break;
    }
  }
}
