import { StyleSheet, Text, View, Image } from "react-native";

const ServiceCard = ({ item }) => {
  if (!item) {
    return null; // Avoid rendering if item is undefined
  }

  return (
    <View style={styles.container}>
      <Text style={styles.recentSearch}>
        {item.title ?? "No Title"}
      </Text>
      {item.image && (
        <Image source={item.image} style={styles.serviceImg} />
      )}
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 140,
    padding: 5,
    marginLeft: 8,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000",
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
});