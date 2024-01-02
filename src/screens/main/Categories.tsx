import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect } from "react";

import { COLORS, SIZES } from "../../constants/styles";
import { CategoryView } from "../../components/commons";

interface CategoriesProps {
  data: { id: string; name: string; image: string }[];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  //   // Auto scroll to next item
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       if (activeIndex === data.length - 1) {
  //         flatListRef.current?.scrollToIndex({ index: 0, animated: true });
  //       } else {
  //         flatListRef.current?.scrollToIndex({
  //           index: activeIndex + 1,
  //           animated: true,
  //         });
  //       }
  //     }, 5000);

  //     // Clear interval on component unmount
  //     return () => clearInterval(intervalId);
  //   });

  const handleScroll = (event: any) => {
    const position = event.nativeEvent.contentOffset.x / SIZES.screenWidth;
    const index = Math.round(position);
    setActiveIndex(index);
  };

  const getItemLayout = (data: any, index: number) => ({
    length: SIZES.screenWidth,
    offset: SIZES.screenWidth * index,
    index: index,
  });

  return (
    <View>
      <View style={styles.categoryView}>
        <View style={styles.categoryTop}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: COLORS.gray.gray_500,
            }}
          >
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: COLORS.primary.primary_500,
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        ref={flatListRef}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <CategoryView item={item} />}
        horizontal
        initialNumToRender={4}
        getItemLayout={getItemLayout}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    marginTop: 24,
    marginBottom: 15,
  },
  categoryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Categories;
