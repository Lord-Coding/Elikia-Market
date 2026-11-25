/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import "@/global.css";

import { Platform, StyleSheet } from "react-native";

export const Colors = {
  light: {
    background: "#fff9ed",
    text: "#000000",
    textSecondary: "#60646C",
    primary: "#E87524",
    secondary: "#287447",
    danger: "#c5000f",
    white: "#ffffff",
    inactive: "#777780",
    tabBar: "#e8e2d7",
  },
  dark: {
    background: "#1e1c13",
    text: "#ffffff",
    textSecondary: "#dbe0e8",
    primary: "#E87524",
    secondary: "#287447",
    danger: "#c5000f",
    white: "#ffffff",
    inactive: "#777780",
    tabBar: "#323845",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
export type Theme = (typeof Colors)[keyof typeof Colors];

export const Fonts = Platform.select({
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const TAB_BAR_HEIGHT = 60;
export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const TAB_BAR_WIDTH = "100%";

export const MaxContentWidth = 800;

export const defaultStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    text: {
      fontSize: 20,
      color: theme.text,
    },
  });

export const utilsStyle = (theme: Theme) =>
  StyleSheet.create({
    contentWithTabBar: {
      paddingBottom: TAB_BAR_HEIGHT + BottomTabInset,
    },
    itemSeparator: {
      borderColor: theme.textSecondary,
      borderWidth: StyleSheet.hairlineWidth,
      opacity: 0.3,
    },
  });
