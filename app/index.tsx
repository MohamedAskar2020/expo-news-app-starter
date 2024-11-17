import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("@/assets/images/getting-started.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <Animated.Text
            style={styles.titleText}
            entering={FadeInRight.delay(300).duration(500)}
          >
            Stay Updated!
          </Animated.Text>
          <Animated.Text
            style={styles.discription}
            entering={FadeInRight.delay(700).duration(500)}
          >
            Get breaking news and personalized updates directly to your feed.
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  wrapper: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.white,
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 16,
  },
  discription: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: "center",
  },
  btn: {
    backgroundColor: Colors.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.white,
    // letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: "center",
  },
});
