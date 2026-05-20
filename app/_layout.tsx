import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "@/context/ThemeContext";

// Layout principal de la app.
// Aquí se envuelve toda la navegación con el ThemeProvider.
export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}