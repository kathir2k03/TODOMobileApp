import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalValues from "./GoalValues";
import List from "./List";
export default function HomeScreen() {
  const [goalLists, setGoalLists] = useState([]);

  function removeGoal(index) {
    const filteredGoal = goalLists.filter((_, id) => index !== id);
    setGoalLists(filteredGoal);
  }
  return (
    <View style={styles.container}>
      <GoalValues goalLists={goalLists} setGoalLists={setGoalLists} />
      <List lists={goalLists} removeGoal={removeGoal} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
