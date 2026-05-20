import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { colors } from "@/theme/colors";
import { useAppTheme } from "@/context/ThemeContext";

interface Props {
  children: ReactNode;
}

export default function ScreenContainer({ children }: Props) {
  const { theme } = useAppTheme();
  const currentColors = theme === "dark" ? colors.dark : colors.light;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: currentColors.background,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});