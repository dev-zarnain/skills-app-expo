import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import cyberSecurity from "../assets/security.png";
import dataScience from "../assets/cloud.png";
import laptopImg from "../assets/laptop.png";
import machineImg from "../assets/machine.png";
import starIcon from "../assets/star.png";
import popularImg1 from "../assets/popular1.png";
import popularImg2 from "../assets/popular2.png";
import CategoryCard from "../components/CategoryCard";
import CourseCard from "../components/CourseCard";
import BlogCard from "../components/BlogCard";

const categories = [
  { id: 1, title: "Cyber Security", courseCount: 145, image: cyberSecurity },
  { id: 2, title: "Data Science", courseCount: 120, image: dataScience },
  { id: 3, title: "Cyber Security", courseCount: 145, image: cyberSecurity },
];
const courses = [
  {
    image1: laptopImg,
    title: "Data Science",
    rating: 4.6,
    studentCount: "10.5k",
    image2: starIcon,
  },
  {
    image1: machineImg,
    title: "Machine Learning",
    rating: 4.2,
    studentCount: "11.1k",
    image2: starIcon,
  },
];

const blogs = [
  {
    image: popularImg1,
    name: "Rian Mendella",
    title: "How to improve Microsoft Excel Skills",
    desc: "Most people know the power Excel can wield, especially when used properly. But fewer people know how to make the most of Excel...",
  },
  {
    image: popularImg2,
    name: "Liza Nisel",
    title: "Top 10 Java Tools for 2021",
    desc: "Java is the most widely used high level object oriented programming language across the globe. Oracle Corporation purchased SUN MiCROSYSTEM in 2010...",
  },
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          paddingVertical: 18,
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Hello Zarnain!</Text>
        <TouchableOpacity
          onPress={() => navigation.getParent().navigate("Search")}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#1E0094", "#2D05CE"]}
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 86,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 24,
            overflow: "hidden",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Secure the Online World
            </Text>
            <Text style={{ paddingVertical: 8, color: "white" }}>
              Lets get you started with Cyber Security
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 4,
                marginVertical: 10,
                borderRadius: 16,
                backgroundColor: "white",
                width: "60%",
              }}
            >
              <Text>Enroll for free</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{ width: 130 }}
            source={require("../assets/Group.png")}
          />
        </LinearGradient>
        <View>
          <Text
            style={{
              marginLeft: 12,
              fontWeight: 600,
              fontSize: 18,
              marginTop: 18,
            }}
          >
            Categories
          </Text>
          <FlatList
            style={{ paddingVertical: 14, paddingLeft: 2 }}
            showsHorizontalScrollIndicator={false}
            data={categories}
            horizontal
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onPress={() => navigation.navigate("Category", { id: item.id })}
              />
            )}
          />
          <Text
            style={{
              marginLeft: 12,
              fontWeight: 600,
              fontSize: 18,
              marginTop: 22,
            }}
          >
            Top Courses
          </Text>
          <FlatList
            style={{ paddingVertical: 14, paddingLeft: 4 }}
            showsHorizontalScrollIndicator={false}
            data={courses}
            horizontal
            renderItem={({ item }) => (
              <CourseCard
                item={item}
                onPress={() => navigation.navigate("Course", { id: item.id })}
              />
            )}
          />
          <Text
            style={{
              marginLeft: 12,
              fontWeight: 600,
              fontSize: 18,
              marginTop: 22,
            }}
          >
            Popular Blogs
          </Text>
          <FlatList
            style={{ paddingVertical: 14, paddingLeft: 4 }}
            showsHorizontalScrollIndicator={false}
            data={blogs}
            horizontal
            renderItem={({ item }) => <BlogCard item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
