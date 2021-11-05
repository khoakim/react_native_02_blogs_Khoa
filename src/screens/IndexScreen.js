import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import fetch from "../api/jsonServer";
import { AntDesign } from "@expo/vector-icons";
import { blogContext as BlogContext } from "../context/blogContext";

const IndexScreen = ({ navigation }) => {
  const { blogPosts, getPost } = useContext(BlogContext);
  useEffect(() => {
    console.log("GetPosts");
    getPost();
  }, []);
  return (
    <View>
      <Text>Index</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Show")}
              >
                <Text>{item.title} </Text>
              </TouchableOpacity>
              <AntDesign name="delete" style={styles.icon} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
  },
  item: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 1,

    flex: 1,
    justifyContent: "center",
  },
  icon: {
    fontSize: 24,
    color: "blue",
  },
});

export default IndexScreen;
