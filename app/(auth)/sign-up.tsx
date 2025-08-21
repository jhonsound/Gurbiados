import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button
        title="Go to Sign in"
        onPress={() => router.push("/sign-in")}
      />
    </View>
  );
};

export default SignUp;
