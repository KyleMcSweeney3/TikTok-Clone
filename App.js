import { StatusBar, } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import Home from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
      return (
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      );
  }
}
