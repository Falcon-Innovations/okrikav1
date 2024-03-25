import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/styles";

const CATEGORIES = [
    "All",
    "Newest",
    "Popular",
    "Electronics",
    "Men",
    "Women",
];

const Categoriesgif = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    return (
        <SafeAreaView>
            <ScrollView>

                <FlatList
                    data={CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        gap: 12,
                    }}
                    renderItem={({ item, index }) => {
                        const isSelected = categoryIndex === index;
                        return (
                            <TouchableOpacity
                                onPress={() => setCategoryIndex(index)}
                                style={{
                                    backgroundColor: isSelected ? COLORS.primary.primary_500 : "transparent",
                                    paddingHorizontal: 20,
                                    paddingVertical: 12,
                                    borderRadius: 100,
                                    borderWidth: isSelected ? 0 : 1,
                                    borderColor: COLORS.textColor.text_color_200,
                                }}
                            >
                                <Text
                                    style = {{
                                        color: isSelected ? COLORS.white : COLORS.black,
                                        fontWeight: "500",
                                        fontSize: 14,
                                        opacity: isSelected ? 1 : 0.5,
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />


            </ScrollView>
        </SafeAreaView>
    );
};

export default Categoriesgif;