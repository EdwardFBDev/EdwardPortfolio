import { StyleSheet, Text } from "react-native";

import { spacing } from "@/theme/spacing";
import { radius } from "@/theme/radius";
import { typography } from "@/theme/typography";
import { useThemeColors } from "@/hooks/useThemeColors";

interface Props {
  label: string;
}

// Chip visual para mostrar tecnologías.
export default function TechnologyChip({ label }: Props) {
  const { currentColors } = useThemeColors();

  return (
    <Text
      style={[
        styles.chip,
        {
          backgroundColor: currentColors.surface,
          color: currentColors.primary,
          borderColor: currentColors.border,
        },
      ]}
    >
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    borderWidth: 1,
    fontSize: typography.caption,
    fontWeight: "700",
    overflow: "hidden",
  },
});