import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { COLORS } from "../../constants/theme";

const App = ({ SetShow, ShowValue, Msg }) => {

  console.log('ShowValue==>', ShowValue)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ShowValue}
        onRequestClose={() => { SetShow(!ShowValue) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{Msg}</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => SetShow(!ShowValue)}>
              <Text style={styles.btnText}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 150,
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: COLORS.blue,
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  modalText:{
    color:COLORS.blue,
    marginTop:20,
    fontWeight:'bold',
    fontSize:20
  },
  button:{
    position:'absolute',
    bottom:20,
    backgroundColor:'red',
    padding:5,
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  btnText:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold'
  }

});

export default App;