import React, {useContext, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {useIsFocused} from "@react-navigation/native";

import {AntDesign} from "@expo/vector-icons";
import {blogContext as BlogContext} from "../context/BlogContext";

const IndexScreen = ({navigation}) => {
  const {blogPosts, getPost} = useContext(BlogContext);

  // use isFocused hook to check if the screen now has focus
  // if it is, then refresh data
  const isFocused = useIsFocused();
  useEffect(() => {
    // console.log("GetPosts");
    getPost();
  }, [isFocused]);
  return (
    <View>
      <Text>Index</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Show", {item})}
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
