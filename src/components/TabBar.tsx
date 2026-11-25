import { icon } from '@/constants/icon';
import { useTheme } from '@/hooks/use-theme';
import TabBarButton from '@/components/TabBarButton';
import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabBar({
  state,
  descriptors,
  emitter,
  navigateToTab,
}: BottomTabBarProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBar,
        {
          backgroundColor: theme.tabBar,
          bottom: Math.max(insets.bottom, 12) + 8,
          shadowColor: theme.text,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        if (!isTabIconRoute(route.name)) {
          throw new Error(`Missing tab icon for route "${route.name}".`);
        }

        const fallbackLabel = options.title ?? route.name;
        const labelColor = isFocused ? theme.white : theme.inactive;
        const label =
          typeof options.tabBarLabel === 'function'
            ? options.tabBarLabel({
                focused: isFocused,
                color: labelColor,
                position: options.tabBarLabelPosition ?? 'below-icon',
                children: fallbackLabel,
              })
            : options.tabBarLabel ?? fallbackLabel;

        const onPress = () => {
          const event = emitter.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigateToTab(route.key);
          }
        };

        const onLongPress = () => {
          emitter.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            icon={icon[route.name]({
              color: isFocused ? theme.white : theme.inactive,
              focused: isFocused,
            })}
            label={label}
            showLabel={options.tabBarShowLabel !== false}
            accessibilityLabel={
              options.tabBarAccessibilityLabel ?? fallbackLabel
            }
            testID={options.tabBarButtonTestID}
          />
        );
      })}
    </View>
  );
}

function isTabIconRoute(routeName: string): routeName is keyof typeof icon {
  return Object.prototype.hasOwnProperty.call(icon, routeName);
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderRadius: 32,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    shadowOpacity: 0.18,
    elevation: 10,
  },
});
