import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalValues = (props) => {
  const [goal, setGoal] = useState("");
  function handleText() {
    if (!goal.trim()) return;
    props.setGoalLists((prev) => [...prev, goal]);
    setGoal("");
  }
  return (
    <View style={styles.viewObject}>
      <TextInput
        value={goal}
        onChangeText={setGoal}
        style={styles.textObject}
        placeholder="Enter Name"
      />
      <Button
        onPress={() => {
          handleText(goal);
        }}
        title="Add Goal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewObject: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    height: 200,
  },
  textObject: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
export default GoalValues;
