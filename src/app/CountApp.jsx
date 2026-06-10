import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CountApp() {
  const [count, setCount] = useState(1);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Count result={count} />
      <View style={styles.buttonView}>
        <Button onPress={incrementCount} title="Increment" />
        <Button onPress={decrementCount} title="Decrement" />
      </View>
    </View>
  );
}

const Count = (props) => {
  return (
    <View style={styles.countView}>
      <Text style={styles.countText}>{props.result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    gap: "10%",
  },
  countView: {
    marginBottom: 50,
  },
  countText: {
    fontSize: 32,
  },
});
