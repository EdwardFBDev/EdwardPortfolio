import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import ScreenContainer from "@/components/layout/ScreenContainer";
import QuickActionCard from "@/components/home/QuickActionCard";
import TechnologyChip from "@/components/home/TechnologyChip";
import ThemeToggle from "@/components/buttons/ThemeToggle";

import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { useThemeColors } from "@/hooks/useThemeColors";

// Pantalla principal del portafolio.
export default function HomeScreen() {
  const { currentColors } = useThemeColors();

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={[
            styles.heroSection,
            {
              backgroundColor: currentColors.primary,
            },
          ]}
        >
          <View style={styles.topIcons}>
            <ThemeToggle variant="hero" />
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.greeting}>Hola, soy</Text>

              <Text style={styles.name}>Edward</Text>
              <Text style={styles.lastname}>Funes B.</Text>

              <Text style={styles.role}>Full Stack Developer</Text>

              <Text style={styles.description}>
                Desarrollador apasionado por crear soluciones digitales
                escalables, elegantes y centradas en el usuario.
              </Text>

              <View style={styles.socialRow}>
                <View style={styles.socialButton}>
                  <Ionicons name="logo-github" size={18} color="#FFFFFF" />
                </View>

                <View style={styles.socialButton}>
                  <Ionicons name="logo-linkedin" size={18} color="#FFFFFF" />
                </View>

                <View style={styles.socialButton}>
                  <Ionicons name="mail" size={18} color="#FFFFFF" />
                </View>
              </View>
            </View>

            <Image
              source={{
                uri: "https://i.pravatar.cc/314",
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        <View
          style={[
            styles.contentContainer,
            {
              backgroundColor: currentColors.background,
            },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Tecnologías principales
          </Text>

          <View style={styles.chipsContainer}>
            <TechnologyChip label="React" />
            <TechnologyChip label="Node.js" />
            <TechnologyChip label="TypeScript" />
            <TechnologyChip label="Python" />
            <TechnologyChip label="PostgreSQL" />
            <TechnologyChip label="Docker" />
          </View>

          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Acciones rápidas
          </Text>

          <View style={styles.quickActionsRow}>
            <QuickActionCard
              title="Ver Proyectos"
              icon="briefcase-outline"
              onPress={() => router.push("/projects")}
            />

            <QuickActionCard title="Sobre mí" icon="person-outline" />

            <QuickActionCard title="Contacto" icon="mail-outline" />
          </View>

          <View style={styles.featuredHeader}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
              Proyectos destacados
            </Text>

            <Text
              onPress={() => router.push("/projects")}
              style={[styles.viewAllText, { color: currentColors.primary }]}
            >
              Ver todos
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                style={[
                  styles.projectPreview,
                  {
                    backgroundColor: currentColors.surface,
                    borderColor: currentColors.border,
                  },
                ]}
              >
                <Ionicons
                  name="layers-outline"
                  size={28}
                  color={currentColors.primary}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  heroSection: {
    paddingTop: 50,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  topIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  heroContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.xl,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: spacing.lg,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: typography.body,
  },
  name: {
    marginTop: spacing.sm,
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
  },
  lastname: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
  },
  role: {
    marginTop: spacing.sm,
    color: "#5EEAD4",
    fontSize: typography.bodyLarge,
    fontWeight: "700",
  },
  description: {
    marginTop: spacing.lg,
    color: "rgba(255,255,255,0.82)",
    lineHeight: 24,
    fontSize: typography.body,
  },
  socialRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  socialButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.14)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  contentContainer: {
    padding: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.h3,
    fontWeight: "800",
    marginBottom: spacing.lg,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.xxl,
  },
  quickActionsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.lg,
  },
  viewAllText: {
    fontWeight: "700",
  },
  projectPreview: {
    width: 150,
    height: 90,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginRight: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
});