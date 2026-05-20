import { colors } from "@/theme/colors";
import { useAppTheme } from "@/context/ThemeContext";

// Hook simple para obtener el tema actual y sus colores.
export function useThemeColors() {
  const { theme } = useAppTheme();

  return {
    theme,
    currentColors: theme === "dark" ? colors.dark : colors.light,
  };
}