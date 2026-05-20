import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "@/components/layout/ScreenContainer";
import ThemeToggle from "@/components/buttons/ThemeToggle";

import { useAppTheme } from "@/context/ThemeContext";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { shadows } from "@/theme/shadows";
import { useThemeColors } from "@/hooks/useThemeColors";

// Pantalla para controlar preferencias simples de la app.
export default function SettingsScreen() {
  const { theme } = useAppTheme();
  const { currentColors } = useThemeColors();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={[styles.title, { color: currentColors.text }]}>
          Configuración
        </Text>

        <Text style={[styles.subtitle, { color: currentColors.textSecondary }]}>
          Personaliza la experiencia visual del portafolio.
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: currentColors.surface,
              borderColor: currentColors.border,
            },
          ]}
        >
          <View
            style={[
              styles.iconBox,
              {
                backgroundColor: currentColors.background,
              },
            ]}
          >
            <Ionicons
              name={theme === "dark" ? "moon-outline" : "sunny-outline"}
              size={24}
              color={currentColors.primary}
            />
          </View>

          <View style={styles.info}>
            <Text style={[styles.cardTitle, { color: currentColors.text }]}>
              Tema de la aplicación
            </Text>

            <Text style={[styles.cardText, { color: currentColors.textSecondary }]}>
              Modo actual: {theme === "dark" ? "Oscuro" : "Claro"}
            </Text>
          </View>

          <ThemeToggle />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    paddingTop: spacing.xl+20,
  },
  title: {
    fontSize: typography.h1,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: typography.body,
    lineHeight: 24,
  },
  card: {
    marginTop: spacing.xl,
    borderWidth: 1,
    borderRadius: radius.xl,
    padding: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    ...shadows.card,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.body,
    fontWeight: "800",
  },
  cardText: {
    marginTop: spacing.xs,
    fontSize: typography.bodySmall,
  },
});