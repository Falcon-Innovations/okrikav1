import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { CustomInput, CustomScrollView } from "../../components";
import { SIZES } from "../../constants";

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <CustomScrollView>
      <CustomInput
        placeholder="Full Name"
        value={inputs?.fullName}
        onChangeText={(text) => setInputs({ ...inputs, fullName: text })}
      />
    </CustomScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
});
