import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 2,
    backgroundColor: "#F0F8FF",
  },
  toolbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    color: "#3498db",
  },
  toolboxButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#3498db",
    paddingVertical: 10,
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 20,
  },
  itemRead: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {
    
  },
});

export default styles;