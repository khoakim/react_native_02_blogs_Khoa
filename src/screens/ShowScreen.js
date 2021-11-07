import React, {useLayoutEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
const ShowScreen = ({route, navigation}) => {
  const {item} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Edit", {item})}
          title="Edit item"
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Title</Text>
      <Text style={styles.item}>{item.title}</Text>
      <Text>Content</Text>
      <Text style={styles.item}>{item.content}</Text>
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

export default ShowScreen;
