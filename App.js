import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

// SCREENS
import Home from "./screens/Home";
import Search from "./screens/Search";
import Course from "./screens/Course";
import Profile from "./screens/Proflle";
import Blog from "./screens/Blog";
import Category from "./screens/Category";
import ViewCourse from "./screens/ViewCourse";

import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MyTabs} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="ViewCourse" component={ViewCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#1E0094" : "#3F3F3F"}
            />
          ),
          tabBarInactiveTintColor: "#3F3F3F",
          tabBarActiveTintColor: "#1E0094",
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Course}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="play-circle"
              size={24}
              color={focused ? "#1E0094" : "#3F3F3F"}
            />
          ),
          title: "My Courses",
          tabBarInactiveTintColor: "#3F3F3F",
          tabBarActiveTintColor: "#1E0094",
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={Blog}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book-outline"
              size={24}
              color={focused ? "#1E0094" : "#3F3F3F"}
            />
          ),
          tabBarInactiveTintColor: "#3F3F3F",
          tabBarActiveTintColor: "#1E0094",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={focused ? "#1E0094" : "#3F3F3F"}
            />
          ),
          title: "My Profile",
          tabBarInactiveTintColor: "#3F3F3F",
          tabBarActiveTintColor: "#1E0094",
        }}
      />
    </Tab.Navigator>
  );
}
