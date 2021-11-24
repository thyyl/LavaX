import React from 'react'
import { View, Modal, StyleSheet, Text, Pressable } from 'react-native'

const FirstLoginMessage = ({showModal, setShowModal}) => {
  return (
    <Modal 
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <View style={styled.centeredView}>
        <View style={styled.modalView}>
          <Text style={styled.text}>Welcome to SpaceX!</Text>

          <Pressable
            style={[styled.button, styled.buttonClose]}
            onPress={() => setShowModal(false)}
          >
            <Text style={styled.textStyle}>Close</Text>
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
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 150,
    width: 200,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2, 
    marginTop: 20,
    width: 100,
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
})

export default FirstLoginMessage
