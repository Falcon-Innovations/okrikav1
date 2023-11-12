import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { CustomInput } from "../../components";
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
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View>
          <CustomInput
            placeholder="Full Name"
            value={inputs?.fullName}
            onChangeText={(text) => setInputs({ ...inputs, fullName: text })}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
});
