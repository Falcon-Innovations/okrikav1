import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface categoryCardProps {
  item?: any;
}
const CategoryView: React.FC<categoryCardProps> = ({ item }) => {
  return (
    <>
      <TouchableOpacity>
        <Image source={{ uri: item?.image }} style={styles.image} />
      </TouchableOpacity>
    </>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
    resizeMode: "contain",
  },
});
