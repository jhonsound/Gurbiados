import { Redirect, Slot } from "expo-router";

const TapLayout = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) return <Redirect href="/(auth)/sign-in" />; // or redirect to login

  return <Slot />;
};

export default TapLayout;
