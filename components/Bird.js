import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Bird = ({ birdBottom, birdleft }) => {
  const birdWidth = 50;
  const birdHeight = 60;

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: 50,
        height: 60,
        left: birdleft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}
    />
  );
};

export default Bird;
