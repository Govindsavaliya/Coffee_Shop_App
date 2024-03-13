import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  ImageContainer: {
    width: SPACING.space_36,
    height: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  Image: {
    width: SPACING.space_36,
    height: SPACING.space_36,
  },
});
