import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { usePhotos } from '../Contexts/PhotosContext';
import Photo from './Photo';
import BackButton from './BackButton';

const PhotoSwiper = () => {
  const { photos } = usePhotos();
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const route = useRoute();
  const uri = route.params.item.uri;
  const imageWidth = Dimensions.get('window').width;

  useEffect(() => {
    function findIndex() {
      for (let i = 0; i < photos.length; i++) {
        if (photos[i].uri == uri) {
          setCurrentIndex(i);
          break;
        }
      }
    }
    if (uri && photos) {
      findIndex();
    }
  }, [uri, photos]);

  const onSwipeLeft = () => {
    if (currentIndex < photos.length - 1) {
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

  const getItemLayout = (data, index) => ({
    length: imageWidth,
    offset: imageWidth * index,
    index,
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
      }}
    >
      <View style={{ marginTop: 24 }}>
        <BackButton onPress={() => navigateBack()} />
      </View>
      <View style={{ flex: 1 }} />
      <View style={{ marginTop: -24 }}>
        <PanGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.END) {
              if (nativeEvent.translationX < 0) {
                onSwipeLeft();
              } else if (nativeEvent.translationX > 0) {
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
              getItemLayout={getItemLayout}
            />
          </View>
        </PanGestureHandler>
        <View>
          <Text style={{ textAlign: 'center', color: 'white', marginTop: 8 }}>
            Swipe left or right to navigate between photos
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default PhotoSwiper;
