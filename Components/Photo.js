import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Photo = ({ photo }) => {
  return (
    <View>
      <Image style={styles.image} source={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
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
