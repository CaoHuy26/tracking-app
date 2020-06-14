import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Maps from './src/components/Maps';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Maps />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})