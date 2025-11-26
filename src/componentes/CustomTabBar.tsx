import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

export const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <LinearGradient
      colors={['#273ec1ff', '#a80e0eff']}
      style={styles.gradient}
    >
      <BottomTabBar {...props} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 65,
  },
});
