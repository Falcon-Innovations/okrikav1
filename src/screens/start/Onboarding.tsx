import { View, Text, Pressable, Image, ScrollView, Touchable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import { CustomButton } from "../../components";
import { ButtonType } from "../../components/buttons/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthStackParamList } from "../../navigation/AuthNavigation";


type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

const Onboarding = ({navigation}: Props) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#704f38", "#2f2118"]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1699753925/high-heels-black-velvet_do4rvo.jpg",
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              resizeMode: "contain",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
            resizeMode="contain"
          />

          <Image
            source={{
              uri: "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1699754573/fashion-shoes-sneakers_ctbl1h.jpg",
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={{
              uri: "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1699754360/front-view-couple-wearing-native-attire_ucxq3e.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={{
              uri: "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1699753916/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry_l0eezv.jpg",
            }}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text className="font-bold text-5xl text-grayOkrika-50">
            Let's Get
          </Text>
          <Text className="font-semibold text-4xl text-grayOkrika-50">
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text className="text-base my-2 text-grayOkrika-100">
              Connect to sell & buy 2nd hand items
            </Text>
            <Text className="text-base text-grayOkrika-100">
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          <View className="my-4">
          <CustomButton
            type={ButtonType.SOLID}
            onPress={() => navigation.navigate("Register")}
            bgColor="#fff"
            textColors="#8d7260"
            label="Get Started"
          />
          </View>

          <View className="flex flex-row items-center justify-center">
            <Text className="text-sm text-grayOkrika-100">
              Already have an account ?
            </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-xl ml-2 text-grayOkrika-100 font-bold underline">
                Login
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Onboarding;
