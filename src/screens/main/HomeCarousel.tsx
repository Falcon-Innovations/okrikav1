import { StyleSheet, View, FlatList } from "react-native";
import React, { useRef, useEffect } from "react";

import { COLORS } from "../../constants/styles";
import { CarouselCard } from "../../components/cards";

interface CarouselProps {
  data: { id: string; title: string; description: string; image: string }[];
}

const HomeCarousel: React.FC<CarouselProps> = ({ data }) => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Auto scroll to next item
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatListRef.current?.scrollToIndex({ index: 0, animated: true });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  });

  const handleScroll = (event: any) => {
    const position = event.nativeEvent.contentOffset.x / 380;
    const index = Math.round(position);
    setActiveIndex(index);
  };

  const getItemLayout = (data: any, index: number) => ({
    length: 320,
    offset: 320 * index,
    index: index,
  });

  const renderDotIndicator = () => {
    return data?.map((dot, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor:
              index === activeIndex
                ? COLORS.primary.primary_500
                : COLORS.gray.gray_100,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 3,
          }}
        />
      );
    });
  };

  return (
    <View>
      <FlatList
        data={data}
        ref={flatListRef}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <CarouselCard item={item} />}
        horizontal
        getItemLayout={getItemLayout}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {renderDotIndicator()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeCarousel;
