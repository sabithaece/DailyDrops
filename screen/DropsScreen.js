import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; 



const DropsScreen = () => {
  const navigation = useNavigation();
  const pressSearch = () => {
    navigation.navigate("Search");
  };

  // Date row data
  const dates = ["12", "13", "14", "15", "16", "17", "18"];
  const dayNames = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  // Product data
  const products = [
    {
      id: 1,
      name: "Aavin Double Toned Milk",
      quantity: "2 x 500ml pouch",
      deliveryTime: "Everyday 6:30 - 7:00AM",
      status: "Delivered",
      image: require("../assets/aavinmilk.png"), 
    },
    {
      id: 2,
      name: "Tender Coconut",
      quantity: "2 Pcs",
      deliveryTime: "Every SUN, WED 6:30 - 7:00AM",
      status: "Delivered",
      image: require("../assets/tender-coconut.png"), 
    },
    {
      id: 3,
      name: "Aquafina 25 ltrs",
      quantity: "2 x 25ltr can",
      deliveryTime: "Every SUN, WED, THU 4:30 - 5:30PM",
      status: "Scheduled",
      image: require("../assets/aquafina.png"), 
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>15 September</Text>
      </View>

      {/* Scrollable Date row */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.dateRow}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={index === 3 ? styles.selectedDate : styles.dateItem}
          >
            <Text style={styles.dayText}>{dayNames[index]}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product list */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image
              source={product.image} // Correct usage of local images
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productQuantity}>{product.quantity}</Text>
              <Text style={styles.deliveryTime}>{product.deliveryTime}</Text>
              <Text
                style={[
                  styles.status,
                  product.status === "Delivered"
                    ? styles.delivered
                    : styles.scheduled,
                ]}
              >
                {product.status}
              </Text>
            </View>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>Manage</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation with Icons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={24} color="#555" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={pressSearch}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  dateItem: {
    alignItems: "center",
    padding: 10,
  },
  selectedDate: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#064e3b",
    borderRadius: 10,
  },
  dayText: {
    color: "#777",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productList: {
    marginTop: 10,
  },
  productItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productQuantity: {
    color: "#777",
  },
  deliveryTime: {
    color: "#999",
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  delivered: {
    backgroundColor: "#dcfce7",
    color: "#14532d",
    width : 98

  },
  scheduled: {
    backgroundColor: "#e0f2fe",
    color: "#164e63",
    width : 97
  },
  manageButton: {
    backgroundColor: "#9dd694",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    // marginTop: 10,
  },
  manageButtonText: {
    color: "#155b44",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 14, color: "#555", marginTop: 5 },
});

export default DropsScreen;
