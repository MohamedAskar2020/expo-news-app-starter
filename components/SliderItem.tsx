import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import { SharedValue } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

type Props = {
  sliderItem: NewsDataType;
  index: number;
  scrollX: SharedValue<number>;
};

const width = Dimensions.get("screen").width;

const SliderItem = ({ sliderItem, index, scrollX }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: sliderItem.image_url }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      >
        <View style={styles.sourceInfo}>
          {sliderItem.source_icon && (
            <Image
              source={{ uri: sliderItem.source_icon }}
              style={styles.sourceIcon}
            />
          )}
          <Text style={styles.sourceName}>{sliderItem.source_name}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {sliderItem.title}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
  },
  image: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
    // resizeMode: "cover",
    // marginBottom: 10,
    // paddingHorizontal: 20,
  },
  gradient: {
    width: width - 60,
    height: 180,
    position: "absolute",
    top: 0,
    left: 30,
    right: 0,
    borderRadius: 20,
    padding: 20,
  },
  sourceInfo: {
    flexDirection: "row",
    position: "absolute",
    top: 85,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
  sourceIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  sourceName: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
    position: "absolute",
    top: 120,
    paddingHorizontal: 20,
  },
});
