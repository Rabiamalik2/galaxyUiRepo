import {StyleSheet} from 'react-native';
import Colors from '../../../services/constants/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fonts from '../../../services/constants/fonts';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.oceanBlue,
  },

  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    flex: 1,
  },
  viewComp: {
    marginTop: responsiveHeight(6),
    marginHorizontal: responsiveHeight(2),
  },
  textmain: {
    marginTop: responsiveHeight(2),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: responsiveFontSize(4.5),
  },
  textUniverse: {
    marginTop: responsiveHeight(-2),
    color: Colors.white,
    fontFamily: Fonts.PoppinsBold,
    fontSize: responsiveFontSize(7),
  },
  loginTo: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(70),
    height: responsiveHeight(7),
    borderRadius: responsiveFontSize(2),
    backgroundColor: Colors.white,
  },
  loginText: {
    color: Colors.black,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.PoppinsBold,
  },
  iconArrowright: {
    marginLeft: responsiveHeight(2),
    marginTop: responsiveHeight(-0.2),
    fontSize: responsiveFontSize(3),
    color: Colors.black,
    fontFamily: Fonts.PoppinsBlack,
  },
  forgotPassTo: {
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassText: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.5),
    fontFamily: Fonts.PoppinsMedium,
    textDecorationLine: 'underline',
  },
});
export default styles;
