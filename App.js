import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Price = props => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <View style={styles.priceContainer}>
            <Button
                onPress={() => {
                  setIsClicked(!isClicked);
                }}
                title={isClicked ? props.rate : props.currency}
             />
        </View>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
        <Price currency="$" rate="36.6Bs"/>
        <Price currency="E" rate="76.6Bs"/>
        <Price currency="Y" rate="26.6Bs"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FCFBF4',
    justifyContent: 'space-around',
    alignItems: 'top',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
