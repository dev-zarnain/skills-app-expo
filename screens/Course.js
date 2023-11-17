import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";

const myCourses = [
  {
    title: "Machine Learning",
    desc: "The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers...",
    hours: 2,
    percentage: 40,
  },
  {
    title: "Data Science",
    desc: "Most people know the power Excel can wield, especially when used properly. But fewer people know how to make...",
    hours: 4,
    percentage: 60,
  },
];

const Course = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingVertical: 18,
          flexDirection: "row",
          alignItem: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>My Course</Text>
        <TouchableOpacity
          onPress={() => navigation.getParent().navigate("Search")}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {false ? (
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ marginVertical: 34 }}
            source={require("../assets/empty.png")}
          />
          <Text style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
            No Course
          </Text>
          <Text
            style={{
              marginBottom: 85,
              paddingHorizontal: 55,
              textAlign: "center",
            }}
          >
            Looks like you have not enrolled for any course yet
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#1E0094",
              borderRadius: 6,
              paddingHorizontal: 14,
              paddingVertical: 8,
            }}
          >
            <Text style={{ color: "white" }}>Explore Courses</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={myCourses}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 12,
                  backgroundColor: "white",
                  margin: 24,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 0.13,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    padding: 22,
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 12, marginVertical: 10 }}>
                      {item.desc}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign name="clockcircleo" size={12} color="black" />
                      <Text style={{ fontSize: 10, marginLeft: 8 }}>
                        {item.hours}hours left
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 24, marginTop: 28 }}>
                    <ProgressCircle
                      percent={item.percentage}
                      radius={34}
                      borderWidth={5}
                      color="#00C108"
                      shadowColor="#fff"
                      bgColor="#fff"
                    >
                      <Text>{item.percentage}%</Text>
                    </ProgressCircle>
                  </View>
                </View>
                <View style={{ borderTopWidth: 1 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ViewCourse")}
                    style={{ alignSelf: "center" }}
                  >
                    <Text
                      style={{
                        marginVertical: 8,
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#0113B9",
                      }}
                    >
                      Start Learning
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Course;

const styles = StyleSheet.create({});
