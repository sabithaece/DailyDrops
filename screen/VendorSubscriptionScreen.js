import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const VendorSubscriptionScreen = () => {
  const navigation = useNavigation(); 

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
      <Image source={item.imageUrl} style={styles.otherProductImage} />
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
        <View style={styles.vendorDetails}>
          <Text style={styles.vendorName}>{vendor.name}</Text>
          <Text style={styles.vendorLocation}>{vendor.location}</Text>
        </View>
      </View>

      {/* Gray Line */}
      <View style={styles.grayLine} />

      {/* Main Product Information */}
      <View style={styles.mainProduct}>
        <Text style={styles.productName}>{vendor.mainProduct.name}</Text>
        <Text style={styles.productSize}>{vendor.mainProduct.size}</Text>
        <Image
          source={vendor.mainProduct.imageUrl}
          style={styles.mainProductImage}
        />
        <Text style={styles.priceBold}>₹ {vendor.mainProduct.price}</Text>

        <Text style={styles.taxInfo}>Inclusive of all tax</Text>

        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => navigation.navigate("SubcriptionStratScreen")} 
        >
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
          ItemSeparatorComponent={() => <View style={styles.separator} />} 
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
    justifyContent: "center",
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
  vendorDetails: {
    justifyContent: "center",
  },
  vendorName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  vendorLocation: {
    color: "#888",
  },
  grayLine: {
    height: 1,
    backgroundColor: "#D3D3D3",
    width: "100%",
    marginVertical: 10,
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
    textAlign: "left",
    marginRight: 200,
  },
  productSize: {
    color: "#888",
    textAlign: "center",
    marginRight: 200,
  },
  productPrice: {
    color: "#888",
    textAlign: "left",
  },
  priceBold: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 250,
  },
  taxInfo: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    marginRight: 200,
  },
  subscribeButton: {
    backgroundColor: "#9dd694",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: -40,
    marginLeft: 150,
  },
  subscribeButtonText: {
    color: "#064e3b",
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
    borderWidth: 1,
    borderColor: "#9dd694",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
  },
  otherProductImage: {
    width: 80,
    height: 100,
    resizeMode: "contain",
    marginBottom: 5,
  },
  separator: {
    width: 10,
  },
});

export default VendorSubscriptionScreen;
