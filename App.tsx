/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

function App(): JSX.Element {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const convertToCurrency = (currency: keyof typeof currencyPerRupee) => {
    if (!inputValue) {
      Alert.alert('Amount is required');
      return;
    }

    let convertedAmount = currencyPerRupee[currency] * parseFloat(inputValue);

    setResult(Number(convertedAmount.toFixed(2)));
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{result}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
            value={inputValue}
            onChange={value => setInputValue(value.nativeEvent.text)}
          />
        </View>
        <View style={styles.grid}>
          {Object.keys(currencyPerRupee).map(currency => (
            <TouchableOpacity
              key={currency}
              style={styles.box}
              onPress={() =>
                convertToCurrency(currency as keyof typeof currencyPerRupee)
              }>
              <Text style={styles.text}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5E0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  resultContainer: {
    marginTop: 50,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  resultValue: {color: '#141E46', fontSize: 24, fontWeight: '600'},

  inputContainer: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  input: {
    color: '#141E46',
    fontSize: 18,
    textAlign: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  box: {
    width: '30%',
    height: 100,
    backgroundColor: '#ff7675',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {color: '#141E46', fontSize: 16, fontWeight: '600'},
});

export default App;
