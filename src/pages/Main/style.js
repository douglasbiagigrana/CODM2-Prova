import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: Constants.statusBarHeight + 2,
    backgroundColor: "#f0ee87",
  },
  toolbox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 30,
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
    borderBottomWidth: 1,
    borderBottomColor: "#d7dd75",
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 26,
  },
  itemRead: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },
  editButton: {},
  deleteButton: {},
});

export default styles;