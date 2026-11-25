import ScreenContainer from '@/components/ScreenContainer'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>Home Screen</Text>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  }
})