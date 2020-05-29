import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ArticlesListScreen} from '../articles-list/articles-list.screen';
import {ArticleDetailScreen} from '../article-detail/article-detail.screen';

const ArticlesStack = createStackNavigator();

interface ArticlesScreenProps {
  navigation: any;
}
export const ArticlesScreen: React.FunctionComponent<ArticlesScreenProps> = (
  props,
) => {
  return (
    <>
      <ArticlesStack.Navigator
        initialRouteName="ArticlesList"
        headerMode="none">
        <ArticlesStack.Screen
          name="ArticlesList"
          component={ArticlesListScreen}
        />
        <ArticlesStack.Screen
          name="ArticleDetail"
          component={ArticleDetailScreen}
        />
      </ArticlesStack.Navigator>
    </>
  );
};
