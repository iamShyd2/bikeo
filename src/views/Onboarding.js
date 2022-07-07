import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

import Splash from "./Splash";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const { width } = Dimensions.get('screen');

const screens = [
  Splash,
  Screen1,
  Screen2,
  Screen3,
];

const Onboarding = () => {
  let scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = React.useCallback(({ item: Item, index }) => {
    return (
      <View
        style={styles.itemContainer}
      >
        <Item />
      </View>
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <StatusBar hidden />
      <Animated.FlatList
          data={screens}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          pagingEnabled
          horizontal
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          renderItem={renderItem}
      />
      <ExpandingDot
        data={screens}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.2}
        dotStyle={styles.dot}
        activeDotColor={'#00a39b'}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    fontFamily: "Montserrat",
    color: "#000"
  },
  itemContainer: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#347af0',
    borderRadius: 5,
    marginHorizontal: 5
  }
});

export default Onboarding;
