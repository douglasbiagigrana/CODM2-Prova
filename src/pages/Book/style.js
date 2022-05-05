import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 2,
    backgroundColor: "#F0F8FF",
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#3498db",
  },
  input: {
    fontSize: 17,
    borderBottomColor: '#3498db',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingVertical: 10,
  },
  saveButton: {
    backgroundColor: '#3498db',
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 13,
    width: "100%",
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: "center",
    fontSize: 16,
  },
  cancelButton: {
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 13,
    width: "100%",
    marginBottom: 20,
  },
  cancelButtonText: {
    color: '#95a5a6',
    textAlign: "center",
    fontSize: 16,
  },
});

export default styles;
