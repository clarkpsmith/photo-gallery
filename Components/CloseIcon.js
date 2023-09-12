import React from 'react';
import { View, StyleSheet } from 'react-native';

const CloseIcon = () => {
  return (
    <View style={styles.closeIcon}>
      <View style={[styles.bar, styles.bar1]} />
      <View style={[styles.bar, styles.bar2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 30,
    height: 30,
    position: 'relative',
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    height: 4,
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
  },
  bar1: {
    transform: [{ rotate: '45deg' }],
  },
  bar2: {
    transform: [{ rotate: '-45deg' }],
  },
});

export default CloseIcon;
