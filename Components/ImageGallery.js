import React, { useRef, useState} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { usePhotos } from '../Contexts/PhotosContext';
import Photo from './Photo';
import BackButton from './BackButton';


const ImageGallery = () => {
    const {photos} = usePhotos()
    const navigation = useNavigation()
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
  
    const renderItem = ({ item }) => (
     <Photo photo={item}/>
    );

    function navigateBack() {
        navigation.navigate({
            name: 'Home'
          })
    }

  
    return (
      <View style={{ flex: 1 }}>
        <PanGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
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
          <View style={{ flex: 1 }}>
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
        <BackButton onPress ={() => navigateBack()}/>
        <Text style={{ textAlign: 'center' }}>
          Swipe left or right to navigate between images
        </Text>
        </View>
      </View>
    );
  };
  
  export default ImageGallery;
  