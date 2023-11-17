import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";

const blogs = [
  {
    img: blog1,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 34,
    date: "20 jan 2020",
  },
  {
    img: blog2,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 32,
    date: "21 feb 2023",
  },
  {
    img: blog3,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 25,
    date: "20 march 2022",
  },
  {
    img: blog4,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 21,
    date: "20 april 2021",
  },
  {
    img: blog5,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 22,
    date: "20 may 2017",
  },
  {
    img: blog6,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 26,
    date: "20 june 2018",
  },
  {
    img: blog7,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 28,
    date: "20 july 2019",
  },
  {
    img: blog8,
    name: "Data Science",
    title: "How to improve Excel Skills",
    price: 30,
    date: "20 dec 2023",
  },
];

const Blog = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          paddingVertical: 18,
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 16 }}>Blogs</Text>
        <TouchableOpacity
          onPress={() => navigation.getParent().navigate("Search")}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 12 }}
          data={blogs}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                margin: 4,
                padding: 10,
                width: "48%",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: 7,
                  height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Image
                style={{
                  width: "113.4%",
                  position: "relative",
                  left: -10,
                  top: -10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRadius: 12,
                }}
                source={item.img}
              />
              <Text>{item.name}</Text>
              <Text style={{ fontWeight: 600 }}>{item.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="eye-outline" size={11} color="black" />
                  <Text
                    style={{ marginBottom: 2, marginLeft: 4, fontSize: 11 }}
                  >
                    {item.price}k
                  </Text>
                </View>
                <Text style={{ fontSize: 11 }}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Blog;

const styles = StyleSheet.create({});
