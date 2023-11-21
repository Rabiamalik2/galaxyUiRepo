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

    // justifyContent: 'center',
  },
  viewComp: {
    marginHorizontal: responsiveHeight(4),
  },
  textmain: {
    marginTop: responsiveHeight(10),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: responsiveFontSize(4),
  },
  textUniverse: {
    marginTop: responsiveHeight(-2),
    color: Colors.white,
    fontFamily: Fonts.PoppinsBold,
    fontSize: responsiveFontSize(6),
  },
  textWelcome: {
    marginTop: responsiveHeight(32),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: responsiveFontSize(5),
  },
  textsub: {
    marginTop: responsiveHeight(-1),
    color: Colors.white,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(2),
  },
  loginTo: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: responsiveFontSize(2),
    backgroundColor: Colors.white,
  },
  loginText: {
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.PoppinsBold,
  },
  iconArrowright: {
    marginLeft: responsiveHeight(1),
    marginTop: responsiveHeight(-0.2),
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    fontFamily: Fonts.PoppinsBlack,
  },
  newAccTo: {
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newAccText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.PoppinsMedium,
    textDecorationLine: 'underline',
  },
});
export default styles;
