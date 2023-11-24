import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { DataContext } from "../Context/DataContext";

const ModalComponent = () => {
  const { cart, setCart, buyProducts } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  //total
  const total = cart.reduce((acc, el) => acc + el.quanty * el.price, 0);

  //increase
  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  //drecrease
  const handleDreasePress = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quanty !== 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)));
  };

  //delete
  const handleDeletePress = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.cartIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>Cart Items:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text style={styles.modalTextProduct}>{item.productName}</Text>

                  <Text style={styles.modalTextProduct}>
                    <Pressable onPress={() => handleDreasePress(item)}>
                      <Text>➖</Text>
                    </Pressable>

                    <Text style={styles.modalTextProduct}>{item.quanty}</Text>

                    <Pressable onPress={() => handleBuyPress(item)}>
                      <Text>➕</Text>
                    </Pressable>
                  </Text>

                  <Text style={styles.modalTextProduct}>
                    Total: ${item.quanty * item.price}
                    <Pressable onPress={() => handleDeletePress(item)}>
                      <Text>❌</Text>
                    </Pressable>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
            <Text style={styles.totalText}>Total: ${total}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    left: 120,
  },
  buttonClose: {
    backgroundColor: "#111111",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalButton: {
    position: "fixed",
    bottom: 30,
    left: 150,
    backgroundColor: "#111111",
    padding: 10,
    borderRadius: 30,
  },
  cartIcon: {
    fontSize: 20,
  },
  cartItem: {
    marginBottom: 10,
  },
  modalTextProduct: {
    marginBottom: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalComponent;
