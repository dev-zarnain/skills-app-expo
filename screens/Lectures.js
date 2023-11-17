import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
const lesson = [
  {
    heading: "lesson 1",
    title: "Introduction",
  },

  {
    heading: "lesson 2",
    title: "Data Preprocessing",
    videos: [
      {
        title: "Sub lecture 1",
      },
      {
        title: "Sub lecture 2",
      },
      {
        title: "Sub lecture 3",
      },
      {
        title: "Sub lecture 4",
      },
    ],
  },

  {
    heading: "lesson 3",
    title: "Text Mining",
  },

  {
    heading: "lesson 4",
    title: "Practice Projects",
  },
];

const Lectures = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={lesson}
        contentContainerStyle={{ paddingBottom: 18 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ padding: 18 }}>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                padding: 12,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 4,
                  height: 1,
                },
                shadowOpacity: 0.15,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  {item.heading}
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={28}
                  color="black"
                />
              </View>
              <Text style={{ marginBottom: 4, fontSize: 18, fontWeight: 500 }}>
                {item.title}
              </Text>
              <FlatList
                data={item.videos}
                contentContainerStyle={{ paddingBottom: 18 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: video }) => (
                  <View
                    style={{
                      marginTop: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="md-play-circle-outline"
                      size={20}
                      color="black"
                    />
                    <Text style={{ marginLeft: 4, fontSize: 12 }}>
                      {video.title}
                    </Text>
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Lectures;

const styles = StyleSheet.create({});
