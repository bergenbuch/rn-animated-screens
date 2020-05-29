import {StyleSheet} from 'react-native';

export const ContainersStyles = {
  ...StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      padding: 16,
      marginBottom: 8,
      borderRadius: 5,
      backgroundColor: '#a7e7ff',
    },
  }),
};
