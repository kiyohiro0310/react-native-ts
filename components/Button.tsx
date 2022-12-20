import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Button = (props: {
  children: React.ReactNode;
}) => {
  function pressFunc() {
    return scrollTo({ top: 0 });
  }
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressedButton]
            : styles.buttonContainer
        }
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 12,
    textAlign: "center",
    backgroundColor: "#02A6EC",
    width: 200,
    borderRadius: 5,
    marginTop: 157,
  },
  pressedButton: {
    opacity: 0.8,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
