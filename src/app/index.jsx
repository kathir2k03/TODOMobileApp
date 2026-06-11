import { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import GoalValues from "./GoalValues";
import List from "./List";
export default function HomeScreen() {
  const [goalLists, setGoalLists] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function removeGoal(index) {
    const filteredGoal = goalLists.filter((_, id) => index !== id);
    setGoalLists(filteredGoal);
  }
  function handleModalVisible() {
    setIsModalVisible(true);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={{ marginTop: 50, marginBottom: 30 }}>
          <Pressable onPress={handleModalVisible}>
            <Text style={styles.addNewGoal}>Click to Add New Goal</Text>
          </Pressable>
        </View>
        <GoalValues
          goalLists={goalLists}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setGoalLists={setGoalLists}
        />
        <List lists={goalLists} removeGoal={removeGoal} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#1a0037",
  },
  addNewGoal: {
    backgroundColor: "#a070d6",
    paddingVertical: 15,
    marginHorizontal: 100,
    color: "#fafafafa",
    textAlign: "center",
    fontSize: 18,
  },
});
