import {
  Modal,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

const Profile = ({ navigation }) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ paddingHorizontal: 18, flex: 1 }}>
          <View
            style={{
              paddingVertical: 18,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={22} color="black" />
            </TouchableOpacity>
            <Text style={{ marginLeft: 12, fontSize: 18 }}>My Profile</Text>
          </View>
          <ScrollView>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginRight: 8,
                marginVertical: 12,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D2E4FF",
                width: 50,
                height: 50,
                borderRadius: 36,
              }}
            >
              <Text style={{ fontSize: 20 }}>Z</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 16 }}>Zarnain</Text>
              <Text style={{ fontSize: 10 }}>Zarnain@gmail.com</Text>
            </View>
          </View>
         

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <Feather name="user" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>
                Refer and learn
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <Feather name="link" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>
                Connected Accounts
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <FontAwesome name="star-o" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>Rate App</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <Feather name="share-2" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>Share App</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <Ionicons name="document-text-outline" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>
                Privacy Policy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 22,
              }}
            >
              <Feather name="log-out" size={24} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 16 }}>Sign out</Text>
            </View>
          </TouchableOpacity>

          <Modal
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => {
              setVisible(true);
            }}
            transparent={true}
          >
            <View
              style={{
                width: "60%",
                height: "20%",
                marginTop: "80%",
                marginLeft: "20%",
                borderRadius: "25%",
                backgroundColor: "#fff",
                borderColor: "#1E0394",
                borderWidth: 2,
                borderTopRightRadius: 1,
                borderBottomLeftRadius: 1,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#394345",
                shadowOffset: {
                  width: 12,
                  height: 12,
                },
                shadowOpacity: 0.28,
                shadowRadius: 7.84,
                elevation: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 12,
                }}
              >
                <TouchableOpacity>
                  <FontAwesome name="star-o" size={32} color="#1E0094" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="star-o" size={32} color="#1E0094" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="star-o" size={32} color="#1E0094" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="star-o" size={32} color="#1E0094" />
                </TouchableOpacity>
              </View>
              <Text style={{ color: "#1E0094", fontSize: 20, fontWeight: 600 }}>
                Rate Now
              </Text>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text
                  style={{
                    marginTop: 22,
                    color: "#1E0094",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Later
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
