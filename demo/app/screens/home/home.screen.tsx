import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

interface HomeScreenProps {}
export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button title="View Articles" onPress={() => {}}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};
