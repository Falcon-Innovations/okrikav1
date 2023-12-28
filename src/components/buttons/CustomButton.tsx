import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { SIZES } from "../../constants/styles";

export enum ButtonType {
  SOLID = "solid",
  OUTLINED = "outlined",
  TEXT = "text",
}

type ButtonProps = {
  type?: ButtonType;
  label?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  pressed?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  bgColor?: string;
  borderColor?: string;
  pressedColor?: string;
  textColors?: string;
  padding?: number;
  height?: number;
  width?: number;
};

const AppButton: React.FC<ButtonProps> = ({
  type = ButtonType.SOLID,
  label,
  leftIcon,
  rightIcon,
  onPress,
  loading,
  pressed,
  disabled,
  bgColor,
  pressedColor,
  borderColor,
  textColors,
  padding,
  width,
  height,
}) => {
  const backGroundColor = bgColor ? bgColor : "#704f38";
  const borderColors = borderColor ? borderColor : "#8d7260";
  const textColor = textColors ? textColors : "#704f38";
  const paddingHorizontal = leftIcon || rightIcon ? 10 : 2;
  const btnHeight = height ? height : 48;
  const btnWidth = width ? width : SIZES.screenWidth * 0.9;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          { height: btnHeight, width: btnWidth },
          type === ButtonType.SOLID
            ? [styles.solid, { backgroundColor: backGroundColor }]
            : type === ButtonType.OUTLINED
            ? [{ borderColor: borderColors }, styles.outlined]
            : [styles.text, { backgroundColor: backGroundColor }],
          loading && [{ backgroundColor: backGroundColor }],
          disabled && [styles.disabled, { backgroundColor: backGroundColor }],
        ]}
        disabled={disabled}
      >
        {leftIcon}
        <Text
          style={[
            styles.buttonText,
            { color: textColor, paddingHorizontal: paddingHorizontal },
          ]}
        >
          {label}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "center",
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {},
  solid: {},
});

export default AppButton;
