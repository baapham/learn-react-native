import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.itemData.item.id)}>
      <View style={styles.listItem}>
        <Text>{props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
