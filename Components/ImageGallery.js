import React, { useRef, useState} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { usePhotos } from '../Contexts/PhotosContext';
import Photo from './Photo';
import BackButton from './BackButton';

const ImageGallery = () => {
  const { photos } = usePhotos();
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSwipeLeft = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const onSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const renderItem = ({ item }) => <Photo photo={item} />;

  function navigateBack() {
    navigation.navigate({
      name: 'Home',
    });
  }

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ marginTop: 20 }}>
        <BackButton onPress={() => navigateBack()} />
      </View>
      <PanGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          console.log('EVENT', nativeEvent.state);
          if (nativeEvent.state === State.END) {
            if (nativeEvent.translationX < 0) {
              // Swiped left
              onSwipeLeft();
            } else if (nativeEvent.translationX > 0) {
              // Swiped right
              onSwipeRight();
            }
          }
        }}
      >
        <View>
          <FlatList
            ref={flatListRef}
            data={photos}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            initialScrollIndex={currentIndex}
          />
        </View>
      </PanGestureHandler>
      <View>
        <Text style={{ textAlign: 'center', color: 'white', marginTop: 8 }}>
          Swipe left or right to navigate between images
        </Text>
      </View>
    </View>
  );
};
  
  export default ImageGallery;
  