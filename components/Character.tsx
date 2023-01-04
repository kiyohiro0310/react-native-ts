import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

const Character = (props: {
    name: string;
    description: string;
    image_src: string;
}) => {
  const navigation = useNavigation()

  function pressHandler() {
    navigation.navigate("CharacterDetail" as never, {
      name: props.name
    } as never)
  }
  return (
    <Pressable style={styles.rootContainer} onPress={pressHandler}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.descriBox}>
          <View style={styles.description}>
            <Text style={{fontSize: 17, overflow: 'scroll'}}>{props.description}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: props.image_src}}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Character;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: 480,
    padding: 12,
  },
  infoContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#EEE1B1",
    flex: 1,
  },
  title: {
    fontSize: 32,
    padding: 12,
    fontWeight: 'bold'
  },
  descriBox: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    width: "60%",
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: "40%",
    height: 300,
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
