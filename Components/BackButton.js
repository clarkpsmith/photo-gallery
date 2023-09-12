import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
padding: 16
  },
  buttonText: {
    color: '#87CEEB',
    fontSize: 22,
    fontWeight: "700",
  },
});

export default BackButton;
