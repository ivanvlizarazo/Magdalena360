import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  NativeModules,
} from "react-360";

const appModule = NativeModules.appModule; //se llama por la key que se le puso a la clase en el coponente de client
export default class welcomePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        src: "welcome.png",
        width: 500,
        height: 500,
      },
    };
  }
  render() {
    const { image } = this.state;
    return (
      <View style={styles.panel}>
        <Image
          source={asset(image.src)}
          style={{ width: image.width, height: image.height }}
        />
        <View style={styles.greetingBox}>
          <VrButton onClick={() => appModule.start()}>
            <Text style={styles.greeting}>
              Bienvenido al departamento de Magdalena. Da click aquí para conocer más de sus municipios
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 500,
    height: 700,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 2,
    width: 500,
  },
  greeting: {
    fontSize: 30,
    color: "black",
  },
});
