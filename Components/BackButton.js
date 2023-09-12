import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CloseIcon from './CloseIcon';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <CloseIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
  },
  buttonText: {
    color: '#87CEEB',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default BackButton;
