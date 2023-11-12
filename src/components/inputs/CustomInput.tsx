import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { CustomInputProps, KeyboadType, Mode } from "./types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SIZES } from "../../constants";

const CustomInput: FunctionComponent<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  email,
  password,
  placeholder,
  mode = Mode.OUTLINED,
  keyboard = KeyboadType.DEFAULT,
  mutliline,
  iconLeft,
  iconLibrary,
  errors,
  iconName = "email-outline",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleValidation = () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Invalid email address, Please enter a valid email address";
    }

    if (
      password &&
      !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}/.test(value)
    ) {
      return "Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    return "";
  };

  const error = handleValidation();

  const renderInputStyles = () => {
    if (error) {
      return {
        borderColor: "red",
      };
    }
    if (isFocused) {
      return {
        borderColor: "#234cdd",
      };
    }
    return {
      borderColor: "transparent",
    };
  };

  const inputStyles = renderInputStyles();

  return (
    <>
      {(isFocused && error) ||
        (error && <Text style={{ color: "red" }}>{error}</Text>)}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        mode={mode}
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        keyboardType={keyboard}
        placeholder={placeholder}
        multiline={mutliline}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.inputContainer, inputStyles]}
        placeholderTextColor={"#234cdd"}
        left={
          iconLeft && (
            <TextInput.Icon icon={iconName} color="#234cdd" size={20} />
          )
        }
        right={
          secureTextEntry && (
            <TextInput.Icon
              onPress={() => setHidePassword(!hidePassword)}
              icon={hidePassword ? "eye-off-outline" : "eye-outline"}
              color="#234cdd"
            />
          )
        }
      />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputContainer: {
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#234cdd",
    marginBottom: 12,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});
