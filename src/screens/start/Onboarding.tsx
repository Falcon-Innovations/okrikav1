import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../navigation/AuthNavigation";
import { onboardingSlides } from "../../data/localData";
import { COLORS } from "../../constants/styles";

type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: Props) => {
  type Item = (typeof onboardingSlides)[0];

  const renderSlide = ({ item }: { item: any }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.description}</Text>
    </View>
  );

  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Get Started</Text>
      </View>
    );
  };

  const keyExtractor = (item: Item) => item.title;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderSlide}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={onboardingSlides}
        bottomButton
        onDone={() => navigation.replace("Login")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "80%",
    height: Dimensions.get("window").width * 0.7,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: COLORS.gray.gray_500,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  skipButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary.primary_500,
  },
  nextButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary.primary_500,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginTop: 10,
  },
  nextButtonText: {
    fontSize: 14,
    color: COLORS.primary.primary_50,
    fontWeight: "700",
  },
  dotStyle: {
    backgroundColor: COLORS.primary.primary_100,
  },
  activeDotStyle: {
    backgroundColor: COLORS.primary.primary_500,
  },
});

export default Onboarding;
