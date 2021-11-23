import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const TopBar = ({onTabPressed}) => {
  return (
    <View style={styles.topNavigationBar}>
      <TouchableOpacity onPress={onTabPressed}>
        <Ionicons name="reorder-two-outline" size={40} color="black" />
      </TouchableOpacity>

      <Text style={styles.topBarText}>Malaysia</Text>
      <Image style={styles.profilePicture} source={require("../../../assets/picture.jpg")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigationBar: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  topBarText: {
    fontWeight: 'bold', 
    fontSize: 15,
  },
  profilePicture: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
  }
});

export default TopBar

