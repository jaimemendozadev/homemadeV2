import React from 'react';
import {Text, View} from 'react-native';

interface IncomingProps {
  numbers: number[];
}

const calculate = (num1: number, num2: number): number => {
  return num1 + num2;
};

const Counter = (Props: IncomingProps) => (
  <View>
    <Text>
      The current count is
      {calculate(Props.numbers[0], Props.numbers[1])}
    </Text>
  </View>
);

export default Counter;
