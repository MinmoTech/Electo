import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShakaPlayer from 'shaka-player-react';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
     <ShakaPlayer autoPlay src="http://ftp.itec.aau.at/datasets/mmsys12/TheSwissAccount/MPDs/TheSwissAccount_15s_isoffmain_DIS_23009_1_v_2_1c2_2011_08_30.mpd" />

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
