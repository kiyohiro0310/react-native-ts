import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Button from "./Button";
import Characters from "./Characters";
import Title from "./Title";

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/background_genshin.jpeg")}
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
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.85,
  },
});
