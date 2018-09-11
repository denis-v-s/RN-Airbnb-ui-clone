import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Category from '../components/Explore/Category'
import Home from '../components/Explore/Home'
import Tag from '../components/Explore/Tag'
import Icon from '@expo/vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 92
    this.endHeaderHeight = 60
    if (Platform.OS === 'android') {
      //this.startHeaderHeight = 100 + StatusBar.currentHeight
      //this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      // as the user scrolls from 0 to 50, we are changing the height from start to endHeaderHeight
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      // backwards, because inputRange must go up... So as we are going from header height of 60 to 92,
      // make the element more invisible.
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp'
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: Expo.Constants.statusBarHeight + 10 }}>
          <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={styles.search}>
              <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Try New York"
                placeholderTextColor='grey'
                underlineColorAndroid='transparent'
                style={styles.searchBox} />
            </View>
            <Animated.View 
              style={{
                flexDirection: 'row', 
                marginHorizontal: 10, 
                position: 'relative', 
                top: this.animatedTagTop, 
                opacity: this.animatedOpacity}}>
              <Tag text='Guests' />
              <Tag text='Dates' />
            </Animated.View>
          </Animated.View>

          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <ScrollView 
            scrollEventThrottle={16} 
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                // get current scroll and store it into a property called scrollY
                { nativeEvent: {contentOffset: {y: this.scrollY}} }
              ]
            )}
            >
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                What can we help you find, stranger?
                </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/home.jpg')} name='Home' />
                  <Category imageUri={require('../assets/experiences.jpg')} name='Experiences' />
                  <Category imageUri={require('../assets/restaurant.jpg')} name='Restaurants' />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing Airbnb Plus</Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of homes verified for quality and comfort
                  </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={require('../assets/home.jpg')}
                    style={{ flex: 1, height: null, width: null, borderRadius: 5, borderWidth: 1, borderColor: '#ddd' }} />
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                  Homes Around the World
                </Text>
                <View
                  style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
                  <Home width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" price='$82' />
                  <Home width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" price='$82' />
                  <Home width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" price='$82' />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  search: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    elevation: 3, // replaces shadowOffset on android
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  searchBox: {
    flex: 1,
    fontWeight: '700',
  }
});