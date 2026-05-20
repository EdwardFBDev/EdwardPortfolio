import { Pressable, StyleSheet, Text, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Project } from "@/types/project";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { shadows } from "@/theme/shadows";
import { useAppTheme } from "@/context/ThemeContext";

interface Props {
  project: Project;
  onPress: () => void;
}

export default function ProjectCard({ project, onPress }: Props) {
  const { theme } = useAppTheme();
  const currentColors = theme === "dark" ? colors.dark : colors.light;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: currentColors.surface,
          borderColor: currentColors.border,
          opacity: pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      <View style={styles.thumbnail}>
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
            color={currentColors.secondary}
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
              <Text
                key={tech}
                style={[
                  styles.chip,
                  {
                    backgroundColor:
                      theme === "dark" ? "rgba(91,140,255,0.16)" : "#EAF0FF",
                    color: currentColors.primary,
                  },
                ]}
              >
                {tech}
              </Text>
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
    minHeight: 120,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  thumbnail: {
    width: 84,
    height: 84,
    borderRadius: radius.md,
    backgroundColor: "#071A3D",
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
    lineHeight: 19,
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
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radius.md,
    fontSize: 10,
    fontWeight: "700",
    overflow: "hidden",
  },
  year: {
    fontSize: typography.caption,
    fontWeight: "600",
  },
});