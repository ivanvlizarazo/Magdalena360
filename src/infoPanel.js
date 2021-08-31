import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  VrButton,
  asset,
  NativeModules,
} from "react-360";

const appModule = NativeModules.appModule; //se llama por la key que se le puso a la clase en el coponente de client

export default class infoPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: {
        src: `marker${props.marker}.png`,
        width: 40,
        height: 40,
      },
      view: false,
    };
  }
  modifyPanel = (id) => {
    
    appModule.resizepanel(600, 600, id);
    this.setState({
      ...this.state,
      image: {
        ...this.state.image,
        src: `${id}.jpg`,
        width: 600,
        height: 300,
      },
      view:true
    });
  };

  resetPanel = (id, marker) => {
    appModule.resizepanel(40, 40, id);
    this.setState({
      ...this.state,
      image: {
        ...this.state.image,
        src: `marker${marker}.png`,
        width: 40,
        height: 40,
      },
      view: false,
    });
  };

  changeBackGround = (id) => {
    appModule.changeBackGround(id);
  };

  render() {
    const { image } = this.state;
    const { id, text } = this.props;

    return (
      <VrButton onClick={() => this.changeBackGround(id)}>
        <View
          style={styles.panel}
          hitSlop={500} //es la tasa de refresco para que no empieze a titilar cuando se ponga el mouse encima
          onEnter={() => this.modifyPanel(id)}
          onExit={() => this.resetPanel("info", this.props.marker)}
        >
          <Image
            source={asset(image.src)}
            style={{ width: image.width, height: image.height }}
          />
          {this.state.view && (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>{text}</Text>
            </View>
          )}
        </View>
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 60,
    height: 60,
    

    flexDirection: "column",
    
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 2,
    width: 600,
    
  },
  greeting: {
    fontSize: 30,
    color: "black",
    
  },
});
