import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

import CarouselCard from "../../components/commons/CarouselCard";

interface CarouselProps {
  data: { id: string; title: string; description: string; image: string }[];
}

const HomeCarousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <CarouselCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeCarousel;
