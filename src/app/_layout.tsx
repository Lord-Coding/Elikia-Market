import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar"
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { ThemeProvider } from '@/context/theme-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <ThemeProvider>
      <AnimatedSplashOverlay />
      <StatusBar />
      <RootNavigation />
    </ThemeProvider>
  );
}

const RootNavigation = () => {
  const theme = useTheme()

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.background
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </SafeAreaProvider>
  )
}
