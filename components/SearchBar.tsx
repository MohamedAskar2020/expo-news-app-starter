import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={Colors.lightGrey} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={Colors.lightGrey}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
    color: Colors.darkGrey,
  },
});
