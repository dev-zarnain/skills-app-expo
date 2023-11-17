import {
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const BlogCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        width: width - (width / 100) * 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginHorizontal: 12,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Image source={item.image} />
      <View
        style={{
          flex: 1,
          margin: 8,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: 700, color: "#555555" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.title}</Text>
        <Text style={{ fontSize: 8 }}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({});
