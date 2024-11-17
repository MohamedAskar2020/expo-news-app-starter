import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { NewsDataType } from "@/types";
import BreakingNews from "@/components/BreakingNews";
import { Colors } from "@/constants/Colors";

type Props = {};

const Page = (props: Props) => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=eg&language=ar,en&image=1&removeduplicate=1&size=5`;
      const response = await axios.get(URL);

      if (response && response.data) {
        setBreakingNews(response.data.results);
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: safeAreaTop }]}>
      <Header />
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator size={"large"} color={Colors.tint} />
      ) : (
        <BreakingNews newsList={breakingNews} />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
