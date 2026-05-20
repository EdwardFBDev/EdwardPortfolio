import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import ScreenContainer from "@/components/layout/ScreenContainer";
import ProjectCard from "@/components/cards/ProjectCard";

import { projects } from "@/data/projects";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { useThemeColors } from "@/hooks/useThemeColors";

const filters = ["Todos", "Web App", "Mobile App", "Backend", "Dashboard"];

// Pantalla que muestra proyectos simulados usando FlatList.
export default function ProjectsScreen() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const { currentColors } = useThemeColors();

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerTextBlock}>
            <Text style={[styles.title, { color: currentColors.text }]}>
              Mis Proyectos
            </Text>

            <Text style={[styles.subtitle, { color: currentColors.textSecondary }]}>
              Explora algunos de mis trabajos recientes
            </Text>
          </View>

          <Ionicons name="filter-outline" size={26} color={currentColors.text} />
        </View>

        <View style={styles.filtersRow}>
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;

            return (
              <Pressable
                key={filter}
                onPress={() => setSelectedFilter(filter)}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: isActive
                      ? currentColors.primary
                      : currentColors.surface,
                    borderColor: currentColors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    {
                      color: isActive ? "#FFFFFF" : currentColors.text,
                    },
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProjectCard
            project={item}
            onPress={() => router.push(`/project/${item.id}`)}
          />
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl+20,
    paddingBottom: spacing.md,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.lg,
  },
  headerTextBlock: {
    flex: 1,
  },
  title: {
    fontSize: typography.h1,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: spacing.xs,
    fontSize: typography.bodySmall,
    lineHeight: 20,
  },
  filtersRow: {
    marginTop: spacing.xl,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  filterChip: {
    minHeight: 30,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.xl,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    fontSize: typography.caption,
    fontWeight: "800",
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
});