import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CourseCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        marginHorizontal: 12,
        paddingBottom: 8,
        borderRadius: 12,
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
      <Image source={item.image1} />
      <View style={{ padding: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
          {item.title}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingLeft: 2 }}
        >
          <Text style={{ fontSize: 12, fontWeight: 700, marginRight: 2 }}>
            {item.rating}
          </Text>
          <Image style={{ width: 10, height: 12 }} source={item.image2} />
          <Text style={{ marginLeft: 18 }}>{item.studentCount} Learners</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;

const styles = StyleSheet.create({});
