import { StyleSheet, Text } from "react-native";

import { spacing } from "@/theme/spacing";
import { radius } from "@/theme/radius";
import { typography } from "@/theme/typography";
import { useThemeColors } from "@/hooks/useThemeColors";

interface Props {
  label: string;
}

// Chip visual para mostrar tecnologías
export default function TechnologyChip({ label }: Props) {
  const { currentColors } = useThemeColors();

  return (
    <Text
      style={[
        styles.chip,
        {
          backgroundColor: currentColors.chipBackground,
          color: currentColors.textSecondary,
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
    minWidth: 88,
    height: 42,
    paddingHorizontal: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    fontSize: typography.caption,
    fontWeight: "800",
    lineHeight: 40,
    textAlign: "center",
    overflow: "hidden",
  },
});