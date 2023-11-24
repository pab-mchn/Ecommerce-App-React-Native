import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import { Pressable, Text, View, FlatList, Image, StyleSheet } from "react-native";

const Products = () => {
  const { buyProducts } = useContext(DataContext);
  const productos = [
    {
      id: 1,
      productName: "Sandia",
      price: 15,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1699869750/e-commerce/ksmw5s3xg7eeakpva5xd.png",
    },
    {
      id: 2,
      productName: "Cervecita",
      price: 20,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1699869747/e-commerce/xhlekqrockwxzjskzppw.png",
    },
    {
      id: 3,
      productName: "Bananita",
      price: 30,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png",
    },
    {
      id: 4,
      productName: "Compu",
      price: 40,
      img: "https://res.cloudinary.com/pabcode/image/upload/v1700045911/e-commerce/compu_unvcoi.png",
    },
  ];

  const handleBuyPress = (product) => {
    buyProducts(product);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ecommerce App</Text>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productPrice}> Precio: {item.price} $</Text>
            <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
              <Text style={styles.buyButtonText}>comprar</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    paddingBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  productItem: {
    borderBottomWidth: 0,
    borderColor: "#ccc",
    paddingVertical: 18,
    alignItems: "center",
  },
  productImage: {
    width: 170,
    height: 145,
    resizeMode: "cover",
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "green",
  },
  buyButton: {
    backgroundColor: "#1bcb7f",
    padding: 8,
    width: 150,
    marginTop: 8,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Products;
