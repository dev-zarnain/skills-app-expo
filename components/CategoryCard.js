import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: 14,
        flexDirection: "row",
        borderRadius: 12,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View style={{ marginRight: 18 }}>
        <Text style={{ fontSize: 16, fontWeight: 600, marginVertical: 4 }}>
          {item.title}
        </Text>
        <Text>{item.courseCount} Courses</Text>
      </View>
      <Image source={item.image} />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
