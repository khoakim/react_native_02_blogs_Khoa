import React, {useContext, useEffect, useState} from "react";
import {View, Text, TextInput, StyleSheet, Button} from "react-native";

import {blogContext as BlogContext} from "../context/BlogContext";

const EditScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const {updateBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>Title</Text>
      {/* <TextInput style={styles.item}>{item.title}</TextInput> */}
      <TextInput style={styles.item} onChangeText={setTitle} value={title} />
      <Text>Content</Text>
      <TextInput
        style={styles.item}
        onChangeText={setContent}
        value={content}
      />
      <Button
        title="Save"
        onPress={() => {
          updateBlogPost(item.id, title, content, () =>
            navigation.navigate("Index")
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
});

export default EditScreen;
