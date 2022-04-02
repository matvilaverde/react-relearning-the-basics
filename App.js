import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What if Whatsapp React!</Text>
      
      <View style={styles.container}>
        <Chat name="Seto Kaiba" message="Isso é impossível, ninguém jamais conseguiu invocá-lo!"></Chat>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    backgroundColor: "lightgreen",
    paddingVertical: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
