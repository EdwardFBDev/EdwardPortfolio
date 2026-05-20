import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { useThemeColors } from "@/hooks/useThemeColors";

interface Props {
  children: ReactNode;
}

// Contenedor base para mantener el mismo fondo en todas las pantallas.
export default function ScreenContainer({ children }: Props) {
  const { currentColors } = useThemeColors();

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