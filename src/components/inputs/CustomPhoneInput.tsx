import React from "react";

import { StyleSheet, Text } from "react-native";
import PhoneNumberInput from "react-native-phone-number-input";
import { COLORS } from "../../constants/styles";

interface CustomProps {
  placeholder?: string;
  value: string;
  error?: boolean;
  onChangeText?: (text: string) => void;
  onChangeFormattedText?: (text: string) => void;
  phoneInput?: any;
  inputLabel?: string;
}

const CustomPhoneInput: React.FC<CustomProps> = ({
  value,
  onChangeText,
  placeholder,
  phoneInput,
  onChangeFormattedText,
  error,
  inputLabel,
}) => {
  const handleValidation = () => {
    const isValid = phoneInput.current?.isValidNumber(value);
    if (value && value.length < 9) {
      return "Phone number must be at least 9 characters long";
    }
    if (value && !isValid) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const renderInputStyles = () => {
    if (error) {
      return {
        borderWidth: 1,
        borderColor: COLORS.red.red_500,
      };
    }
    return {
      borderWidth: 1,
      borderColor: COLORS.gray.gray_200,
    };
  };

  const errMsg = handleValidation();

  const inputStyles = renderInputStyles();
  return (
    <>
      <Text style={{ color: COLORS.textColor.text_color_500, marginBottom: 8 }}>
        {inputLabel}
      </Text>
      <PhoneNumberInput
        ref={phoneInput}
        defaultCode="CM"
        layout="second"
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        value={value}
        placeholder={placeholder}
        autoFocus={false}
        containerStyle={[styles.phoneinput, inputStyles]}
        textInputStyle={styles.textInputStyle}
        textContainerStyle={styles.textContainerStyle}
      />
      {errMsg && <Text style={styles.errorMessage}>{errMsg}</Text>}
    </>
  );
};

export default CustomPhoneInput;

const styles = StyleSheet.create({
  phoneinput: {
    width: "100%",
    borderRadius: 6,
    // backgroundColor: "transparent",
    marginBottom: 12,
    borderColor: COLORS.gray.gray_200,
    height: 52,
  },
  textInputStyle: {
    height: 52,
    backgroundColor: "transparent",
    borderColor: COLORS.gray.gray_200,
    paddingLeft: 12,
    fontSize: 14,
  },
  textContainerStyle: {
    backgroundColor: "transparent",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderStartWidth: 0,
    borderColor: COLORS.gray.gray_200,
  },

  errorMessage: {
    color: COLORS.red.red_500,
    fontSize: 12,
    marginVertical: 12,
  },
});
