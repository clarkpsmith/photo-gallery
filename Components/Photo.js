import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from './BackButton';

const Photo = ({photo}) => {

  const screenWidth = Dimensions.get('window').width;
    const route = useRoute();
  const uri = route.params.item;

   
    return <View style={styles.container}>
      
        <Image style={styles.image} source={photo} />
    </View>

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      paddingTop: 40,
      flex: 1,
      justifyContent: 'center',
    },
    button:{
     color: '#87CEEB',
     fontSize: 22,
     fontWeight: "700",
  
    },
    image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      aspectRatio: 1, 
    },
  });

export default Photo;