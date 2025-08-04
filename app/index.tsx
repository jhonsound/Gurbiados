import Home from "@/components/home";
import { View } from "react-native";
import './global.css';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home />
    </View>
  );
}
