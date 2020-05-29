import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import {ContainersStyles} from '../../styles/containers';
import {TextStyles} from '../../styles/text';

interface HomeScreenProps {
  navigation: any;
}
export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const featuredArticle = 'Article 3';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ContainersStyles.safeArea}>
        <View style={ContainersStyles.container}>
          <Text style={TextStyles.header}>Home</Text>
          <TouchableOpacity
            style={ContainersStyles.line}
            onPress={() => {
              props.navigation.navigate('Articles', {
                screen: 'ArticleDetail',
                params: {
                  article: featuredArticle,
                },
              });
            }}>
            <Text>Featured Article: {featuredArticle}</Text>
          </TouchableOpacity>
          <Button
            title="View Articles"
            onPress={() => {
              props.navigation.navigate('Articles');
            }}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};
