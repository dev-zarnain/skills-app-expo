import {
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import cyber1 from "../assets/cyber1.png";
import cyber2 from "../assets/cyber2.png";
import cyber3 from "../assets/cyber3.png";
import cyber4 from "../assets/cyber4.png";
import cyber5 from "../assets/cyber5.png";
import cyber6 from "../assets/cyber6.png";

const categories = [
  {
    title: "Machine Learning",
    rating: 1.5,
    studentCount: 10.1,
    img: cyber1,
  },
  {
    title: "Getting Started with ML",
    rating: 2.5,
    studentCount: 10.2,
    img: cyber2,
  },
  {
    title: "Introduction to Machine Learning",
    rating: 3.5,
    studentCount: 10.3,
    img: cyber3,
  },
  {
    title: "PG in Machine Learning",
    rating: 4.5,
    studentCount: 10.4,
    img: cyber4,
  },
  {
    title: "Machine Learning",
    rating: 5.5,
    studentCount: 10.5,
    img: cyber5,
  },
  {
    title: "Machine Learning Course",
    rating: 6.5,
    studentCount: 10.6,
    img: cyber6,
  },
];
const Similar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 18 }}
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
              }}
            >
              <View style={{ width: "69%" }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 12,
                      marginVertical: 6,
                    }}
                  >
                    {item.rating}
                  </Text>
                  <FontAwesome name="star" size={13} color="#FF9900" />
                </View>
                <Text style={{ fontWeight: 500, fontSize: 13 }}>
                  {item.studentCount}k Learners
                </Text>
              </View>
              <Image source={item.img} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Similar;

const styles = StyleSheet.create({});
