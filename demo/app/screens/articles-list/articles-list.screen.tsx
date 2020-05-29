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
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ArticlesListScreenProps {
  navigation: any;
}
export const ArticlesListScreen: React.FunctionComponent<ArticlesListScreenProps> = (
  props,
) => {
  const articles = ['Article 1', 'Article 2'];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ContainersStyles.safeArea}>
        <View style={ContainersStyles.container}>
          <Text style={TextStyles.header}>Articles</Text>
          {articles.map((a, index) => {
            return (
              <TouchableOpacity
                style={ContainersStyles.line}
                key={`article-${index}`}
                onPress={() => {
                  props.navigation.navigate('ArticleDetail', {article: a});
                }}>
                <Text>{a}</Text>
              </TouchableOpacity>
            );
          })}

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
