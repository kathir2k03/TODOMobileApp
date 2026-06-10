import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const List = (props) => {
  return (
    <View style={styles.viewObject}>
      <FlatList
        data={props.lists}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => props.removeGoal(index)}>
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
    backgroundColor: "#800080",
    borderRadius: 5,
    color: "#ffffff",
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
  },
});

export default List;
