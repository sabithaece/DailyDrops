
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

const HomeScreen = ({ navigation }) => {
  const dailySupplies = [
    { id: "1", name: "Water Can", image: require("../assets/water-can.png") },
    { id: "2", name: "Milk", image: require("../assets/milk.png") },
    { id: "3", name: "Flowers", image: require("../assets/flowers.png") },
    { id: "4", name: "Spinach", image: require("../assets/spinach.png") },
    {
      id: "5",
      name: "Post-Workout",
      image: require("../assets/post-workout.png"),
    },
    {
      id: "6",
      name: "Tender Coconut",
      image: require("../assets/tender-coconut.png"),
    },
  ];

  const otherServices = [
    { id: "1", name: "Laundry", image: require("../assets/laundry.png") },
    { id: "2", name: "Medicines", image: require("../assets/medicines.png") },
    { id: "3", name: "Magazines", image: require("../assets/magazines.png") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.deliveryText}>Delivering To</Text>
        <Text style={styles.homeText}>Mythreya's Home</Text>
      </View>

      {/* Daily Drop Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../assets/aquafina.png")}
          style={styles.bannerImage}
        />
        <View>
          <Text style={styles.bannerTitle}>Daily Drop</Text>
          <Text style={styles.bannerSubtitle}>Thirsty for Savings?</Text>
          <Text style={styles.bannerDescription}>
            Subscribe to Fresh Water Today!
          </Text>
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Daily Supplies</Text>
      <FlatList
        data={dailySupplies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        nestedScrollEnabled={true}
      />

      <Text style={styles.sectionTitle}>Other Services</Text>
      <FlatList
        data={otherServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        nestedScrollEnabled={true}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={24} color="#555" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Search")}
        >
          <Icon name="search" size={24} color="#555" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("drops")}
        >
          <Icon name="dropbox" size={24} color="#555" />
          <Text style={styles.navText}>Drops</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Account")}
        >
          <Icon name="user" size={24} color="#555" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: { padding: 20, backgroundColor: "#FFF3E6" },
  white: { backgroundColor: "#FFF" },
  deliveryText: { fontSize: 14, color: "#888" },
  homeText: { fontSize: 18, fontWeight: "bold" },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E8F7E6",
  },
  bannerImage: { width: 80, height: 120, resizeMode: "contain" },
  bannerTextContainer: { marginLeft: 10 },
  bannerTitle: { fontSize: 20, fontWeight: "bold", color: "#2E7D32" },
  bannerSubtitle: { fontSize: 16, color: "#555" },
  bannerDescription: { fontSize: 14, color: "#888", marginTop: 5 },
  subscribeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#d1fae5",
    borderRadius: 5,
  },
  subscribeButtonText: { color: "#", fontSize: 16, textAlign: "center" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  flatListContent: { paddingHorizontal: 10 },
  item: { flex: 1, alignItems: "center", padding: 10 },
  itemImage: { width: 60, height: 60, resizeMode: "contain" },
  itemText: { marginTop: 5, fontSize: 14 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 14, color: "#555" },
});

export default HomeScreen;
