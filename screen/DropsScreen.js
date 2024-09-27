import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const DropsScreen = () => {
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
      image: "https://example.com/aavin-milk.jpg", // Replace with actual image URL or use require
    },
    {
      id: 2,
      name: "Tender Coconut",
      quantity: "2 Pcs",
      deliveryTime: "Every SUN, WED 6:30 - 7:00AM",
      status: "Delivered",
      image: "https://example.com/tender-coconut.jpg",
    },
    {
      id: 3,
      name: "Aquafina 25 ltrs",
      quantity: "2 x 25ltr can",
      deliveryTime: "Every SUN, WED, THU 4:30 - 5:30PM",
      status: "Scheduled",
      image: "https://example.com/aquafina.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>15 September</Text>
      </View>

      {/* Date row */}
      <View style={styles.dateRow}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={index === 3 ? styles.selectedDate : styles.dateItem}
          >
            <Text style={styles.dayText}>{dayNames[index]}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product list */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image
              source={{ uri: product.image }}
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

       {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("drops")}
        >
          <Text style={styles.navText}>drops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
    justifyContent: "space-around",
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
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  productImage: {
    width: 50,
    height: 50,
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
  },
  scheduled: {
    backgroundColor: "#e0f2fe",
    color: "#164e63",
  },
  manageButton: {
    backgroundColor: "#9dd694",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  manageButtonText: {
    color: "#155b44",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DropsScreen;
