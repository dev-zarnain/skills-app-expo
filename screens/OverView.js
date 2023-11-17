import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
const OverView = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 18 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <AntDesign name="clockcircleo" size={28} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: 16 }}>
              6 Hours
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <MaterialCommunityIcons
              name="certificate-outline"
              size={28}
              color="black"
            />
            <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: 16 }}>
              Completion Certificate
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Feather name="bar-chart" size={28} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: 16 }}>
              Beginner
            </Text>
          </View>
          <Text style={{ fontSize: 18, marginVertical: 8 }}>
            What will i learn ?
          </Text>
          <View>
            <Text style={{ fontSize: 12 }}>
              The Macine learning basics program is designed to offer a soli
              foundation & work-ready skills for ML engineers. The Macine
              learning basics program is designed to offer a soli foundation &
              work-ready skills for ML engineers.
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#0040E3", fontSize: 12 }}> Read More</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 18, marginVertical: 8 }}>
            Ratings and Reviews
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 28, marginVertical: 8 }}>3.4</Text>
            <View style={{ marginLeft: 12 }}>
              <View style={{ flexDirection: "row", marginBottom: 2 }}>
                <FontAwesome
                  style={{ marginRight: 4 }}
                  name="star"
                  size={12}
                  color="#FF9900"
                />
                <FontAwesome
                  style={{ marginRight: 4 }}
                  name="star"
                  size={12}
                  color="#FF9900"
                />
                <FontAwesome
                  style={{ marginRight: 4 }}
                  name="star"
                  size={12}
                  color="#FF9900"
                />
                <FontAwesome
                  style={{ marginRight: 4 }}
                  name="star"
                  size={12}
                  color="#C4C4C4"
                />
                <FontAwesome
                  style={{ marginRight: 4 }}
                  name="star"
                  size={12}
                  color="#C4C4C4"
                />
              </View>
              <Text style={{ fontSize: 12 }}>3 reviews</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 12,
              width: "75%",
              padding: 8,
              borderRadius: 8,
              backgroundColor: "#0113B9",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Start Learning
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OverView;

const styles = StyleSheet.create({});
