import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

interface ArticlesScreenProps {}
export const ArticlesScreen: React.FunctionComponent<ArticlesScreenProps> = (
  props,
) => {
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
          <Text>Artricles Screen</Text>
          <Button title="Go Home" onPress={() => {}}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};
