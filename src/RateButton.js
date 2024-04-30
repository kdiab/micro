import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RateButton = ({ onPress, title, text }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(text);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
});

export default RateButton;
