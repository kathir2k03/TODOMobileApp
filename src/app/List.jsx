import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const List = (props) => {
  return (
    <View style={styles.viewObject}>
      <FlatList
        data={props.lists}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => props.removeGoal(index)}
            style={({ pressed }) => pressed && styles.rippleEffect}
            android_ripple={{ color: "#000000", backgroundColor: "#ffffff" }}
          >
            <Text style={styles.goalListText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewObject: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  goalListText: {
    backgroundColor: "#f31282",
    borderRadius: 5,
    color: "#ffffff",
    padding: 15,
    borderWidth: 1,
    marginVertical: 15,
    fontSize: 16,
  },
  rippleEffect: {
    opacity: 0.7,
  },
});

export default List;
