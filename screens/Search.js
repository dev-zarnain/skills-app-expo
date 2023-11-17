import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import cyber1 from "../assets/cyber1.png";
import cyber2 from "../assets/cyber2.png";
import cyber3 from "../assets/cyber3.png";
import cyber6 from "../assets/cyber6.png";
import cyber7 from "../assets/cyber7.png";
import cyber8 from "../assets/cyber8.png";

const tags = [
  {
    name: "Cyber Secutiry",
  },
  {
    name: "Data Science",
  },
  {
    name: "Java",
  },
  {
    name: "React Js",
  },
  {
    name: "DevOps",
  },
  {
    name: "Machine Learning",
  },
];

const machineLearning = [
  {
    title: "Machine Learning",
    rating: 1.5,
    studentCount: 10.1,
    img: cyber1,
  },
  {
    title: "Getting Started with ML",
    rating: 1.5,
    studentCount: 10.2,
    img: cyber2,
  },
  {
    title: "Introduction to Machine Learning",
    rating: 1.5,
    studentCount: 10.3,
    img: cyber3,
  },
  {
    title: "PG in Machine Learning",
    rating: 1.5,
    studentCount: 10.4,
    img: cyber7,
  },
  {
    title: "Machine Learning",
    rating: 1.5,
    studentCount: 10.5,
    img: cyber8,
  },
  {
    title: "Machine Learning Course",
    rating: 1.5,
    studentCount: 10.6,
    img: cyber6,
  },
];

const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          alignItems: "center",
          marginVertical: 8,
          marginHorizontal: 22,
          width: "88%",
          borderRadius: 8,
          backgroundColor: "#F3F3F3",
          paddingVertical: 12,
          paddingRight: 12,
          paddingLeft: 4,
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={22} color="black" />
        </TouchableOpacity>
        <TextInput
          style={{ marginLeft: 4, fontSize: 16, width: "85%", height: "100%" }}
          placeholder={"type here"}
        />
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {false ? (
        <View style={{ marginLeft: 22, flex: 1 }}>
          <Text style={{ marginVertical: 12, fontSize: 18, fontWeight: 600 }}>
            Popular Tags
          </Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={tags}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    marginVertical: 6,
                    marginHorizontal: 2,
                    borderRadius: 8,
                    backgroundColor: "#D2E4FF",
                    fontSize: 18,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      ) : (
        <View style={{ padding: 12, flex: 1 }}>
          <View>
            <FlatList
              contentContainerStyle={{ paddingBottom: 18 }}
              showsVerticalScrollIndicator={false}
              data={machineLearning}
              renderItem={({ item }) => (
                <TouchableOpacity
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
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
