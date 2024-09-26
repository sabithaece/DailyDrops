import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

// Reusable ProductCard component
const ProductCard = ({ title, price, imageUrl, onSubscribe }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <TouchableOpacity style={styles.subscribeButton} onPress={onSubscribe}>
      <Text style={styles.subscribeText}>Subscribe</Text>
    </TouchableOpacity>
  </View>
);

// Sample data for products
const products = [
  {
    id: "1",
    title: "Aavin Milk",
    price: "₹20/500ml",
    imageUrl: "https://yourimageurl.com/aavinmilk.jpg",
  },
  {
    id: "2",
    title: "Arokya Milk",
    price: "₹21/500ml",
    imageUrl: "https://yourimageurl.com/arokyamilk.jpg",
  },
  {
    id: "3",
    title: "Bisleri Water Can",
    price: "₹77/25ltr Can",
    imageUrl: "https://yourimageurl.com/bisleriwater.jpg",
  },
];

// Sample data for icons (running low)
const runningLowItems = [
  { id: "1", name: "Water Can", image: require("../assets/water-can.png") },
  { id: "2", name: "Milk", image: require("../assets/milk.png") },
  { id: "3", name: "Flowers", image: require("../assets/flowers.png") },
];

const SearchScreen = () => {
  const renderProductItem = ({ item }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      onSubscribe={() => alert(`Subscribed to ${item.title}`)}
    />
  );

  const renderRunningLowItem = ({ item }) => (
    <View style={styles.iconBox}>
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Section: What Are You Running Low On */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Are You Running Low On?</Text>
        <FlatList
          data={runningLowItems}
          renderItem={renderRunningLowItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Section: Popular in Your Area */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular in Your Area</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconBox: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  iconImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Shadow effect for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Shadow effect for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  subscribeButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchScreen;
