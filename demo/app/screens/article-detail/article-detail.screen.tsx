import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';
import {ContainersStyles} from '../../styles/containers';
import {TextStyles} from '../../styles/text';

interface ArticleDetailScreenProps {
  navigation: any;
  route: any;
}
export const ArticleDetailScreen: React.FunctionComponent<ArticleDetailScreenProps> = (
  props,
) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ContainersStyles.safeArea}>
        <View style={ContainersStyles.container}>
          <Text style={TextStyles.header}>{props.route.params.article}</Text>

          <Button
            title="Go back"
            onPress={() => {
              props.navigation.goBack();
            }}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};
