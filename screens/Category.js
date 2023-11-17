import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import cyber1 from "../assets/cyber1.png";
import cyber2 from "../assets/cyber2.png";
import cyber3 from "../assets/cyber3.png";
import cyber4 from "../assets/cyber4.png";
import cyber5 from "../assets/cyber5.png";
import cyber6 from "../assets/cyber6.png";
import cyber7 from "../assets/cyber7.png";
import cyber8 from "../assets/cyber8.png";

const categories = [
  {
    title: "Cyber Security",
    rating: 1.5,
    studentCount: 10.1,
    img: cyber1,
  },
  {
    title: "Ethica hacking",
    rating: 2.5,
    studentCount: 10.2,
    img: cyber2,
  },
  {
    title: "Introduction to Cyber Security",
    rating: 3.5,
    studentCount: 10.3,
    img: cyber3,
  },
  {
    title: "Introduction to cyber crime",
    rating: 4.5,
    studentCount: 10.4,
    img: cyber4,
  },
  {
    title: "Introduction to cryptography",
    rating: 5.5,
    studentCount: 10.5,
    img: cyber5,
  },
  {
    title: "CISSP",
    rating: 6.5,
    studentCount: 10.6,
    img: cyber6,
  },
  {
    title: "Introduction to CISSP",
    rating: 7.5,
    studentCount: 10.7,
    img: cyber7,
  },
  {
    title: "Cyber Crime",
    rating: 8.5,
    studentCount: 10.8,
    img: cyber8,
  },
];

const Category = ({ navigation, route }) => {
  const id = route.params.id;
  console.log({ route });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 22, flex: 1, paddingBottom: 24 }}>
        <View
          style={{
            paddingVertical: 18,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={22} color="black" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: 500 }}>
            Cyber Security
          </Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 18 }}
            showsVerticalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 8,
                }}
              >
                <View style={{ width: "69%" }}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>
                    {item.title}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        marginVertical: 6,
                        color: "#808080",
                      }}
                    >
                      {item.rating}
                    </Text>
                    <FontAwesome name="star" size={13} color="#FF9900" />
                  </View>
                  <Text
                    style={{ fontWeight: 500, fontSize: 13, color: "#808080" }}
                  >
                    {item.studentCount}k Learners
                  </Text>
                </View>
                <Image source={item.img} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({});
