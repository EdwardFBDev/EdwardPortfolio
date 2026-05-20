import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useAppTheme } from "@/context/ThemeContext";
import { useThemeColors } from "@/hooks/useThemeColors";

interface Props {
  variant?: "hero" | "surface";
}

// Botón para cambiar entre tema claro y oscuro.
export default function ThemeToggle({ variant = "surface" }: Props) {
  const { theme, toggleTheme } = useAppTheme();
  const { currentColors } = useThemeColors();

  const isHero = variant === "hero";

  return (
    <Pressable
      onPress={toggleTheme}
      style={[
        styles.button,
        {
          backgroundColor: isHero
            ? "rgba(255,255,255,0.18)"
            : currentColors.background,
          borderColor: isHero ? "rgba(255,255,255,0.24)" : currentColors.border,
        },
      ]}
    >
      <Ionicons
        name={theme === "dark" ? "sunny-outline" : "moon-outline"}
        size={18}
        color={isHero ? "#FFFFFF" : currentColors.primary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});