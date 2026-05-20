import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { spacing } from "@/theme/spacing";
import { radius } from "@/theme/radius";
import { typography } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import { useThemeColors } from "@/hooks/useThemeColors";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

// Tarjeta pequeña para acciones rápidas desde Home.
export default function QuickActionCard({ title, icon, onPress }: Props) {
  const { currentColors } = useThemeColors();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: currentColors.surface,
          borderColor: currentColors.border,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: currentColors.background,
          },
        ]}
      >
        <Ionicons name={icon} size={22} color={currentColors.textSecondary} />
      </View>

      <Text style={[styles.title, { color: currentColors.text }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    alignItems: "center",
    gap: spacing.sm,
    ...shadows.card,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: typography.caption,
    fontWeight: "700",
    textAlign: "center",
  },
});