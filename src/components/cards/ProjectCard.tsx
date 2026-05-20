import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Project } from "@/types/project";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { shadows } from "@/theme/shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { colors } from "@/theme/colors";

interface Props {
  project: Project;
  onPress: () => void;
}

// Tarjeta reutilizable para mostrar un proyecto.
export default function ProjectCard({ project, onPress }: Props) {
  const { currentColors } = useThemeColors();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: currentColors.card,
          borderColor: currentColors.border,
          opacity: pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      <View style={[styles.thumbnail, { backgroundColor: currentColors.secondary }]}>
        <Ionicons name="layers-outline" size={30} color={currentColors.accent} />
      </View>

      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={[styles.title, { color: currentColors.text }]}>
            {project.title}
          </Text>

          <Ionicons
            name="bookmark-outline"
            size={20}
            color={currentColors.textSecondary}
          />
        </View>

        <Text
          numberOfLines={2}
          style={[styles.description, { color: currentColors.textSecondary }]}
        >
          {project.description}
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.techRow}>
            {project.technologies.slice(0, 3).map((tech) => (
              <View
                key={tech}
                style={[
                  styles.chip,
                  {
                    backgroundColor: currentColors.chipBackground,
                    borderColor: currentColors.border,
                  },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[styles.chipText, { color: currentColors.textSecondary }]}
                >
                  {tech}
                </Text>
              </View>
            ))}
          </View>

          <Text style={[styles.year, { color: currentColors.textSecondary }]}>
            {project.year}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 124,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  thumbnail: {
    width: 86,
    height: 86,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  title: {
    flex: 1,
    fontSize: typography.body,
    fontWeight: "800",
  },
  description: {
    marginTop: spacing.xs,
    fontSize: typography.bodySmall,
    lineHeight: 20,
  },
  bottomRow: {
    marginTop: spacing.sm,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  techRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
  },
  chip: {
    height: 20,
    minWidth: 72,
    maxWidth: 110,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.md,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: {
    fontSize: 10,
    fontWeight: "800",
    gap: 10,
    color: colors.dark.textSecondary,
  },
  year: {
    fontSize: typography.caption,
    fontWeight: "800",
    marginBottom: 5,
  },
});