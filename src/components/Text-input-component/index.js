import {StyleSheet, Text, View, TextInput} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../services/constants/colors';

const Input = React.forwardRef(
  (
    // placeholder,
    // value,
    // keyboardType,
    // password,
    // picker,
    // error,
    // onChangeText,
    // onSubmitEditting,
    // returnKeyType,
    // autoCapitalize,
    // name,
    // onFocus,
    // editable,
    props,
    ref,
  ) => {
    const {Icon} = props;
    console.log('icon', Icon);
    return (
      <View style={styles.inpMainView}>
        <View style={styles.txtinpView}>
          <TextInput
            autoCapitalize={props.autoCapitalize}
            value={props.value}
            ref={ref}
            onSubmitEditing={props.onSubmitEditting}
            returnKeyType={props.returnKeyType}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            placeholderTextColor="white"
            keyboardType={props.keyboardType}
            onFocus={props.onFocus}
            editable={props.editable}
            style={[styles.textiS, props.style]}
          />
          {Icon && Icon}
        </View>
      </View>
    );
  },
);
export default Input;

const styles = StyleSheet.create({
  txtinpView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    borderRadius: 12,
    // backgroundColor: Colors.purple,
    borderBottomColor: Colors.grey,
    // borderEndColor: Colors.lightGrey,
    borderBottomWidth: 2,
    padding: 1.7,
    // opacity: 0.5,
  },
  textiS: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    left: 10,
    flexWrap: 'wrap',
    color: Colors.white,
    // fontFamily:''
  },
  icon1S: {
    left: -40,
    fontSize: responsiveFontSize(2.5),
    color: Colors.lightGrey,
  },
  iconPicker: {
    left: 230,
    fontSize: responsiveFontSize(4),
    color: Colors.white,
  },
  inpMainView: {
    flex: 0,
    marginTop: 15,
    bottom: 20,
    alignItems: 'center',
  },
});
