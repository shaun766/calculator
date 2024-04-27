import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const onButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Result Display */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
        />
      </View>

      {/* Button Grid */}
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  resultText: {
    fontSize: 40,
    color:'white'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,

  },
  inputText: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    color:'white'
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
  },
});
