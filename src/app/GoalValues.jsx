import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalValues = (props) => {
  const [goal, setGoal] = useState("");
  function handleText() {
    if (!goal.trim()) return;
    props.setGoalLists((prev) => [...prev, goal]);
    setGoal("");
    props.setIsModalVisible(false);
  }
  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.viewObject}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Goal.png")}
        />
        <TextInput
          value={goal}
          onChangeText={setGoal}
          style={styles.textObject}
          placeholder="Enter Name"
        />
        <View style={styles.buttonDiv}>
          <View style={styles.buttonContainer}>
            <Button
              color="#f31282"
              onPress={() => props.setIsModalVisible(false)}
              title="Cancel"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button color="#5e0acc" onPress={handleText} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewObject: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a0037",
  },
  textObject: {
    height: 50,
    width: "90%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    borderColor: "gray",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#e4d0ff",
  },
  buttonDiv: {
    gap: 15,
    flexDirection: "row",
  },
  buttonContainer: {
    width: 120,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 25,
  },
});
export default GoalValues;
