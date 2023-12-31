import { StyleSheet, Text } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import MaterialCommunityIcons

import { CustomInputProps, KeyboadType, Mode } from "./types";
import { COLORS } from "../../constants/styles";

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
  multiline,
  iconLeft,
  inputLabel,
  iconName = "email-outline",
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const [error, setError] = useState("");

  const isEmailValid = () => email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPasswordValid = () =>
    password &&
    !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}/.test(value);

  const getError = () => {
    if (isEmailValid()) {
      return "Invalid email address. Please enter a valid email address.";
    }

    if (isPasswordValid()) {
      return "Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
    }

    return "";
  };

  const handleEndEditing = () => {
    setError(getError());
  };

  return (
    <>
      <Text style={{ color: COLORS.textColor.text_color_500, marginBottom: 8 }}>
        {inputLabel}
      </Text>
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
        multiline={multiline}
        error={Boolean(error)}
        style={[styles.inputContainer]}
        placeholderTextColor={COLORS.textColor.text_color_100}
        theme={{ colors: { primary: COLORS.primary.primary_500 } }}
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
              color={COLORS.textColor.text_color_200}
            />
          )
        }
        onEndEditing={handleEndEditing}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: COLORS.primary.primary_500,
    marginBottom: 10,
    borderRadius: 6,
    borderColor: COLORS.textColor.text_color_100,
    paddingHorizontal: 10,
  },
  errorText: {
    color: COLORS.red.red_500,
    fontSize: 12,
    // marginVertical: 1,
  },
});
