import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const { authState } = useAuth();
  console.log(authState?.authenticated + "hello");

  // useEffect(() => {
  //   //   // Check authentication status here
  //   //   // For now, we'll just set it to false
  //   //   setIsAuthenticated(true);
  //   //   setIsLoading(false);
  //   setTimeout(() => 2000);
  // }, []);

  // if (isLoading) {
  //   return null; // or a loading indicator
  // }
  if (authState?.authenticated === undefined) {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  if (authState?.authenticated) {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Redirect href="/(root)" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  if (authState?.authenticated === false) {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Redirect href="/(auth)/login" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
    // <SafeAreaProvider><SafeAreaView><Redirect href="/(auth)/login" /></SafeAreaView></SafeAreaProvider>;
  }
}
