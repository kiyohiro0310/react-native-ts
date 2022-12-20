import React from "react";
import { Text, View, StyleSheet, Image, useWindowDimensions, Dimensions } from "react-native";
import Button from "./Button";

const Title = () => {
  const {width, height} = useWindowDimensions();

  return (
    <>
      <View style={styles.rootContainer}>
        <Image
          source={require("../assets/images/genshin_title.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginBottom: 12 }}
              >
                Welcome To Genshin
              </Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={{ width: "100%" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, harum architecto ullam neque, pariatur delectus
                repellendus illum vel.
              </Text>
            </View>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Title;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: deviceHeight > 380 ? "60%" : '30%',
  },
  textBox: {
    width: "70%",
    marginTop: 20,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 36,
    borderRadius: 20,
  },
  text: {
    width: "100%",
    opacity: 100,
    flexDirection: "column",
  },
});
