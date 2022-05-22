import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,I18nManager } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './navigators/MainDrawerNavigator';
import openskyNetwork from './apis/opensky-network';
import { Init } from './database/FlightsDB';

I18nManager.allowRTL(false);


export default function App() {

  useEffect(() => {
    Init().then(() => {

    }).catch((err) => {
      console.log(err)
    })
    // const respone = await openskyNetwork.get();
    // if (!(respone.status >= 200 && respone.status <= 299)) {
    //   return;
    // }
    // fo
    // const interval = setInterval(async () => {
    //   const respone = await openskyNetwork.get();
    //   if (!(respone.status >= 200 && respone.status <= 299)) {
    //     return;
    //   }
    //   console.log(respone.data.states[0])

    // }, 1000 * 60 * 5);

    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <PaperProvider>
          <MainDrawerNavigator />
        </PaperProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
});
