import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VendorDetailsScreen = () => {
  const navigation = useNavigation();

  const vendor = {
    name: "Swetha Agencies",
    location: "OMR, Kazhipattur",
    distributorFor:
      "Authorized Distributor For Bisleri, Aquafina, Blue Star Water Cans",
    avatarInitials: "SA",
    activeSubscription: {
      name: "Blue Star 25 ltrs",
      quantity: "2 x 25ltr can",
      schedule: "Every TUE, FRI, & THU 4:30 - 5:30PM",
      status: "Scheduled",
      imageUrl: require("../assets/bluestar.png"), // Replace with the actual image path
    },
  };

  const handleCallVendor = () => {
    // Logic for calling the vendor can go here
  };

  const handleStoreLocation = () => {
    // Logic for showing store location can go here
  };

  return (
    <View style={styles.container}>
      {/* Vendor Information */}
      <View style={styles.vendorInfo}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{vendor.avatarInitials}</Text>
          <View style={styles.onlineIndicator}></View>
        </View>
        <View style={styles.vendorDetails}>
          <Text style={styles.vendorName}>{vendor.name}</Text>
          <Text style={styles.vendorLocation}>{vendor.location}</Text>
        </View>
      </View>

      {/* Distributor Information */}
      <View style={styles.distributorInfo}>
        <Text style={styles.distributorText}>{vendor.distributorFor}</Text>
      </View>

      {/* Call & Location Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCallVendor}>
          <Text style={styles.buttonText}>Call Vendor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStoreLocation}>
          <Text style={styles.buttonText}>Store Location</Text>
        </TouchableOpacity>
      </View>

      {/* Active Subscription */}
      <View style={styles.subscriptionContainer}>
        <Text style={styles.activeSubscriptionTitle}>Active Subscriptions</Text>
        <View style={styles.subscriptionCard}>
          <Image
            source={vendor.activeSubscription.imageUrl}
            style={styles.subscriptionImage}
          />
          <View style={styles.subscriptionDetails}>
            <Text style={styles.subscriptionName}>
              {vendor.activeSubscription.name}
            </Text>
            <Text style={styles.subscriptionQuantity}>
              {vendor.activeSubscription.quantity}
            </Text>
            <Text style={styles.subscriptionSchedule}>
              {vendor.activeSubscription.schedule}
            </Text>
          </View>
          <View style={styles.subscriptionActions}>
            <Text style={styles.statusText}>
              {vendor.activeSubscription.status}
            </Text>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>Manage</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  avatarContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#A020F0",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: "#00FF00",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  vendorDetails: {
    marginLeft: 16,
  },
  vendorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  vendorLocation: {
    color: "#888",
    fontSize: 14,
  },
  distributorInfo: {
    marginBottom: 16,
  },
  distributorText: {
    fontSize: 14,
    color: "#555",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#32CD32",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subscriptionContainer: {
    marginTop: 16,
  },
  activeSubscriptionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  subscriptionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
  },
  subscriptionImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  subscriptionDetails: {
    flex: 1,
    marginLeft: 16,
  },
  subscriptionName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subscriptionQuantity: {
    fontSize: 14,
    color: "#888",
  },
  subscriptionSchedule: {
    fontSize: 12,
    color: "#888",
  },
  subscriptionActions: {
    alignItems: "center",
  },
  statusText: {
    color: "#32CD32",
    fontSize: 12,
    marginBottom: 8,
  },
  manageButton: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  manageButtonText: {
    fontSize: 12,
    color: "#000",
  },
});

export default VendorDetailsScreen;
