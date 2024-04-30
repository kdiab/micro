import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RateButton from './src/RateButton.js';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const [displayBs, setDisplayBs] = useState('');

  const handleButtonPress = (text) => {
    setDisplayText(text);
    setDisplayBs('Bs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <RateButton onPress={handleButtonPress} title="$ Dolar" text="37.31" />
        <RateButton onPress={handleButtonPress} title="E Euro "text="22.11" />
        <RateButton onPress={handleButtonPress} title="Y Yen" text="73.41" />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.displayText}>
          <Text style={styles.largeFont}>{displayText}</Text>
          <Text style={styles.normalFont}>{displayBs}</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    width: '100%', 
    paddingHorizontal: 20, 
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    textAlign: 'center',
  },
  normalFont: {
    fontSize: 32,
  },
  largeFont: {
    fontSize: 72,
  },
});

export default App;

