import { StyleSheet, View } from "react-native";
import Products from "./src/components/Products/Products";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";

import { DataProvider } from "./src/components/Context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Products />
        <ModalComponent />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
