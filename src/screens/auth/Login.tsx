import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomInput, CustomScrollView } from "../../components";
import { COLORS } from "../../constants/styles";

const Login = () => {
  const [inputs, setInputs] = useState({
    emailAddress: "",
    password: "",
  });

  return (
    <CustomScrollView>
      <View style={styles.loginText}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.message}>Hi, Welcome back. We missed you</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <CustomInput
          placeholder="example@email.com"
          email
          label="Email Address"
          value={inputs?.emailAddress}
          onChangeText={(text) => setInputs({ ...inputs, emailAddress: text })}
        />
        <CustomInput
          placeholder="***********"
          secureTextEntry
          label="Password"
          password={true}
          value={inputs?.password}
          onChangeText={(text) => setInputs({ ...inputs, password: text })}
        />
      </View>
    </CustomScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  loginText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
    color: COLORS.gray.gray_500,
  },
  message: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
    color: COLORS.textColor.text_color_300,
  },
});
