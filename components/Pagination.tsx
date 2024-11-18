import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import Animated, { SharedValue } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

type Props = {
  items: NewsDataType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
    const numberOfDots = items.length;
  return (
    <View style={styles.container}>
      {items.map((_, index) => (
        <Animated.View
          style={[
            styles.dot,
            {
              backgroundColor:
                index === paginationIndex ? Colors.tint : Colors.darkGrey,
            },
          ]}
          key={index}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 2,
    backgroundColor: "#333",
  },
});
