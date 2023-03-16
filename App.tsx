import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xlg}}>Hey world</Text>
      <AntDesign name="stepforward" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
