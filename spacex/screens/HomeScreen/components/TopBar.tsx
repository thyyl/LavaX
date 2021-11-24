import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useMutation } from 'react-apollo';
import { useToast } from "react-native-toast-notifications";

import { AuthContext } from '../../../context/auth';
import { DELETE_USER } from '../../../utils/graphql';

const TopBar = ({onTabPressed, onProfilePress}) => {
  const { user, removeUser } = useContext(AuthContext);
  const toast = useToast();

  const handleOnPress = () => {
    if (user) {
      const userID = user;
      grpahqlRemove({ variables: { userID } })
    } else {
      toast.show("No user to be deleted!");
    }
  }

  const [grpahqlRemove] = useMutation(DELETE_USER, {
    update(_) {
      removeUser();
      toast.show("Delete Successful");
    }
  });
  
  return (
    <View style={styles.topNavigationBar}>
      <TouchableOpacity onPress={onTabPressed}>
        <Ionicons name="reorder-two-outline" size={40} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.topBarText}>Malaysia</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onProfilePress}>
        <Image style={styles.profilePicture} source={require("../../../assets/picture.jpg")}/>
      </TouchableOpacity>
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

