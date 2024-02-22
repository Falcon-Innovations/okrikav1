import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Searchbar } from "react-native-paper";
import { SIZES } from "../../constants/styles";

interface CustomScrollViewProps {
  children: ReactNode;
  extraHeight?: number;
}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({
  children,
  extraHeight = 0,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={extraHeight}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.scrollViewContent}>{children}</View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: SIZES.screenHeight * 0.04,
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default CustomScrollView;
