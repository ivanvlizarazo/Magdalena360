import { Surface, Module } from "react-360-web";

export default class AllPlacesModule extends Module {
  santaMarta;
  santaMarta_id;
  cienaga;
  cienaga_id;
  aracata;
  aracataca_id;
  zonaBananera;
  zonaBananera_id;
  puebloViejo;
  puebloViejo_id;
  sitioNuevo;
  sitioNuevo_id;
  fundacion;
  fundacion_id;
  algarrobo;
  algarrobo_id;
  salamina;
  salamina_id;
  plato;
  plato_id;
  ariguani;
  ariguani_id;
  sanSebastianDeBuenavista;
  sanSebastianDeBuenavista_id;
  guamal;
  guamal_id;
  elBanco;
  elBanco_id

  constructor() {
    super("AllPlacesModule"); // se genera con una key para qeu luego pueda quedar enlazada la clase u objeto
  }
  start(r360, detachComponents) {
    //para añadir o quitar cosas
    this.santaMarta = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.santaMarta.setAngle(0.19, 0.33); //se pone la coordenada donde se quiere poner el panel

    this.santaMarta_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "SantaMarta",
        text: "Da clic para conocer los sitios turísticos de Santa Marta",
        marker: "1",
      }),

      this.santaMarta
    );

    this.cienaga = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.cienaga.setAngle(0.14, 0.25); //se pone la coordenada donde se quiere poner el panel

    this.cienaga_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Cienaga",
        text: "Da clic para conocer los sitios turísticos de Ciénaga",
        marker: "2",
      }),

      this.cienaga
    );

    this.aracataca = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.aracataca.setAngle(0.2, 0.15); //se pone la coordenada donde se quiere poner el panel

    this.aracataca_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Aracataca",
        text: "Da clic para conocer los sitios turísticos de Aracataca",
        marker: "3",
      }),

      this.aracataca
    );

    this.zonaBananera = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.zonaBananera.setAngle(0.07, 0.21); //se pone la coordenada donde se quiere poner el panel

    this.zonaBananera_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "ZonaBananera",
        text: "Da clic para conocer los sitios turísticos de Zona Bananera",
        marker: "4",
      }),

      this.zonaBananera
    );

    this.puebloViejo = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.puebloViejo.setAngle(-0.01, 0.24); //se pone la coordenada donde se quiere poner el panel

    this.puebloViejo_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "PuebloViejo",
        text: "Da clic para conocer los sitios turísticos de Pueblo Viejo",
        marker: "5",
      }),

      this.puebloViejo
    );

    this.sitioNuevo = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.sitioNuevo.setAngle(-0.11, 0.23); //se pone la coordenada donde se quiere poner el panel

    this.sitioNuevo_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "SitioNuevo",
        text: "Da clic para conocer los sitios turísticos de Sitio Nuevo",
        marker: "6",
      }),

      this.sitioNuevo
    );

    this.fundacion = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.fundacion.setAngle(0.28, 0.12); //se pone la coordenada donde se quiere poner el panel

    this.fundacion_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Fundacion",
        text: "Da clic para conocer los sitios turísticos de Fundación",
        marker: "7",
      }),

      this.fundacion
    );

    this.algarrobo = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.algarrobo.setAngle(0.11, 0.03); //se pone la coordenada donde se quiere poner el panel

    this.algarrobo_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Algarrobo",
        text: "Da clic para conocer los sitios turísticos de Algarrobo",
        marker: "8",
      }),

      this.algarrobo
    );

    this.salamina = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );

    this.salamina.setAngle(-0.16, 0.125); //se pone la coordenada donde se quiere poner el panel

    this.salamina_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Salamina",
        text: "Da clic para conocer los sitios turísticos de Salamina",
        marker: "9",
      }),

      this.salamina
    );

    this.plato = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );
    this.plato.setAngle(-0.12, -0.14); //se pone la coordenada donde se quiere poner el panel

    this.plato_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Plato",
        text: "Da clic para conocer los sitios turísticos de Plato",
        marker: "10",
      }),

      this.plato
    );

    this.ariguani = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );
    this.ariguani.setAngle(0.1, -0.11); //se pone la coordenada donde se quiere poner el panel

    this.ariguani_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Ariguani",
        text: "Da clic para conocer los sitios turísticos de Ariguaní",
        marker: "11",
      }),

      this.ariguani
    );

    this.sanSebastianDeBuenavista = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );
    this.sanSebastianDeBuenavista.setAngle(0.09, -0.26); //se pone la coordenada donde se quiere poner el panel

    this.sanSebastianDeBuenavista_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "SanSebastianDeBuenavista",
        text: "Da clic para conocer los sitios turísticos de San Sebastian de BuenaVista",
        marker: "12",
      }),

      this.sanSebastianDeBuenavista
    );

    this.guamal = new Surface(
      100, //width
      100, //height
      Surface.SurfaceShape.Flat // para poner un panel plano
    );
    this.guamal.setAngle(0.07, -0.34); //se pone la coordenada donde se quiere poner el panel

    this.guamal_id = r360.renderToSurface(
      r360.createRoot("infoPanel", {
        id: "Guamal",
        text: "Da clic para conocer los sitios turísticos de Guamal",
        marker: "13",
      }),

      this.guamal
    );

    this.elBanco = new Surface(
        100, //width
        100, //height
        Surface.SurfaceShape.Flat // para poner un panel plano
      );
      this.elBanco.setAngle(0.16, -0.38); //se pone la coordenada donde se quiere poner el panel
  
      this.elBanco_id = r360.renderToSurface(
        r360.createRoot("infoPanel", {
          id: "ElBanco",
          text: "Da clic para conocer los sitios turísticos de El Banco",
          marker: "14",
        }),
  
        this.elBanco
      );

    for (const component of detachComponents) {
      r360.detachRoot(component);
    }

    r360.compositor.setBackground(r360.getAssetURL("mapa.png"));
  }

  resizepanel(width, height, id) {
    switch (id) {
      case "SantaMarta":
        this.santaMarta.resize(width, height);
        break;
      case "Cienaga":
        this.cienaga.resize(width, height);
        break;
      case "Aracataca":
        this.aracataca.resize(width, height);
        break;

      case "ZonaBananera":
        this.zonaBananera.resize(width, height);
        break;

      case "PuebloViejo":
        this.puebloViejo.resize(width, height);
        break;

      case "SitioNuevo":
        this.sitioNuevo.resize(width, height);
        break;

      case "Fundacion":
        this.fundacion.resize(width, height);
        break;

      case "Algarrobo":
        this.algarrobo.resize(width, height);
        break;
      case "Salamina":
        this.salamina.resize(width, height);
        break;

      case "Plato":
        this.plato.resize(width, height);
        break;

      case "Ariguani":
        this.ariguani.resize(width, height);
        break;

      case "SanSebastianDeBuenavista":
        this.sanSebastianDeBuenavista.resize(width, height);
        break;

      case "Guamal":
        this.guamal.resize(width, height);
        break;

        case "ElBanco":
            this.elBanco.resize(width, height);
            break;

      default:
        this.santaMarta.resize(width, height);
        this.santaMarta.setAngle(0.15, 0.37);

        this.cienaga.resize(width, height);
        this.cienaga.setAngle(0.1, 0.29);

        this.aracataca.resize(width, height);
        this.aracataca.setAngle(0.16, 0.19);

        this.zonaBananera.resize(width, height);
        this.zonaBananera.setAngle(0.03, 0.25);

        this.puebloViejo.resize(width, height);
        this.puebloViejo.setAngle(-0.05, 0.28);

        this.sitioNuevo.resize(width, height);
        this.sitioNuevo.setAngle(-0.15, 0.27);

        this.fundacion.resize(width, height);
        this.fundacion.setAngle(0.24, 0.16);

        this.algarrobo.resize(width, height);
        this.algarrobo.setAngle(0.07, 0.07);

        this.salamina.resize(width, height);
        this.salamina.setAngle(-0.2, 0.165);

        this.plato.resize(width, height);
        this.plato.setAngle(-0.16, -0.1);

        this.ariguani.resize(width, height);
        this.ariguani.setAngle(0.06, -0.07);

        this.sanSebastianDeBuenavista.resize(width, height);
        this.sanSebastianDeBuenavista.setAngle(0.05, -0.22);

        this.guamal.resize(width, height);
        this.guamal.setAngle(0.03, -0.3);

        this.elBanco.resize(width, height);
        this.elBanco.setAngle(0.12, -0.34);

        break;
    }
  }
}
