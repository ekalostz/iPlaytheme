import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Entypo'

export const EntypoIconsPack = {
  name: 'entypo',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => EntypoIcon({ name, ...props }),
});

function EntypoIcon({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Icon name={name} size={height} color={tintColor} style={iconStyle} />
  );
}