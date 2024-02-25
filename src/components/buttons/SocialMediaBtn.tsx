import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FunctionComponent } from "react";
import { COLORS } from "../../constants/styles";

export enum ButtonType {
  SOLID = "solid",
  OUTLINED = "outlined",
}

type ButtonProps = {
  type?: ButtonType;
  label: string;
  onPress: () => void;
  image?: string;
};

const SocialMediaBtn: FunctionComponent<ButtonProps> = ({
  type = ButtonType.SOLID,
  label,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle,
        type === ButtonType.OUTLINED && {
          borderWidth: 1.5,
          borderColor: COLORS.primary.primary_500,
        },
        type === ButtonType.SOLID && {
          backgroundColor: COLORS.primary.primary_500,
        },
      ]}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            height: 34,
            width: 34,
            marginRight: 10,
          }}
          resizeMode="contain"
        />
      )}

      <Text
        style={[
          styles.btnLabel,
          type === ButtonType.OUTLINED && { color: COLORS.primary.primary_500 },
          type === ButtonType.SOLID && {
            color: COLORS.textColor.text_color_50,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialMediaBtn;

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 48,
    marginRight: 4,
    borderRadius: 24,
  },
  btnLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});
