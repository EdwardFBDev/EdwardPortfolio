import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "@/components/layout/ScreenContainer";

import { projects } from "@/data/projects";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { shadows } from "@/theme/shadows";
import { useAppTheme } from "@/context/ThemeContext";

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { theme } = useAppTheme();
  const currentColors = theme === "dark" ? colors.dark : colors.light;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <ScreenContainer>
        <View style={styles.notFoundContainer}>
          <Text style={[styles.notFoundTitle, { color: currentColors.text }]}>
            Proyecto no encontrado
          </Text>

          <Text style={[styles.notFoundText, { color: currentColors.textSecondary }]}>
            No se encontró información para este proyecto.
          </Text>
        </View>
      </ScreenContainer>
    );
  }

  const openUrl = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      Alert.alert("Enlace no disponible", "No se pudo abrir este enlace.");
      return;
    }

    await Linking.openURL(url);
  };

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { backgroundColor: currentColors.primary }]}>
          <View style={styles.topBar}>
            <Ionicons
              name="chevron-back"
              size={28}
              color="#FFFFFF"
              onPress={() => router.back()}
            />

            <Ionicons name="share-outline" size={24} color="#FFFFFF" />
          </View>

          <View style={styles.bannerPreview}>
            <Ionicons name="analytics-outline" size={72} color={currentColors.accent} />
          </View>
        </View>

        <View
          style={[
            styles.contentCard,
            {
              backgroundColor: currentColors.background,
            },
          ]}
        >
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: currentColors.text }]}>
              {project.title}
            </Text>

            <View
              style={[
                styles.categoryBadge,
                {
                  backgroundColor: currentColors.surface,
                  borderColor: currentColors.border,
                },
              ]}
            >
              <Text style={[styles.categoryText, { color: currentColors.secondary }]}>
                {project.category}
              </Text>
            </View>
          </View>

          <Text style={[styles.description, { color: currentColors.text }]}>
            {project.description}
          </Text>

          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Tecnologías
          </Text>

          <View style={styles.techContainer}>
            {project.technologies.map((tech) => (
              <Text
                key={tech}
                style={[
                  styles.techChip,
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

          <View style={styles.infoGrid}>
            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: currentColors.surface,
                  borderColor: currentColors.border,
                },
              ]}
            >
              <Ionicons name="checkmark-circle-outline" size={18} color="#22C55E" />
              <Text style={[styles.infoLabel, { color: currentColors.textSecondary }]}>
                Estado
              </Text>
              <Text style={[styles.infoValue, { color: currentColors.text }]}>
                {project.status}
              </Text>
            </View>

            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: currentColors.surface,
                  borderColor: currentColors.border,
                },
              ]}
            >
              <Ionicons name="calendar-outline" size={18} color={currentColors.primary} />
              <Text style={[styles.infoLabel, { color: currentColors.textSecondary }]}>
                Fecha
              </Text>
              <Text style={[styles.infoValue, { color: currentColors.text }]}>
                {project.date}
              </Text>
            </View>

            <View
              style={[
                styles.infoCard,
                {
                  backgroundColor: currentColors.surface,
                  borderColor: currentColors.border,
                },
              ]}
            >
              <Ionicons name="folder-outline" size={18} color={currentColors.primary} />
              <Text style={[styles.infoLabel, { color: currentColors.textSecondary }]}>
                Categoría
              </Text>
              <Text style={[styles.infoValue, { color: currentColors.text }]}>
                {project.category}
              </Text>
            </View>
          </View>

          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Descripción del Proyecto
          </Text>

          <Text style={[styles.longDescription, { color: currentColors.textSecondary }]}>
            {project.longDescription}
          </Text>

          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Screenshots
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                style={[
                  styles.screenshot,
                  {
                    backgroundColor: currentColors.surface,
                    borderColor: currentColors.border,
                  },
                ]}
              >
                <Ionicons name="image-outline" size={32} color={currentColors.primary} />
              </View>
            ))}
          </ScrollView>

          <View style={styles.actionsRow}>
            <Text
              onPress={() => openUrl(project.githubUrl)}
              style={[styles.secondaryButton]}
            >
              Ver en GitHub
            </Text>

            <Text
              onPress={() => openUrl(project.demoUrl)}
              style={[styles.primaryButton, { backgroundColor: currentColors.primary }]}
            >
              Ver Demo
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 300,
    paddingTop: 60,
    paddingHorizontal: spacing.xl,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerPreview: {
    height: 170,
    marginTop: spacing.xl,
    borderRadius: radius.xl,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-4deg" }],
  },
  contentCard: {
    marginTop: -34,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: spacing.xl,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  title: {
    flex: 1,
    fontSize: typography.h2,
    fontWeight: "800",
  },
  categoryBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: typography.caption,
    fontWeight: "700",
  },
  description: {
    marginTop: spacing.lg,
    fontSize: typography.body,
    lineHeight: 24,
  },
  sectionTitle: {
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    fontSize: typography.body,
    fontWeight: "800",
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  techChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    fontSize: typography.caption,
    fontWeight: "700",
    overflow: "hidden",
  },
  infoGrid: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  infoCard: {
    flex: 1,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.card,
  },
  infoLabel: {
    marginTop: spacing.sm,
    fontSize: 11,
    fontWeight: "600",
  },
  infoValue: {
    marginTop: spacing.xs,
    fontSize: 11,
    fontWeight: "800",
  },
  longDescription: {
    fontSize: typography.bodySmall,
    lineHeight: 22,
  },
  screenshot: {
    width: 120,
    height: 80,
    marginRight: spacing.md,
    borderWidth: 1,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#0F172A",
    color: "#FFFFFF",
    textAlign: "center",
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    fontWeight: "800",
  },
  primaryButton: {
    flex: 1,
    color: "#FFFFFF",
    textAlign: "center",
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    fontWeight: "800",
  },
  notFoundContainer: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: "center",
  },
  notFoundTitle: {
    fontSize: typography.h2,
    fontWeight: "800",
  },
  notFoundText: {
    marginTop: spacing.sm,
    fontSize: typography.body,
  },
});