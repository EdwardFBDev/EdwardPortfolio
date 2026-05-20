import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

import {
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import ScreenContainer from "@/components/layout/ScreenContainer";

import QuickActionCard from "@/components/home/QuickActionCard";
import TechnologyChip from "@/components/home/TechnologyChip";
import ThemeToggle from "@/components/buttons/ThemeToggle";

import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { radius } from "@/theme/radius";
import { useAppTheme } from "@/context/ThemeContext";
import { router } from "expo-router";

export default function HomeScreen() {
  const { theme } = useAppTheme();

  const currentColors =
    theme === "dark"
      ? colors.dark
      : colors.light;

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* HERO SECTION */}

        <View
          style={[
            styles.heroSection,
            {
              backgroundColor:
                currentColors.primary,
            },
          ]}
        >
          {/* TOP ICONS */}

          <View style={styles.topIcons}>
            <ThemeToggle variant="hero" />
          </View>

          {/* HERO CONTENT */}

          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.greeting}>
                Hola, soy
              </Text>

              <Text style={styles.name}>
                Edward
              </Text>

              <Text style={styles.lastname}>
                Portfolio
              </Text>

              <Text style={styles.role}>
                Full Stack Developer
              </Text>

              <Text style={styles.description}>
                Desarrollador apasionado por
                crear soluciones digitales
                escalables, elegantes y
                centradas en el usuario.
              </Text>

              {/* SOCIAL ICONS */}

              <View style={styles.socialRow}>
                <View style={styles.socialButton}>
                  <Ionicons
                    name="logo-github"
                    size={18}
                    color="white"
                  />
                </View>

                <View style={styles.socialButton}>
                  <Ionicons
                    name="logo-linkedin"
                    size={18}
                    color="white"
                  />
                </View>

                <View style={styles.socialButton}>
                  <Ionicons
                    name="mail"
                    size={18}
                    color="white"
                  />
                </View>
              </View>
            </View>

            {/* AVATAR */}

            <Image
              source={{
                uri: "https://i.pravatar.cc/314",
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* WHITE CONTENT */}

        <View
          style={[
            styles.contentContainer,
            {
              backgroundColor:
                currentColors.background,
            },
          ]}
        >
          {/* TECHNOLOGIES */}

          <Text
            style={[
              styles.sectionTitle,
              {
                color: currentColors.text,
              },
            ]}
          >
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

          {/* QUICK ACTIONS */}

          <Text
            style={[
              styles.sectionTitle,
              {
                color: currentColors.text,
              },
            ]}
          >
            Acciones rápidas
          </Text>

          <View style={styles.quickActionsRow}>
            <QuickActionCard
              title="Ver Proyectos"
              icon="briefcase-outline"
              onPress={() => router.push("/projects")}
            />

            <QuickActionCard
              title="Sobre mí"
              icon="person-outline"
            />

            <QuickActionCard
              title="Contacto"
              icon="mail-outline"
            />
          </View>

          {/* FEATURED PROJECTS */}

          <View style={styles.featuredHeader}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: currentColors.text,
                },
              ]}
            >
              Proyectos Destacados
            </Text>

          <Text
            onPress={() => router.push("/projects")}
            style={{
              color: currentColors.primary,
              fontWeight: "600",
            }}
          >
            Ver todos
          </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={
              false
            }
          >
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                style={[
                  styles.projectPreview,
                  {
                    backgroundColor:
                      currentColors.surface,
                  },
                ]}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    paddingTop: 70,

    paddingHorizontal: spacing.xl,

    paddingBottom: 30,

    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  topIcons: {
    flexDirection: "row",

    justifyContent: "flex-end",

    gap: spacing.sm,
  },

  iconCircle: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor:
      "rgba(255,255,255,0.18)",

    alignItems: "center",
    justifyContent: "center",
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
    color: "white",

    fontSize: typography.body,
  },

  name: {
    marginTop: spacing.sm,

    color: "white",

    fontSize: 38,

    fontWeight: "800",
  },

  lastname: {
    color: "white",

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

    backgroundColor:
      "rgba(255,255,255,0.14)",

    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 180,
    height: 180,

    borderRadius: 100,

    borderWidth: 3,

    borderColor: "white",
  },

  contentContainer: {
    marginTop: -18,

    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    padding: spacing.xl,
  },

  sectionTitle: {
    fontSize: typography.h3,

    fontWeight: "700",

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

    alignItems: "center",

    marginBottom: spacing.lg,
  },

  projectPreview: {
    width: 150,
    height: 90,

    borderRadius: radius.lg,

    marginRight: spacing.md,
  },
});