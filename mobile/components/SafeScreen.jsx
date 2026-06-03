import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constant/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
