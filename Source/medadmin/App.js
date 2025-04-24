import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading_container}>MedAdmin</Text>
      <Text style={styles.text_container}>Welcome to MedAdmin, still under development, don't worry, we will soon launch</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A9935',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_container:{
    color: "#fff",
    fontWeight: "semibold",
    justifyContent: "center",
  },
  heading_container:{
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 40,
  },
});