import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Button from "./components/Button";
import Characters from "./components/Characters";
import Title from "./components/Title";

export default function App() {
  const ref = useRef<any>(null);

  function buttonHandler() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/background_genshin.jpeg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
      >
        <ScrollView>
            <Title />
            <Button>Scroll Down</Button>
            <Characters />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.85,
  },
});
