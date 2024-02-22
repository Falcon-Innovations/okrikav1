import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  CustomButton,
  CustomInput,
  CustomScrollView,
  SocialMediaBtn,
} from "../../components";
import { COLORS, SIZES } from "../../constants/styles";
import { ButtonType } from "../../components/buttons/SocialMediaBtn";
import { IMAGES } from "../../constants";

import { AuthStackParamList } from "../../navigation/AuthNavigation";
import { Seperator } from "../../components/commons";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const [inputs, setInputs] = useState({
    emailAddress: "",
    password: "",
  });

  // check all fields are filled
  const isSignInDisabled = !inputs.emailAddress || !inputs.password;

  // handle sign in
  const handleSignIn = () => {
    if (!isSignInDisabled) {
      console.log("Email:", inputs.emailAddress);
      console.log("Password:", inputs.password);
    }
  };

  return (
    <CustomScrollView>
      <View style={styles.loginText}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.message}>Hi, Welcome back 👋. We missed you</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <CustomInput
          placeholder="example@email.com"
          inputLabel="Email Address"
          email
          value={inputs?.emailAddress}
          onChangeText={(text) => setInputs({ ...inputs, emailAddress: text })}
        />
        <CustomInput
          placeholder="***********"
          secureTextEntry
          inputLabel="Password"
          password={true}
          value={inputs?.password}
          onChangeText={(text) => setInputs({ ...inputs, password: text })}
        />
        <TouchableOpacity style={styles.forgotPassView}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.loginBtn}>
          <CustomButton
            label="Sign In"
            onPress={handleSignIn}
            textColors="white"
            disabled={isSignInDisabled}
          />
        </View>

        <Seperator text="or Login with" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialMediaBtn
            label="Google"
            onPress={() => console.log("Hello Google")}
            type={ButtonType.OUTLINED}
            image={IMAGES.google}
          />
          <SocialMediaBtn
            label="Facebook"
            onPress={() => console.log("Hello Facebook")}
            type={ButtonType.SOLID}
            image={IMAGES.facebook}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: SIZES.screenHeight * 0.05,
          }}
        >
          <Text
            style={{
              color: COLORS.textColor.text_color_500,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.noAccount}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
  forgotPassView: {
    alignItems: "flex-end",
  },
  forgotPassText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.primary.primary_500,
    textDecorationLine: "underline",
  },
  loginBtn: {
    marginTop: 20,
  },

  noAccount: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary.primary_500,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
