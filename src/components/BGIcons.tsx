import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconsProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

const BGIcons: React.FC<BGIconsProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.IconsBG, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BGIcons;

const styles = StyleSheet.create({
  IconsBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
