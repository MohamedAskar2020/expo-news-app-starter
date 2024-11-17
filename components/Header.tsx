import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
          style={styles.userImage}
        />
        <View style={{ gap: 3 }}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 30,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.darkGrey,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.black,
  },
});
