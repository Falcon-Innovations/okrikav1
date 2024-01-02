import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from "../../constants/styles";

interface CarouselCardProps {
  item?: any;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => {
  return (
    <View style={styles.carouselItemContainer}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.left}>
          <View style={{ marginBottom: 14 }}>
            <Text
              style={{
                color: COLORS.textColor.text_color_500,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                color: COLORS.textColor.text_color_400,
              }}
            >
              {item?.description}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              borderRadius: 25,
              width: 85,
              height: 30,
              backgroundColor: COLORS.primary.primary_500,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="shopping-bag"
                size={12}
                color={COLORS.textColor.text_color_50}
              />
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 5,
                  fontWeight: "700",
                  color: COLORS.textColor.text_color_50,
                }}
              >
                Shop Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "relative",
            width: 165,
            height: 140,
            right: 10,
            top: 10,
          }}
        >
          <Image source={{ uri: item?.image }} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  carouselItemContainer: {
    width: 300,
    height: 140,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 12,
    borderRadius: 10,
    backgroundColor: "#E7DED8",
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    width: 165,
    height: 140,
    resizeMode: "contain",
  },
  left: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
});
