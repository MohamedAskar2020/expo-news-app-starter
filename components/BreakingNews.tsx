import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "@/components/SliderItem";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  const [data, setData] = useState(newsList);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();

    const handleOnScroll = useAnimatedScrollHandler ({
        onScroll: (e) => { 
             scrollX.value = e.contentOffset.x; 

        }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <Animated.FlatList
          ref={ref}
          data={data}
          keyExtractor={(_, index) => `list_item${index}`}
          renderItem={({ item, index }) => (
            <SliderItem sliderItem={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onScroll={handleOnScroll}
                  scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: Colors.black,
    marginLeft: 20,
  },
  slideWrapper: {
    // flexDirection: "row",
    // flex: 1,
    // width: "100%",
    justifyContent: "center",
  },
});
