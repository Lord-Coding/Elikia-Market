import { useTheme } from '@/hooks/use-theme';
import { useSharedValue, withSpring, useAnimatedStyle, default as Animated } from 'react-native-reanimated';
import { Pressable, StyleSheet, type PressableProps } from 'react-native';
import type { ReactNode } from 'react';

type TabBarButtonProps = {
  onPress: NonNullable<PressableProps['onPress']>;
  onLongPress: NonNullable<PressableProps['onLongPress']>;
  isFocused: boolean;
  icon: ReactNode;
  label: ReactNode;
  showLabel: boolean;
  accessibilityLabel: string;
  testID?: string;
};

export default function TabBarButton({
  onPress,
  onLongPress,
  isFocused,
  icon,
  label,
  showLabel,
  accessibilityLabel,
  testID,
}: TabBarButtonProps) {
  const theme = useTheme();
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const pressIn = () => {
    scale.value = withSpring(0.94, { damping: 12, stiffness: 280 });
  };

  const pressOut = () => {
    scale.value = withSpring(1, { damping: 10, stiffness: 240 });
  };

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: isFocused }}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={styles.tabButton}
    >
      <Animated.View
        style={[
          styles.tabContent,
          { backgroundColor: isFocused ? theme.primary : 'transparent' },
          animatedStyle,
        ]}
      >
        {icon}
        {isFocused && showLabel && (
          <Animated.Text
            numberOfLines={1}
            style={[styles.label, { color: theme.white }]}
          >
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    minWidth: 0,
  },
  tabContent: {
    minHeight: 39,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 8,
    borderRadius: 26,
  },
  label: {
    flexShrink: 1,
    fontSize: 12,
    fontWeight: '600',
  },
});
