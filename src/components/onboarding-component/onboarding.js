import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Animated,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import slides from '../data/slides';
import Fonts from '../../services/constants/fonts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Paginator from './paginator';
import {useNavigation, useRoute} from '@react-navigation/native';
import RouteNames from '../../services/constants/route-names';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component

const OnBoarding = props => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const flatListRef = useRef(FlatList);
  const nextPress = index => {
    if (index <= 2) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index + 1,
      });
    }
  };
  const skipPress = index => {
    console.log('length', slides.length);
    const lastIndex = slides.length - 1;
    if (index >= 1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: lastIndex,
      });
    }
  };

  const lastButton = async () => {
    const key = 'isOnboarding';
    await AsyncStorage.setItem(key, JSON.stringify(false));
    navigation.navigate(RouteNames.navigatorNames.appNavigator, {
      screen: RouteNames.appRoutes.homeScreen,
    });
  };
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator
          bounces={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  height: 100,
                }}>
                <ImageBackground
                  source={item.image}
                  style={[styles.image, {resizeMode: 'cover'}]}>
                  <View
                    style={{
                      marginHorizontal: responsiveHeight(3),
                      marginTop: responsiveHeight(2),
                    }}>
                    {item.isFirstScreen ? (
                      <View></View>
                    ) : (
                      <View>
                        <TouchableOpacity
                          style={{
                            alignSelf: 'flex-end',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: responsiveWidth(20),
                            height: responsiveHeight(3),
                            borderRadius: responsiveFontSize(2),
                            backgroundColor: Colors.white,
                            opacity: 0.5,
                            flexDirection: 'row',
                          }}
                          onPress={() => skipPress(index)}>
                          <Text
                            style={{
                              color: Colors.white,
                              fontSize: responsiveFontSize(2),
                              fontFamily: Fonts.PoppinsBold,
                            }}>
                            Skip
                          </Text>
                          <AntDesign
                            name="arrowright"
                            style={{
                              marginLeft: responsiveHeight(1),
                              marginTop: responsiveHeight(0.1),
                              fontSize: responsiveFontSize(2),
                              color: Colors.white,
                              fontFamily: Fonts.PoppinsExtraBold,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    <Text
                      style={{
                        marginTop: responsiveHeight(8),
                        color: Colors.white,
                        fontSize: responsiveFontSize(5),
                        fontFamily: Fonts.PoppinsMedium,
                      }}>
                      {item.title1}
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: responsiveFontSize(7),
                        fontFamily: Fonts.PoppinsBold,
                        marginTop: responsiveHeight(-3),
                      }}>
                      {item.title2}
                    </Text>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.text1}>{item.description}</Text>
                    {item.isFirstScreen ? (
                      <View>
                        <TouchableOpacity
                          style={{
                            marginTop: responsiveHeight(10),
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: responsiveWidth(80),
                            height: responsiveHeight(7),
                            borderRadius: responsiveFontSize(2),
                            backgroundColor: Colors.white,
                            flexDirection: 'row',
                          }}
                          onPress={() => {
                            if (index == slides.length - 1) {
                              lastButton();
                            }
                          }}>
                          <Text
                            style={{
                              color: Colors.black,
                              fontSize: responsiveFontSize(2),
                              fontFamily: Fonts.PoppinsBold,
                            }}>
                            {item.buttonName}
                          </Text>
                          <AntDesign
                            name="arrowright"
                            style={{
                              marginLeft: responsiveHeight(1),
                              marginTop: responsiveHeight(0.1),
                              fontSize: responsiveFontSize(2),
                              color: Colors.black,
                              fontFamily: Fonts.PoppinsExtraBold,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View
                        style={{
                          marginLeft: responsiveHeight(10.5),
                          position: 'absolute',
                          marginTop: responsiveHeight(90),
                        }}>
                        <Paginator data={slides} scrollX={scrollX} />
                      </View>
                    )}
                  </View>
                </ImageBackground>
              </View>
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={flatListRef}
        />
      </View>
    </SafeAreaView>
  );
};
export default OnBoarding;
//  <Paginator data={slides} scrollX={scrollX} />
