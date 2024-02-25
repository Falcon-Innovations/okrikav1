import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState, useRef } from "react";
import {
  CheckBox,
  CustomButton,
  CustomInput,
  CustomPhoneInput,
  CustomScrollView,
  SocialMediaBtn,
} from "../../components";
import { COLORS, SIZES } from "../../constants/styles";
import { ButtonType } from "../../components/buttons/SocialMediaBtn";
import { IMAGES } from "../../constants";
import { Seperator } from "../../components/commons";
import { AuthStackParamList } from "../../navigation/AuthNavigation";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

const Register = ({ navigation }: Props) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // check all fields are filled
  const isSignInDisabled = !inputs.emailAddress || !inputs.password || !checked;

  const checkPassword = inputs.password === inputs.confirmPassword;

  // handle sign in
  const handleSignIn = () => {
    if (!isSignInDisabled && !checkPassword) {
      console.log("Email:", inputs.emailAddress);
      console.log("Password:", inputs.password);
      console.log("Phone Number:", inputs.phoneNumber);
      console.log("Full Name:", inputs.fullName);

      console.log("Password Don't Match");
    }
  };

  return (
    <>
      <CustomScrollView>
        <View style={styles.loginText}>
          <Text style={styles.title}>Create An Account</Text>
          <Text style={styles.message}>
            Please fill the information below or register with your social media
            account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomInput
            placeholder="Full Name"
            inputLabel="Full Name"
            value={inputs?.fullName}
            onChangeText={(text) => setInputs({ ...inputs, fullName: text })}
          />
          <CustomInput
            placeholder="example@email.com"
            inputLabel="Email Address"
            email
            value={inputs?.emailAddress}
            onChangeText={(text) =>
              setInputs({ ...inputs, emailAddress: text })
            }
          />
          <CustomPhoneInput
            phoneInput={phoneInput}
            value={inputs?.phoneNumber}
            inputLabel="Phone Number"
            onChangeFormattedText={(text) =>
              setInputs({ ...inputs, phoneNumber: text })
            }
          />
          <CustomInput
            placeholder="***********"
            secureTextEntry
            inputLabel="Password"
            password={true}
            value={inputs?.password}
            onChangeText={(text) => setInputs({ ...inputs, password: text })}
          />
          <CustomInput
            placeholder="***********"
            secureTextEntry
            inputLabel="Confirm Password"
            password={true}
            value={inputs?.confirmPassword}
            onChangeText={(text) =>
              setInputs({ ...inputs, confirmPassword: text })
            }
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <CheckBox
              isChecked={checked}
              onPress={() => setChecked(!checked)}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Agree with</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: COLORS.primary.primary_500,
                    textDecorationLine: "underline",
                    marginLeft: 5,
                  }}
                >
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.loginBtn}>
            <CustomButton
              label="Sign Up"
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
              Do you have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.noAccount}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomScrollView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
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
    textAlign: "center",
    color: COLORS.textColor.text_color_300,
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
