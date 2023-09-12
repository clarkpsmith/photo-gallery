import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePhotos } from '../Contexts/PhotosContext';

const Home = () => {
  const navigation = useNavigation();
  const { photos } = usePhotos();

  function navigateToSingleImage(item, navigation) {
    navigation.navigate({
      name: 'Photo',
      params: { item },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photo Gallery</Text>
      <FlatList
        data={photos}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigateToSingleImage(item, navigation)}
          >
            <Image style={styles.image} source={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 10,
    paddingBottom: 20,
  },
  touchable: {
    width: '50%',
  },
  container: {
    backgroundColor: 'black',
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#87CEEB',
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default Home;
