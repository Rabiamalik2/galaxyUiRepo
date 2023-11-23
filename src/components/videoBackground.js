import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Video from 'react-native-video';
const VideoBackground = ({source}) => {
  return (
    <Video
      source={source}
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={'cover'}
      rate={1.0}
      ignoreSilentSwitch={'obey'}
    />
  );
};

export default VideoBackground;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
