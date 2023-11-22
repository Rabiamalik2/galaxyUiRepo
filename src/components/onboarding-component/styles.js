import {StyleSheet} from 'react-native';
import Fonts from '../../services/constants/fonts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
// define your styles
const styles = StyleSheet.create({
  container: {
    // flexGrow: 19,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    // justifyContent: 'center',
    // bottom: -19,
  },
  text: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
  },
  text1: {
    fontSize: responsiveFontSize(2.3),
    marginTop: responsiveHeight(18),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
  },
});

export default styles;
