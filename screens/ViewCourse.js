import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import view from "../assets/view.png";
import OverView from "./OverView";
import Lectures from "./Lectures";
import Similar from "./Similar";

const course = {
  img: view,
  title: "Machine Learning",
  rating: 4.6,
  studentCount: 10.5,
};

const { img, title, rating, studentCount } = course;

const ViewCourse = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 18,
            paddingBottom: 12,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <Image style={{ width: "100%" }} source={img} />
        <View style={{ padding: 18 }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>{title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 12,
                marginVertical: 6,
                marginRight: 4,
              }}
            >
              {rating}
            </Text>
            <FontAwesome name="star" size={13} color="#FF9900" />
            <Text style={{ marginLeft: 18, fontWeight: 500, fontSize: 13 }}>
              {studentCount}k Learners
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <CourseTabs />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();

function CourseTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="OverView" component={OverView} />
      <Tab.Screen name="Lectures" component={Lectures} />
      <Tab.Screen name="Similar" component={Similar} />
    </Tab.Navigator>
  );
}

export default ViewCourse;

const styles = StyleSheet.create({});
