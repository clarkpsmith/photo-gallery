import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from './BackButton';

const Photo = ({ photo }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 300,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    color: '#87CEEB',
    fontSize: 22,
    fontWeight: '700',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    aspectRatio: 1,
  },
});

export default Photo;