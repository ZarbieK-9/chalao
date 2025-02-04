import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { User } from "lucide-react-native";

const client = new QueryClient();



export default function RootLayout() {
  // const [fontsLoaded] = useFonts({

  // Popins: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  // const [showSplash, setShowSplash] = useState(true);

  //   Popins: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => 2000);
  }, []);

  // if (showSplash) {
  //   return <SplashScreen />;
  // }

  return (
    <AuthProvider>

      <QueryClientProvider client={client}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(root)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>

    </AuthProvider>
  );
}
