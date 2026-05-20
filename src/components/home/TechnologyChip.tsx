import {
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";

import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { radius } from "@/theme/radius";
import { typography } from "@/theme/typography";
import { useAppTheme } from "@/context/ThemeContext";

interface Props {
  label: string;
}

export default function TechnologyChip({
  label,
}: Props) {
  const { theme } = useAppTheme();

  const currentColors =
    theme === "dark"
      ? colors.dark
      : colors.light;

  return (
    <Text
      style={[
        styles.chip,
        {
          backgroundColor:
            currentColors.background,

          color: currentColors.primary,
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

    fontSize: typography.caption,

    fontWeight: "600",

    overflow: "hidden",
  },
});