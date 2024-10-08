import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const VendorSubscriptionScreen = () => {
  // Sample data for vendor and products
  const vendor = {
    name: "Swetha Agencies",
    location: "OMR, Kazhipattur",
    mainProduct: {
      name: "Blue Star Water Can",
      size: "25 Litres Can",
      price: 25,
      imageUrl: require("../assets/bluestar.png"),
    },
    otherProducts: [
      {
        id: "1",
        name: "Bisleri Water Can",
        imageUrl: require("../assets/bisleri.png"),
      },
      {
        id: "2",
        name: "Aquafina Water Can",
        imageUrl: require("../assets/aquafina.png"),
      },
    ],
  };

  const renderOtherProduct = ({ item }) => (
    <View style={styles.otherProductContainer}>
      <Image source={{ uri: item.image }} style={styles.otherProductImage} />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Vendor Information */}
      <View style={styles.vendorInfo}>
        <View style={styles.vendorAvatar}>
          <Text style={styles.vendorAvatarText}>SA</Text>
        </View>
        <View>
          <Text style={styles.vendorName}>{vendor.name}</Text>
          <Text style={styles.vendorLocation}>{vendor.location}</Text>
        </View>
      </View>

      {/* Main Product Information */}
      <View style={styles.mainProduct}>
        <Image
          source={{ uri: vendor.mainProduct.image }}
          style={styles.mainProductImage}
        />
        <Text style={styles.productName}>{vendor.mainProduct.name}</Text>
        <Text style={styles.productSize}>{vendor.mainProduct.size}</Text>
        <Text style={styles.productPrice}>
          ₹ {vendor.mainProduct.price} Inclusive of all tax
        </Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Other Products */}
      <View style={styles.otherProductsContainer}>
        <Text style={styles.otherProductsTitle}>Other Products</Text>
        <FlatList
          data={vendor.otherProducts}
          renderItem={renderOtherProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  vendorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  vendorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  vendorAvatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  vendorName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  vendorLocation: {
    color: "#888",
  },
  mainProduct: {
    alignItems: "center",
    marginBottom: 16,
  },
  mainProductImage: {
    width: 150,
    height: 200,
    resizeMode: "contain",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
  productSize: {
    color: "#888",
  },
  productPrice: {
    color: "#888",
    marginTop: 8,
  },
  subscribeButton: {
    backgroundColor: "#32CD32",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  otherProductsContainer: {
    marginTop: 16,
  },
  otherProductsTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  otherProductContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  otherProductImage: {
    width: 80,
    height: 100,
    resizeMode: "contain",
    marginBottom: 5,
  },
});

export default VendorSubscriptionScreen;
