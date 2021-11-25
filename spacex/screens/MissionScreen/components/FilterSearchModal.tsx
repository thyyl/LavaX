import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Modal, Pressable } from 'react-native'
import { useToast } from "react-native-toast-notifications";
import { Launch } from '../../../interface/launchInterface';

const FilterSearchModal = ({modalVisible, setModalVisible, filteredData}) => {
  const toast = useToast();

  const [rocket, setRocket] = useState('');
  const [year, setYear] = useState('');

  const onPress = () => {
    if (rocket.trim() === "" || year.trim() === "")
      toast.show("Please enter something");
    else if (isNaN(parseInt(year)))
      toast.show("Year must be a digit");
    else {
      setModalVisible(!modalVisible);
      filteredData(rocket, year);
    }

    setRocket('');
    setYear('');
  } 

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styled.centeredView}>
        <View style={styled.modalView}>
          <Text style={styled.modalText}>Rocket</Text>
          <TextInput 
            style={styled.textInput}
            placeholder={'Enter the rocket name'}
            onChangeText={rocket => setRocket(rocket)}
            defaultValue={rocket}
          />

          <Text style={styled.modalText}>Launch Year</Text>
          <TextInput 
            style={styled.textInput}
            keyboardType="numeric"
            placeholder={'Enter the launch year'}
            onChangeText={year => setYear(year)}
            defaultValue={year}
          />

          <Pressable
            style={[styled.button, styled.buttonClose]}
            onPress={onPress}
          >
            <Text style={styled.textStyle}>Filter</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styled = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
    width: 300,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: 'blue',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center"
  },
  textInput: {
    width: '100%',
    height: 30,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 15,
    marginTop: 15,
    fontWeight: 'bold',
  }
})

export default FilterSearchModal
