import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import NotifyIcon from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { COLORS, SIZES } from "../../constants/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Searchbar } from "react-native-paper";
import HomeCarousel from "./HomeCarousel";
import { carouselData, categories } from "../../data/localData";
import Categories from "./Categories";

const HomeScreen = () => {
  const [search, setSearch] = React.useState<string>("");
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [locationName, setLocationName] = React.useState<string>();

  // Request user location

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const { coords } = location;
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=b7b5870b10124ad8bbe513e26f46fe88&q=${coords.latitude}+${coords.longitude}&pretty=1`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { city, country } = data.results[0].components;
        setLocationName(`${city}, ${country}`);
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(locationName);
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ScrollView>
            <View style={styles.topScreen}>
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 12,
                    color: COLORS.textColor.text_color_200,
                  }}
                >
                  Location
                </Text>
                <View style={styles.location}>
                  <Icon
                    name="map-pin"
                    size={18}
                    color={COLORS.primary.primary_500}
                  />
                  <Text style={styles.locationTeaxt}>{text}</Text>
                  <TouchableOpacity>
                    <Icon
                      name="chevron-down"
                      size={20}
                      color={COLORS.textColor.text_color_300}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.notification}>
                <NotifyIcon
                  name="notifications-outline"
                  size={28}
                  color={COLORS.gray.gray_500}
                />
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: COLORS.red.red_500,
                    position: "absolute",
                    top: 14,
                    right: 12,
                  }}
                ></View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Searchbar
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder="Search product..."
                placeholderTextColor={COLORS.textColor.text_color_100}
                onChangeText={(onChangeSearch) => setSearch(onChangeSearch)}
                value={search}
                style={{
                  elevation: 0,
                  borderWidth: 1.5,
                  width: SIZES.screenWidth * 0.75,
                  marginRight: 10,
                  borderColor: isFocus
                    ? COLORS.primary.primary_500
                    : COLORS.textColor.text_color_100,
                  borderRadius: 6,
                  backgroundColor: "#FEFEFE",
                }}
                inputStyle={{
                  fontSize: 14,
                }}
                iconColor={COLORS.textColor.text_color_100}
              />
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary.primary_500,
                  borderRadius: 6,
                }}
              >
                <Icon
                  name="sliders"
                  size={24}
                  color={COLORS.textColor.text_color_50}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <HomeCarousel data={carouselData} />
            </View>

            {/* //Categories */}
            <View>
              <Categories data={categories} />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.screenWidth * 0.05,
  },
  topScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.screenHeight * 0.05,
    marginBottom: SIZES.screenHeight * 0.03,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.screenWidth * 0.6,
  },
  locationTeaxt: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textColor.text_color_500,
    marginLeft: 6,
  },
  notification: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F1F2",
    borderRadius: 25,
  },
});
