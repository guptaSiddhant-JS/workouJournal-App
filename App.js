import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from'expo';

const fetchFonts = () =>{
  return Font.loadAsync({
     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf');
     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf');
  });
}

export default function App() {
  const [fetchLoading, setFetchLoading] = useState(false);
  if(!fetchLoading){
    return (
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setFetchLoading(true)}
       />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
